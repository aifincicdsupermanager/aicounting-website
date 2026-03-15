import { motion } from "framer-motion";

const Node = ({ label, variant = "default" }) => (
    <div
        className={
            variant === "manual"
                ? "px-5 py-2 rounded-lg bg-[#e35b5b]/80 text-white text-xs font-medium border border-white/10"
                : "px-5 py-2.5 rounded-lg bg-[#4F9A8B]/90 text-white text-sm font-medium border border-white/10 backdrop-blur-sm"
        }
    >
        {label}
    </div>
);

const Connector = () => (
    <div className="w-[2px] h-[60px] bg-white/15" />
);

const TraditionalDiagram = () => {

    const workflows = [
        "Bookkeeping",
        "Payroll",
        "BAS",
        "Reporting",
    ];

    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center">

            <Node label="Transactional data" />

            <Connector />

            <div className="grid md:grid-cols-4 gap-8 mt-4">

                {workflows.map((workflow) => (
                    <div key={workflow} className="flex flex-col items-center gap-3">

                        <Node label="Manual intervention" variant="manual" />

                        <Connector />

                        <Node label={workflow} />

                    </div>
                ))}

            </div>

        </div>
    );
};

export default TraditionalDiagram;