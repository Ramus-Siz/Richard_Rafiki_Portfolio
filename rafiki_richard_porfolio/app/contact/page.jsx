"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectGroup, SelectValue, SelectLabel  } from "@radix-ui/react-select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { useState } from "react";

const infos=[
    {
        icon: <FaPhoneAlt/>,
        label: "Phone",
        value: "(+234) 970 361 929"
    },
    {
        icon: <FaEnvelope/>,
        label: "Email",
        value: "rafiki.richard@grafikirdc.com"
    },
    {
        icon: <FaMapMarkerAlt/>,
        label: "Location",
        value: "Kinshasa, RDC"
    }
]

export default function Contact() {
    const [selectedValue,setSelectedValue]=useState('');

    return (
        <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{duration:2.4, ease:"easeIn"}}} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none ">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travaillons ensemble!</h3>
                            <p className="text-white/60">Une Collaboration pour créer un impact numérique durable.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                type="firstname"
                                placeholder="Nom"
                                />
                                <Input
                                type="lastname"
                                placeholder="Prénom"
                                />
                                <Input
                                type="email"
                                placeholder="Email"
                                />
                                 <Input
                                type="phone"
                                placeholder="Téléphone"
                                />
                            </div>

                            <Select onValueChange={setSelectedValue} value={setSelectedValue}>
                                <SelectTrigger className="w-full bg-primary border border-white/60 text-white/60 hover:border-white focus:border-accent rounded-md">
                                    {selectedValue || "Pour quel service ?"}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="bg-primary p-4 border border-white/60 text-white/60 rounded-sm ">
                                        <SelectLabel className="text-white/80" >Selectionnez un service</SelectLabel>
                                        <SelectItem value="Développemnt Web" className="focus:bg-accent focus:text-primary pl-3">Développemnt Web</SelectItem>
                                        <SelectItem value="UI/UX"  className="focus:bg-accent focus:text-primary pl-3">UI/UX</SelectItem>
                                        <SelectItem value="Logo Design"  className="focus:bg-accent focus:text-primary pl-3">Logo Design</SelectItem>
                                        <SelectItem value="SEO"  className="focus:bg-accent focus:text-primary pl-3">SEO</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h[200px]" placeholder="Laisez-nous votre message." />

                            <Button siz="md" className="max-w-40">Envoyer</Button>
                    
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                        
                        <ul className="flex flex-col gap-8">
                            {infos.map((info, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                       <div className="text-[28px]">{info.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                    <p className="text-white/60">{info.label}</p>
                                    <h3 className="text-xl">{info.value}</h3>
                                    </div>

                                    
                                    
                                </li>
                            ))}
                        </ul>
                        
                    </div>

                </div>

            </div>

        </motion.section>
    )
    
}