import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

  interface CardProps{
    title:string
    link:string
    description:string
    imgURL:string
  }
  

export default function CardProject({title, link, description, imgURL}:CardProps) {
 return (
    <Card className="w-[235px] h-[250px] flex justify-center text-center items-between my-4 flex-col p-0 bg-black text-white border-none">
        <CardHeader className="w-full h-1/2 flex flex-col p-0">
            <CardTitle className="text-xl p-0 text-cyan-400 mt-2">{title}</CardTitle>
            <CardDescription className=" text-[12px] p-2 mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="h-1/2 w-full items-center flex justify-evenly m-0 p-0">
            <Image src={imgURL} alt="" width={70} height={70}/>
            <Link target="blank" href={link} className="text-sm cursor-pointer hover:underline ease-in-out hover:text-cyan-400 ">Link do projeto</Link>
        </CardContent>
    </Card>
  );
}