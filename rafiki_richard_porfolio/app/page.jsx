import { Button } from "@/components/ui/button";
import { FileDown, Section } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Salutations je suis <br/><span className="text-accent">Rafiki Richard</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">En réalisant les missions confiées, ma principale motivation reste celle de contribuer à la croissance et à la réussite de l'entreprise qui m'emploie. </p>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
}
