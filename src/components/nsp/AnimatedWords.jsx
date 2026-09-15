import React from "react";
import { motion } from "framer-motion";

// Splits text into words and staggers them in with a spring "rising" motion.
export default function AnimatedWords({ text, className = "", delay = 0, as = "span" }) {
  const words = text.split(" ");
  const Comp = motion[as] || motion.span;

  return (
    <Comp className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 14,
            delay: delay + i * 0.06,
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </Comp>
  );
}