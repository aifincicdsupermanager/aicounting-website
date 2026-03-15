import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PlatformDiagram from "@/components/PlatformDiagram";

const Difference = () => {

    const scrollToId = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="difference"
            className="
      relative
      py-36
      overflow-hidden
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
                        className="font-heading text-3xl md:text-4xl font-semibold text-white leading-[1.2]"
                    >
                        Why AiCounting works differently
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mt-6 text-lg leading-relaxed"
                    >
                        <span className="text-white">
                            Traditional accounting systems interpret data between workflows.
                        </span>{" "}
                        <span className="text-white/60">
                            AiCounting structures accounting data once so bookkeeping,
                            payroll, BAS, reporting and insights operate on the same
                            foundation.
                        </span>
                    </motion.p>

                </div>

                {/* divider */}

                <div className="mx-auto w-44 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>

                {/* diagram container */}

                <div className="relative">

                    <div className="absolute inset-0 blur-3xl opacity-20 bg-[radial-gradient(circle,#4f9cff,transparent_70%)]" />

                    <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-xl p-8">

                        {/* <p className="text-center text-sm uppercase tracking-wide text-white/50 mb-10">
                            Structured accounting architecture
                        </p> */}

                        <PlatformDiagram />

                    </div>

                </div>

                {/* caption */}

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center text-sm text-white/60"
                >
                    All powered by a{" "}
                    <span className="font-heading text-primary">
                        structured accounting data foundation
                    </span>.
                </motion.p>

                {/* CTA */}

                <div className="mt-12 flex justify-center">

                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => scrollToId("features")}
                        className="
            px-8 py-5
            rounded-xl
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

export default Difference;