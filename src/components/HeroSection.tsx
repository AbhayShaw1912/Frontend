import { Button } from "../shared/components";
import doc from "../assets/doc.png"
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      <div className="max-w-[810px] space-y-6 md:space-y-8 text-center lg:text-left">
        <h1 className="font-['Montserrat',Helvetica] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
          <span className="text-black">Eye</span>
          <span className="text-[#007dfe]">Vanguard</span>
        </h1>

        <p className="font-['Open_Sans',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl text-black leading-[1.6]">
          A cutting-edge platform designed to assist healthcare
          professionals in diagnosing glaucoma and accessing the latest
          research in eye care! Leveraging machine learning and large
          language models, this platform provides a powerful suite of tools
          for retinal analysis, disease detection, and personalized
          insights.
        </p>

        <Button
          className="h-10 sm:h-12 md:h-14 w-full sm:w-auto px-6 sm:px-8 md:px-12 rounded-[50px] bg-[#007dfe] hover:bg-[#0065cc] text-white font-['Montserrat',Helvetica] font-semibold text-sm sm:text-base md:text-lg transition-colors duration-200"
          onClick={() => navigate("/home")}
        >
          Try out now →
        </Button>
      </div>

      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto object-cover rounded-lg shadow-lg"
          alt="Medical professional using EyeVanguard"
          src={doc}
        />
      </div>
    </section>
  );
};