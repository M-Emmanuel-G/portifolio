import { Button } from "@/components/ui/button";
import { Download, Github, Link, Linkedin, Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import profileImg from "../images/profile.jpg"
import IconNext from "../../Images/NextJS.png"
import IconTypescript from "../../Images/Typescript.png"
import IconReact from "../../Images/React.png"
import IconAuth from "../../Images/auth.jpg"

export default function ProfileInfo() {
    return (
        <section className=" text-white">
            <div className="w-full h-full flex flex-col ">
            <div className="w-full h-full flex flex-col items-center text-center">
              <Image
                className="w-[100px] h-[100px] rounded-2xl mt-24" 
                src={profileImg} alt=""  />
              <strong className="text-2xl my-4">Márcio Emmanuel</strong>
              <span className="text-sm my-4">FullStack Developer</span>
              <div className="flex">
                <Link className=" mx4 rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-white" href="https://www.linkedin.com/in/marcio-emmanuel-goncalves/">
                  <Linkedin style={{color:"blue"}}/>
                </Link>
                <Link className="mx-4 rounded-sm w-[40px] h-[40px] flex items-center justify-center bg-white" href="https://github.com/M-Emmanuel-G">
                  <Github style={{color:"black"}} />
                </Link>
              </div>
              <div className="my-4 flex flex-col">
                <div>
                  <h2 className="my-4">Tecnologias</h2>
                </div>
                <div className="flex gap-4">
                  <Image className="w-12 h-12 bg-white rounded-[50%]" src={IconNext} alt=""/>
                  <Image className="w-12 h-12" src={IconTypescript} alt=""/>
                  <Image className="w-16 h-12" src={IconReact} alt=""/>
                  <Image className="w-12 h-20" src={IconAuth} alt=""/>
                </div>
              </div>
              <div>
                <div className="flex my-4">
                  <Smartphone/>
                  <span className="mx-4">(31) 9 8932-5415</span>
                </div>
                <div className="flex my-4">
                  <Mail/>
                  <span className="mx-4">megoncalves93@gmail.com</span>
                </div>
                <div className="flex my-4">
                  <MapPin/>
                  <span className="mx-4">Itabirito, Minas Gerais</span>
                </div>
                <div className=" flex flex-col my-4">
                  <Button className="text-[10px] rounded-2xl my-2">
                    <Download className="w-[20px] mx-3"/>
                    <a target="blank" href="https://utfs.io/f/7ca79096-283f-4511-bda4-8ec24c291816-53z6gk.docx" download="curriculo.pdf">Download CV</a>
                  </Button>
                </div>
              </div>
            </div>
            </div>
        </section>
    );
}