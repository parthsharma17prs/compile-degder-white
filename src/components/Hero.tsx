"use client";

import { motion } from 'framer-motion';
import Shield3D from './three/Shield3D';
import GlassCube3D from './three/GlassCube3D';
import { GLSLHills } from './ui/glsl-hills';

export default function Hero() {
    return (
        <section className="hero-section relative w-full pt-48 pb-32 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden bg-[#0b0c0f] selection:bg-white/20" style={{ minHeight: '100vh' }}>

            {/* Ambient Lighting Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
                <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full" />
                <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] bg-indigo-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Background Texture from compliledger.com */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'url(https://www.compliledger.com/images/privacy-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'screen'
                }}
            />

            {/* GLSL Hills Background Effect from 21st.dev component */}
            <div className="absolute inset-0 pointer-events-none z-[0] w-full h-full overflow-hidden">
                <GLSLHills width="100vw" height="100vh" />
            </div>

            {/* Subtle 3D Elements as Background Elements (not overpowering) */}
            <div className="absolute left-[-15%] top-[20%] w-[700px] h-[700px] pointer-events-none opacity-20 z-0 mix-blend-screen">
                <GlassCube3D />
            </div>
            <div className="absolute right-[-10%] top-[40%] w-[600px] h-[600px] pointer-events-none opacity-20 z-0 mix-blend-screen">
                <Shield3D />
            </div>

            {/* Central Content representing exact CompliLedger.com typographic layout */}
            <div className="relative z-10 flex flex-col items-center text-center mx-auto w-full gap-6 px-6 py-12 md:px-10 md:py-16">

                {/* Main Hero Text (matches exact Hollow/Solid styling from their website) */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.02] flex flex-wrap justify-center items-center gap-x-4 max-w-5xl"
                    style={{
                        fontFamily: 'var(--font-sans)',
                        WebkitTextStroke: "1px rgba(255,255,255,0.95)",
                        WebkitTextFillColor: "transparent",
                        color: "transparent"
                    }}
                >
                    Proof Based
                    <span
                        style={{
                            WebkitTextFillColor: "rgba(255,255,255,0.95)",
                            WebkitTextStroke: "0px",
                            color: "rgba(255,255,255,0.95)"
                        }}
                    >
                        Compliance
                    </span>
                    Infrastructure
                </motion.h1>

                {/* Description Text matching their exact red highlight */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 md:mt-32 z-20 text-lg md:text-xl max-w-3xl text-center px-6 leading-relaxed"
                >
                    Continuous, privacy-preserving{' '}
                    <span className="text-red-500 font-semibold bg-red-500/10 rounded-sm px-2">
                        compliance proof
                    </span>{' '}
                    for companies, auditors, and regulators.
                </motion.p>
            </div>

            {/* Giant Background Text from compliledger.com */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                aria-hidden="true"
                className="absolute left-1/2 bottom-[-1rem] md:bottom-[-2rem] -translate-x-1/2 text-[6rem] md:text-[10rem] leading-none font-extrabold uppercase text-white/[0.03] pointer-events-none select-none z-0"
                style={{ fontFamily: 'var(--font-bebas)', whiteSpace: 'nowrap' }}
            >
                CompliLedger
            </motion.h2>

            {/* Background Texture Detail */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-50 rounded-lg" />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0b0c0f] to-transparent pointer-events-none" />
        </section>
    );
}
