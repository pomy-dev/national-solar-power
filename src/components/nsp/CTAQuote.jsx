import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const STEPS = ["Your Details", "Site Type", "Energy Needs"];

export default function CTAQuote() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    siteType: "",
    monthlyBill: "",
    backup: "",
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setSubmitting(true);
    await base44.integrations.Core.SendEmail({
      to: form.email || "leads@nationalsolarpower.co.za",
      subject: "New National Solar Power Enquiry",
      body: `New quote request:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSite type: ${form.siteType}\nMonthly bill: ${form.monthlyBill}\nBackup: ${form.backup}`,
    }).catch(() => {});
    setSubmitting(false);
    setDone(true);
  };

  return (
    <section id="quote" className="relative bg-obsidian py-32 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3 text-center">
          Smart Quote Command Center
        </p>
        <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold text-center mb-4">
          Build your energy plan.
        </h2>
        <p className="text-silver/50 text-center mb-12">
          A short questionnaire — an energy advisor validates your estimate before any binding quote.
        </p>

        <div className="flex items-center justify-center gap-3 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border ${
                i <= step ? "bg-plasma text-obsidian border-plasma" : "border-white/20 text-silver/50"
              }`}>
                {i + 1}
              </div>
              {i < STEPS.length - 1 && <div className={`w-10 h-px ${i < step ? "bg-plasma" : "bg-white/20"}`} />}
            </div>
          ))}
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
          {done ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-plasma mx-auto mb-4" />
              <h3 className="text-silver text-xl font-heading font-bold mb-2">Request received</h3>
              <p className="text-silver/60">An energy advisor will be in touch shortly to validate your plan.</p>
            </motion.div>
          ) : (
            <motion.div key={step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}>
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <Label className="text-silver/70">Full name</Label>
                    <Input value={form.name} onChange={(e) => update("name", e.target.value)} className="bg-white/5 border-white/10 text-silver mt-2" />
                  </div>
                  <div>
                    <Label className="text-silver/70">Email</Label>
                    <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-white/5 border-white/10 text-silver mt-2" />
                  </div>
                  <div>
                    <Label className="text-silver/70">Phone</Label>
                    <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="bg-white/5 border-white/10 text-silver mt-2" />
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="space-y-5">
                  <Label className="text-silver/70">Site type</Label>
                  <Select value={form.siteType} onValueChange={(v) => update("siteType", v)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-silver">
                      <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="mining">Mining</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="government">Government / Municipal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <Label className="text-silver/70">Average monthly electricity bill (R)</Label>
                    <Input value={form.monthlyBill} onChange={(e) => update("monthlyBill", e.target.value)} className="bg-white/5 border-white/10 text-silver mt-2" />
                  </div>
                  <div>
                    <Label className="text-silver/70">Desired backup</Label>
                    <Select value={form.backup} onValueChange={(v) => update("backup", v)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-silver">
                        <SelectValue placeholder="Select backup requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="essentials">Essential circuits only</SelectItem>
                        <SelectItem value="fullhome">Full home / site</SelectItem>
                        <SelectItem value="critical">Critical load resilience</SelectItem>
                        <SelectItem value="none">No backup, PV only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-10">
                <Button
                  variant="ghost"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="text-silver/60"
                >
                  Back
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button onClick={() => setStep((s) => s + 1)} className="bg-plasma text-obsidian hover:bg-plasma/90 font-semibold uppercase">
                    Continue
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={submitting} className="bg-plasma text-obsidian hover:bg-plasma/90 font-semibold uppercase">
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    Get My Energy Plan
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}