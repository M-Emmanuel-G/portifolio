import { Button } from "@/components/ui/button";
import { Download, Github, Link, Linkedin, Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import profileImg from "../images/profile.jpg"

export default function ProfileInfo() {
    return (
        <section className=" text-white">
            <div className="w-full h-full flex flex-col ">
            <div className="w-full h-full flex flex-col items-center text-center">
              <Image
                className="w-[200px] h-[200px] rounded-2xl mt-24" 
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
              <div>
                <div className="flex my-4">
                  <Smartphone/>
                  <span className="mx-4">(31) 9 8932-5415</span>
                </div>
                <div className="flex my-4">
                  <Mail/>
                  <span className="mx-4">emmanuel-jnr@hotmail.com</span>
                </div>
                <div className="flex my-4">
                  <MapPin/>
                  <span className="mx-4">Itabirito, Minhas Gerais</span>
                </div>
                <div className=" flex flex-col my-4">
                  <Button className="text-[10px] rounded-2xl my-2">
                    <Download className="w-[20px] mx-3"/>
                    <a target="blank" href="https://utfs.io/f/7d8da2e2-dd48-46de-8af1-3384b82b4d1d-960pcb.pdf" download="curriculo.pdf">Download CV</a>
                  </Button>
                </div>
              </div>
            </div>
            </div>
        </section>
    );
}