import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrains_Mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight:["100", "200", "300", "400", "500", "600", "700", "800"],
  variable:'--font-jetBrains_Mono'
 });

export const metadata = {
  title: "Rafiki Richard",
  description: "Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
       </body>
    </html>
  );
}
