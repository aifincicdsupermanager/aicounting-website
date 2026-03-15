import { motion, type Variants } from "framer-motion";

const nodeVariant: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.07,
            duration: 0.4,
            ease: "easeOut",
        },
    }),
};

const DiagramNode = ({
    label,
    index,
    variant = "default",
}: {
    label: string;
    index: number;
    variant?: "default" | "hub";
}) => (
    <motion.div
        custom={index}
        variants={nodeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={
            variant === "hub"
                ? `
        relative px-10 py-6 rounded-xl
        bg-[#D79C3F]
        text-white font-bold text-lg
        border border-white/10
        shadow-[0_0_80px_rgba(215,156,63,0.45)]
        z-10
      `
                : `
        px-5 py-2.5 rounded-lg
        bg-[#4F9A8B]/90
        text-white text-sm font-medium
        border border-white/10
        backdrop-blur-sm
        shadow-[0_0_25px_rgba(79,154,139,0.35)]
        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(79,154,139,0.55)]
        transition-all duration-300
      `
        }
    >
        {label}
    </motion.div>
);

const Connector = ({ height = 70 }: { height?: number }) => (
    <div className="flex flex-col items-center relative">

        {/* top node */}

        <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#4F9A8B] shadow-[0_0_10px_rgba(79,154,139,0.8)]"
        />

        {/* connector line */}

        <div
            className="w-[2px] bg-white/25"
            style={{ height }}
        />

        {/* bottom node */}

        <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#4F9A8B] shadow-[0_0_10px_rgba(79,154,139,0.8)]"
        />

    </div>
);

const PlatformDiagram = () => {

    const inputs = [
        "Bank feeds",
        "ATO",
        "Payroll data",
        "External systems",
    ];

    const workflows = [
        "Bookkeeping",
        "Payroll",
        "BAS",
        "Reporting",
        "Multi-entity",
        "Insights",
    ];

    return (
        <section className="relative">

            {/* ambient infrastructure glow */}

            <motion.div
                className="absolute inset-0 blur-3xl"
                animate={{
                    opacity: [0.12, 0.2, 0.12],
                    scale: [1, 1.04, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(79,156,255,0.15) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-4xl mx-auto flex flex-col items-center">

                {/* DATA CONNECTIONS */}

                <div className="text-xs uppercase tracking-wider text-white/40 mb-4">
                    Data connections
                </div>

                {/* INPUT GROUP */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="
          relative
          rounded-2xl
          bg-white/5
          ring-1 ring-white/10
          backdrop-blur-md
          px-12 py-10
        "
                >
                    <div className="absolute left-8 right-8 bottom-4 h-px bg-white/10" />

                    <div className="relative flex flex-wrap justify-center gap-5">
                        {inputs.map((label, i) => (
                            <DiagramNode key={label} label={label} index={i} />
                        ))}
                    </div>
                </motion.div>

                <Connector />

                {/* HUB */}

                <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <DiagramNode
                        label="AiCounting"
                        index={inputs.length}
                        variant="hub"
                    />
                </motion.div>

                <Connector />

                {/* WORKFLOW GROUP */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="
          relative
          rounded-2xl
          bg-white/5
          ring-1 ring-white/10
          backdrop-blur-md
          px-12 py-10
        "
                >
                    <div className="absolute left-8 right-8 top-4 h-px bg-white/10" />

                    <div className="relative flex flex-wrap justify-center gap-5 max-w-lg mx-auto">
                        {workflows.map((label, i) => (
                            <DiagramNode
                                key={label}
                                label={label}
                                index={inputs.length + 1 + i}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* WORKFLOW LABEL */}

                <div className="text-xs uppercase tracking-wider text-white/40 mt-4">
                    Accounting workflows
                </div>

            </div>
        </section>
    );
};

export default PlatformDiagram;