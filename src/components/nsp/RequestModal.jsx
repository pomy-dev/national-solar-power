import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function RequestModal({ open, onOpenChange, type = "assessment" }) {
  const isInstaller = type === "installer";
  const requestLabel = type === "quote" ? "quote" : isInstaller ? "solar installer" : "on-site assessment";
  const requestTitle = type === "quote" ? "Request a quote" : isInstaller ? "Request a solar installer" : "Book an on-site assessment";
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", site: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await base44.integrations.Core.SendEmail({
      to: form.email || "leads@nationalsolarpower.co.za",
      subject: `New ${requestLabel} request`,
      body: `${requestTitle}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.location}\nSite: ${form.site}\nNotes: ${form.notes}`,
    }).catch(() => { });
    setSubmitting(false);
    setDone(true);
  };

  const close = (value) => {
    onOpenChange(value);
    if (!value) setTimeout(() => setDone(false), 250);
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="border-white/10 bg-[#101412] text-silver sm:max-w-xl">
        {done ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-plasma" />
            <DialogTitle className="mb-2 text-xl text-silver">Request received</DialogTitle>
            <DialogDescription className="text-silver/60">Our team will contact you shortly to confirm the next step.</DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-silver">{requestTitle}</DialogTitle>
              <DialogDescription className="text-silver/60">Share a few details and an energy specialist will follow up.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="mt-3 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label className="text-silver/70">Full name</Label><Input required value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-2 border-white/10 bg-white/5 text-silver" /></div>
                <div><Label className="text-silver/70">Email</Label><Input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-2 border-white/10 bg-white/5 text-silver" /></div>
                <div><Label className="text-silver/70">Phone</Label><Input required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-2 border-white/10 bg-white/5 text-silver" /></div>
                <div><Label className="text-silver/70">Town / province</Label><Input required value={form.location} onChange={(e) => update("location", e.target.value)} className="mt-2 border-white/10 bg-white/5 text-silver" /></div>
              </div>
              <div><Label className="text-silver/70">Site type</Label><Select required value={form.site} onValueChange={(value) => update("site", value)}><SelectTrigger className="mt-2 border-white/10 bg-white/5 text-silver"><SelectValue placeholder="Select a site type" /></SelectTrigger><SelectContent><SelectItem value="home">Home</SelectItem><SelectItem value="business">Business / office</SelectItem><SelectItem value="industrial">Industrial / mining</SelectItem><SelectItem value="farm">Farm / rural site</SelectItem><SelectItem value="government">Government / municipal</SelectItem></SelectContent></Select></div>
              <div><Label className="text-silver/70">What should we know?</Label><Textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder={isInstaller ? "System size, equipment, or installation timing" : "Roof access, existing solar, electricity usage, or preferred timing"} className="mt-2 min-h-24 border-white/10 bg-white/5 text-silver placeholder:text-silver/30" /></div>
              <Button type="submit" disabled={submitting} className="w-full bg-plasma font-semibold uppercase text-obsidian hover:bg-plasma/90">{submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Send request</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}