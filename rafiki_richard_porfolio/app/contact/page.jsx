"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectGroup, SelectValue, SelectLabel } from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";

const infos = [
    {
        icon: <FaPhoneAlt />,
        label: "Phone",
        value: "(+234) 970 361 929"
    },
    {
        icon: <FaEnvelope />,
        label: "Email",
        value: "rafikirich29@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        label: "Location",
        value: "Kinshasa, RDC"
    }
];

export default function Contact() {
    const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm();
    const form = useRef();
    const [selectedValue, setSelectedValue] = useState('');

    const onSubmit = (data) => {
        const templateParams = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            service: selectedValue,
            message: data.message,
        };

        emailjs.send('service_xzlp6mm', 'template_teb2hl3', templateParams, 'cQN5b5rtedmsEk4b7')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                reset();
            })
            .catch((error) => {
                console.error('FAILED...', error);
            });
    };

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2.4, ease: "easeIn" } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none ">
                        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travaillons ensemble!</h3>
                            <p className="text-white/60">Une Collaboration pour créer un impact numérique durable.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    {...register("firstname", { required: "Nom est requis" })}
                                    type="text"
                                    placeholder="Nom"
                                />
                                {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}

                                <Input
                                    {...register("lastname", { required: "Prénom est requis" })}
                                    type="text"
                                    placeholder="Prénom"
                                />
                                {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}

                                <Input
                                    {...register("email", { required: "Email est requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })}
                                    type="email"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                                <Input
                                    {...register("phone", { required: "Téléphone est requis" })}
                                    type="text"
                                    placeholder="Téléphone"
                                />
                                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                            </div>

                            <Select onValueChange={setSelectedValue} value={setSelectedValue} >
                                <SelectTrigger className="w-full bg-primary border border-white/60 text-white/60 hover:border-white focus:border-accent rounded-md">
                                    {selectedValue || "Pour quel service ?"}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="bg-primary p-4 border border-white/60 text-white/60 rounded-sm">
                                        <SelectLabel className="text-white/80">Sélectionnez un service</SelectLabel>
                                        <SelectItem value="Développement Web" className="focus:bg-accent focus:text-primary pl-3">Développement Web</SelectItem>
                                        <SelectItem value="UI/UX" className="focus:bg-accent focus:text-primary pl-3">UI/UX</SelectItem>
                                        <SelectItem value="Logo Design" className="focus:bg-accent focus:text-primary pl-3">Logo Design</SelectItem>
                                        <SelectItem value="SEO" className="focus:bg-accent focus:text-primary pl-3">SEO</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                {...register("message", { required: "Message est requis" })}
                                className="h[200px]"
                                placeholder="Laissez-nous votre message."
                            />
                            {errors.message && <p className="text-red-500">{errors.message.message}</p>}

                            <Button type="submit" size="md" className="max-w-40">Envoyer</Button>
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
    );
}
