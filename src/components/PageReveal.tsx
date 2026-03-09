"use client";

import { motion } from "framer-motion";

export default function PageReveal() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            onAnimationComplete={() => {
                document.body.style.overflow = "auto";
            }}
            className="fixed inset-0 z-[10000] bg-black pointer-events-none flex items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4"
            >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-bebas text-2xl tracking-[0.5em] uppercase">Initializing Protocol</span>
            </motion.div>
        </motion.div>
    );
}
