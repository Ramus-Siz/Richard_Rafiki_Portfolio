"use client";
import{BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services=[
    {   
        num:'01',
        title:'Développement Web',
        Description:"Le développement des solutions attrayantes.",
        href:"",
    },
    {   
        num:'02',
        title:'UI/UX Design',
        Description:"je comprends l’importance d’une identité de marque",
        href:"",
    },
    {   
        num:'03',
        title:'SEO',
        Description:"J'ameliore votre positionnement dans les résultats de recherche",
        href:"",
    },
    {   
        num:'04',
        title:'DevOps',
        Description:"Pour automatiser et d'intégrer les processus entre les équipes",
        href:"",
    },
]

import {motion} from "framer-motion";

export default function Services() {

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                        {services.map((service, index) => (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full justify-between flex items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#0876dd] transition-all duration-500 flex justify-center items-center hover:-rotate-45  text-primary" >
                                        <BsArrowDownRight className="text-3xl group-hover:text-white text-primary "/>
                                    </Link>
                                </div>
                                    <h2 className="text-4px font-bold leading-none text-white group-hover:text-[#0876dd] transition-all duration-500">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60">{service.Description}</p>
                                <div className="border-b border-white/20 w-full">
                                    
                                </div>
                            </div>
                        ))}
                </motion.div>
            </div>
        </section>
    )
    
}