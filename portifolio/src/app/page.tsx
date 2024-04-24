import CardProject from "./components/card";
import ProfileInfo from "./sections/profileInfo";

export default function Home() {
  return (
    <main className="w-screen sm:h-screen flex justify-center items-center bg-black text-white overflow-auto">
      <section className="w-full sm:h-full flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
        <section className="w-full sm:h-full sm:w-2/6 flex flex-col">
          <ProfileInfo/>
        </section>
        <section className="w-4/6  flex flex-col">
        <div className="w-full flex  flex-col text-center p-8 text-white">
            <strong className="text-xl m-4 text-cyan-400">Sobre mim</strong>
              <span className="text-sm text-white">
                Amante de tecnologia, desenvolvedor fullstack em formação e com conhecimentos em HTML, CSS, JavaScript, TypeScript, React, Styled-components, API Rest, Express, MongoDB, MySQL, NEXTJS, Next-Auth,
                Tailwind, onde realizo projetos individuais e em grupo.
                Atualmente trabalho como eletrotécnico e estou em transição de carreira para a área de programação por ser apaixonado e um entusiasta.
                Atualmente tenho criado alguns projetos para meu aprendizado. O projeto de mais expressão é uma loja Ecommerce, onde exibo uma lista de produtos e consigo adiciona-los em um carrinho!
                Porem, estou trabalhando em outro projeto onde estou simulando um controle de estoque, onde consigo editar os produtos, entradas, saidas de produtos, relatorios finais, etc...!
              </span>
        </div>
          <div className=" w-full text-center">
              <h2 className="text-xl my-4 text-cyan-400">Desenvolvedor WEB</h2>
              <span className="text-sm p-6">
                Desenvolvo sistemas web utilizando as tecnologias mais atuais disponiveis no mercado.
                Criação de API, utilizando typescript, NodeJS, MySql, Postegres, Prisma, Next Auth para autenticação,
                utilização de Postman para testes e uma forte documentação da API.
                Tambem utilizo o NextJs juntamente com typescript, tailwindCSS, shadcn/UI para criar interfaces modernas e intuitivas ao cliente!
              </span>
            </div>
            <div className="w-full flex flex-col justify-center overflow-auto gap-4 items-center sm:flex-row">
                <CardProject 
                  description="Projeto baseado em um ecommerce. O usuario consegue realizar login com a conta GOOGLE, adicinar, remover, editar produtos no carrinho!"
                  imgURL="https://utfs.io/f/c8d8576d-0b98-448d-98ac-47106c8606d9-oavp9b.jpg"
                  link="https://onlineshop-2-0.vercel.app"
                  title="OnlineShop"
                />
                <CardProject
                  description="Projeto desenvolvido para empresa onde atuo. nele consiste em enviar via email um relatorio!"
                  imgURL="https://utfs.io/f/3d999444-14e5-48bb-a54b-b8a361a4ab26-1tokw.png"
                  link="https://system2-0.vercel.app"
                  title="CTTS system"
                />
                <CardProject
                  description="Projeto simulando Controle de estoque. Onde nele conseguimos cadastrar produtos, fornecedored, clientes, notas de saida e de entrada!"
                  imgURL="https://utfs.io/f/deff6651-7218-4dd3-ac04-cd1a36334d11-fcbkj8.jpg"
                  link="https://inventory-stock-2-0.vercel.app"
                  title="IControl"
                />
              </div>
        </section>
      </section>
    </main>
  )
}


// Finalizar responsividade