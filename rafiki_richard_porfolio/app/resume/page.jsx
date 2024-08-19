"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about={
    title:"A propos de moi",
    description:"je suis un developpeur web, passionné par les nouvelles technologies.",
    info:[
        {
            fieldName:"Nom",
            fieldValue:"Richard Rafiki",
        },
        {
            fieldName:"phone",
            fieldValue:"(+243) 970 361 929",
        },
        {
            fieldName:"Experience",
            fieldValue:"+6 Ans",
        },
        {
            fieldName:"Nationalité",
            fieldValue:"Congolaise",
        },
        {
            fieldName:"Email",
            fieldValue:"rafikirich29@gmail.com",
        },
        {
            fieldName:"Freelance",
            fieldValue:"Disponible",
        },
        {
            fieldName:"Langues",
            fieldValue:"Français, Anglais, Swahili, Lingala",
        },
    ]
};

const skills={
    title:"Skills",
    description:"je suis une personne passionée par les nouvelles technologies.",
    skillist:[
        {
            name:"HTML 5",
            icon:<FaHtml5/>,
        },
        {
            name:"CSS",
            icon:<FaCss3/>,
        },
        {
            name:"JS",
            icon:<FaJs/>,
        },
        {
            name:"REACT",
            icon:<FaReact/>,
        },
        {
            name:"TAILWIND",
            icon:<SiTailwindcss/>,
        },
        {
            name:"NEXT",
            icon:<SiNextdotjs />,
        },
        {
            name:"NODE",
            icon:<FaNodeJs/>,  
        },
        {
            name:"FIGMA",
            icon:<FaFigma />,  
        },

    ]
};

import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}
        }} className="min-h-[80vh] flex intems-center justify-center py-12 xl:py-0 "
        >
            <div className="container mx-auto">
                <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[68px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">A propos de moi</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul>
                                    {about.info.map((info, index) => (
                                        <li key={index}>
                                            <span className="text-white/60">{info.fieldName}:</span>
                                            <span className="text-white">{info.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillist.map((skill, index) => (
                                        <li key={index} className="flex items-center gap-4">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent >
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                            
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                    
                    
                </Tabs>
            </div>
            
        </motion.div>
    )
    
}