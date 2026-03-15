import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PlatformDiagram from "@/components/PlatformDiagram";

const ReplaceYourStack = () => {

    const scrollToId = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="replace-your-stack"
            className="
      relative py-28 overflow-hidden
      bg-[radial-gradient(ellipse_at_top,#1c2b45_0%,#0b1426_60%,#060b17_100%)]
      "
        >

            {/* subtle infrastructure grid */}

            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative container mx-auto px-4 max-w-6xl">

                {/* SECTION HEADER */}

                <div className="text-center max-w-3xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="font-heading text-4xl md:text-5xl font-semibold text-white"
                    >
                        Why AiCounting works differently
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed"
                    >
                        Traditional accounting systems process workflows separately,
                        often requiring manual interpretation of data between bookkeeping,
                        compliance, reporting and analysis.
                        <br className="hidden md:block" />
                        AiCounting structures accounting data from the start so workflows
                        operate on the same foundation.
                    </motion.p>

                </div>

                {/* PLATFORM DIAGRAM */}

                <div className="relative mt-20">

                    {/* subtle platform glow */}

                    <div className="absolute inset-0 blur-3xl opacity-20 bg-[radial-gradient(circle,#4f9cff,transparent_70%)]" />

                    <PlatformDiagram />

                </div>

                {/* FOUNDATION MESSAGE */}

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center text-sm md:text-base text-white/60"
                >
                    All powered by a{" "}
                    <span className="font-semibold text-white">
                        structured accounting data foundation
                    </span>.
                </motion.p>

                {/* CTA */}

                <div className="mt-10 flex justify-center">

                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => scrollToId("features")}
                        className="
            px-8 py-5 rounded-xl
            border-white/20
            text-white
            hover:bg-white/10
            hover:border-white/40
            transition
            "
                    >
                        See everything included
                    </Button>

                </div>

            </div>

        </section>
    );
};

export default ReplaceYourStack;