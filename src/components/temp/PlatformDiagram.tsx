import { motion, type Variants } from "framer-motion";

const nodeVariant: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.35,
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
    variant?: "default" | "hub" | "input" | "capability";
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
        px-8 py-4
        rounded-lg
        bg-[#D79C3F]
        text-white
        font-semibold
        border border-white/10
        shadow-md
        text-center
        min-w-[260px]
      `
                : variant === "input"
                    ? `
        px-4 py-2
        rounded-md
        bg-white/10
        text-white/80 text-xs font-medium
        border border-white/10
        text-center
        min-w-[110px]
      `
                    : variant === "capability"
                        ? `
        px-4 py-2
        rounded-md
        border border-[#4F9A8B]
        text-[#4F9A8B]
        text-xs font-semibold
        text-center
        min-w-[120px]
      `
                        : `
        px-4 py-2
        rounded-md
        bg-[#4F9A8B]/90
        text-white text-xs font-medium
        border border-white/10
        text-center
        min-w-[110px]
      `
        }
    >
        {label}
    </motion.div>
);

const Connector = ({ height }: { height: number }) => (
    <div
        className="w-[2px] bg-white/20"
        style={{ height }}
    />
);

const PlatformDiagram = () => {

    const inputs = [
        "Bank feeds",
        "Invoices",
        "Expenses",
        "Payroll",
    ];

    const workflows = [
        "Bookkeeping",
        "Payroll",
        "BAS",
        "Reporting",
    ];

    const capabilities = [
        "Multi-entity",
        "Insights",
    ];

    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center">

            {/* CAPABILITIES */}

            <div className="text-xs tracking-wide text-white/50 mb-3">
                Capabilities unlocked by structured data
            </div>

            <div className="flex gap-3 mb-6">

                {capabilities.map((label, i) => (
                    <DiagramNode
                        key={label}
                        label={label}
                        index={i}
                        variant="capability"
                    />
                ))}

            </div>

            {/* HUB */}

            <DiagramNode
                label="Structured data layer"
                index={5}
                variant="hub"
            />

            {/* CONNECTOR */}

            <Connector height={32} />

            {/* WORKFLOWS */}

            <div className="text-xs tracking-wide text-white/50 mb-3">
                Core accounting workflows
            </div>

            <div
                className="
        bg-white/[0.04]
        border border-white/[0.08]
        rounded-xl
        px-4 py-4
        mb-6
      "
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">

                    {workflows.map((label, i) => (
                        <DiagramNode
                            key={label}
                            label={label}
                            index={i + 10}
                        />
                    ))}

                </div>
            </div>

            {/* CONNECTOR */}

            <Connector height={32} />

            {/* TRANSACTIONS */}

            <div className="text-xs tracking-wide text-white/50 mb-3">
                Transactions enter the system
            </div>

            <div
                className="
        bg-white/[0.04]
        border border-white/[0.08]
        rounded-xl
        px-4 py-4
      "
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">

                    {inputs.map((label, i) => (
                        <DiagramNode
                            key={label}
                            label={label}
                            index={i + 20}
                            variant="input"
                        />
                    ))}

                </div>
            </div>

        </div>
    );
};

export default PlatformDiagram;