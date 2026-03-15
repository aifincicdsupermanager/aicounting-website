const Credibility = () => {
    return (
        <section className="relative py-14 md:py-16 bg-primary border-t border-white/10 overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[1200px] h-[300px] bg-[radial-gradient(ellipse_80%_60%_at_center,rgba(59,130,246,0.18),transparent)] blur-2xl"></div>
            </div>

            <div className="relative container mx-auto px-4">

                <div className="max-w-5xl mx-auto text-center">

                    <p className="font-heading text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-white/90">
                        Built by accountants and financial technology specialists.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default Credibility;