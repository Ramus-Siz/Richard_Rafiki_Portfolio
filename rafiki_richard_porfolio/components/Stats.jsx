"use client";

import CountUp from "react-countup";

const stats=[
    {
        num:5,
        text:"Ans d'experiences"
    },
    {
        num:10,
        text:"Projets"
    },
    {
        num:8,
        text:"Technologies"
    },
]


export default function Stats() {

    return<section className="mt-14">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) => (
                    <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <CountUp start={0} end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                        <p className={`${stat.num < 15 ? "maw-w-[100px]" : "maw-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
}