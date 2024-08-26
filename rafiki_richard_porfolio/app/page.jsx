import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";
import {FiDownload} from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6 text-4xl"><span className="text-accent">Rafiki Richard</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">En réalisant les missions confiées, ma principale motivation reste celle de contribuer à la croissance et à la réussite de l'entreprise qui m'emploie. </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="../assets/resume/Resume__Richard_Rafiki.pdf" download>
              <Button  variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Télécharger le cv</span>
                <FiDownload className="text-lg"/>
              </Button>
            </a>
              <div className="mb-8 xl:mb-0 ">
                <Social containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}/>
              </div>
            </div>
            <Stats/>
          </div>
          <div>
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
}
