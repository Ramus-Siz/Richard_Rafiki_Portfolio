import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa"
const socials=[
    {icon:<FaGithub/>, path:"https://github.com/ramus-siz"},
    {icon:<FaLinkedinIn/>, path:"https://linkedin.com/in/richard-rafiki-mushagalusa"},
    {icon:<FaTwitter/>, path:"https://twitter.com/rafiki_richard"},
]; 


export default function Social({containerStyles, iconStyles}) {
    return (
        <div className={containerStyles}>
        {socials.map((item, index)=>{
            return(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
    );
    
}