const CategoryDefinition = () => {

    const scrollToPlatform = () => {
        const el = document.getElementById("platform-capabilities");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="category-definition"
            className="py-28 bg-background relative overflow-hidden"
        >
            <div className="container mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto">

                    {/* Headline */}
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.15] text-primary">
                        Accounting software connects features.
                        <br />
                        AiCounting connects the data beneath them.
                    </h2>

                    {/* Paragraph 1 */}
                    <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed">
                        Most platforms run bookkeeping, payroll and compliance as separate
                        modules. When information needs to move between them, someone has
                        to move it — and reconcile it. AiCounting runs every workflow on a
                        shared data foundation. One source of truth.
                    </p>

                    {/* Soft CTA */}
                    <button
                        onClick={scrollToPlatform}
                        className="mt-10 text-lg md:text-xl font-semibold text-[#00A58C] hover:text-[#00A58C]/70 transition-colors inline-flex items-center gap-1.5"
                    >
                        See what a shared data foundation makes possible →
                    </button>

                </div>

            </div>
        </section>
    );
};

export default CategoryDefinition;