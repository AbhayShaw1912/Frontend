import eye from "../assets/eye.png"
export const GlaucomaSection = () => {
    return (
        <section className="relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-[752px] space-y-6 md:space-y-8 text-center lg:text-left">
                <h2 className="font-['Montserrat',Helvetica] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1]">
                    What is Glaucoma
                </h2>

                <p className="font-['Open_Sans',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6]">
                    What is glaucoma? Glaucoma is a group of eye diseases that can
                    cause vision loss and blindness by damaging a nerve in the back of
                    your eye called the optic nerve. The symptoms can start so slowly
                    that you may not notice them. The only way to find out if you have
                    glaucoma is to get a comprehensive dilated eye exam.
                </p>
            </div>

            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                <img
                    className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto object-cover rounded-lg shadow-lg"
                    alt="Illustration of glaucoma"
                    src={eye}
                />
            </div>
        </section>
    );
};