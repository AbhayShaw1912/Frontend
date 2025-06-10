import { Card, CardContent } from "../shared/components";
import ai from "../assets/ai.png"

const offerItems = [
  {
    title: "Glaucoma Detection:",
    description:
      "Upload FUNDUS images for precise and quick AI-based analysis of retinal conditions.",
  },
  {
    title: "Research Hub:",
    description:
      "Search and access the latest research papers and discoveries in eye research.",
  },
  {
    title: "AI-Powered Doctor's Assistant:",
    description:
      "A custom-built LLM-based agent that assists doctors in analyzing complex eye conditions.",
  },
];

export const OfferSection = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      <div className="w-full lg:w-auto flex justify-center lg:justify-start order-2 lg:order-1">
        <img
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] h-auto object-cover rounded-lg shadow-lg"
          alt="AI technology for eye care"
          src={ai}
        />
      </div>

      <div className="max-w-[752px] space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1]">
          What we Offer
        </h2>

        <Card className="border-none shadow-none">
          <CardContent className="p-0 space-y-4 md:space-y-5 font-['Open_Sans',Helvetica] text-sm sm:text-base md:text-lg lg:text-xl">
            {offerItems.map((item, index) => (
              <p key={index} className="leading-[1.6]">
                <span className="text-[#007dfe] font-semibold">{item.title}</span>
                <span className="text-black"> {item.description}</span>
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};