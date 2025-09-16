import { useCallback, useLayoutEffect, useState } from "react";
import writtenNumber from "written-number";
import MenuItem from "./components/MenuItem";
import { gsap } from "gsap";
import enfeite from "./assets/img/Enfeite.png"
import { ScrollTrigger } from "gsap/all";

export default function App() {

  const [indexOpen, setIndexOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const anoAtual = new Date().getFullYear()


  const anoExperiencia = writtenNumber((anoAtual - 2021), { lang: "pt" })

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

      const animStart = {
        opacity: 0,
        display: "none"
      };

      const animEnd = {
        opacity: 1,
        display: "flex",
        duration: 0.6
      };

      const animExit = {
        opacity: 0,
        duration: 0.5,
        display: "none"
      };

    const linhaDoTempo = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollReferenc",
        start: "top top",
        end: "+=2500",
        markers: true,
        pin: true,
        scrub: 2,
      }
    });

    linhaDoTempo.to(".divBranca", {
      rotationX: 0,
      scaleX: 1,
      top: 0,
      borderRadius: 0,
    })

    linhaDoTempo.fromTo(".h2MeConheca", animStart, animEnd)

    linhaDoTempo.to(".h2MeConheca", animExit)

    linhaDoTempo.fromTo(".sobreMim", animStart, animEnd)

    linhaDoTempo.to(".sobreMim", animExit)

    const projetos = document.querySelectorAll(".projetos")

    projetos.forEach((element, index) => {
      const img = element.querySelector("img")

      linhaDoTempo.fromTo(img,
        {
          xPercent: 100,
          rotate: 340,
          right: 0,
          display: "none"
        },
        {
          xPercent: 0,
          right: "auto",
          rotate: 360,
          display: "flex"
        }
      )

      linhaDoTempo.fromTo(element,
        {
          display: "none"
        },
        {
          display: "flex"
        },
        "<"
      )
      console.log(projetos.length)
      console.log(index)
      if ((projetos.length - 1) != index) {
        linhaDoTempo.to(img,
          {
            xPercent: 100,
            rotate: 340,
            opacity: 0,
            display: "none"
          }
        )
        linhaDoTempo.to(element,
          {
            display: "none",
            opacity: 0
          },
          "<"
        )
      }



    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.divBranca')
      gsap.killTweensOf('.h2MeConheca ')
    };
  }, [])

  const onToggleModal = useCallback((index) => {
    setIndexOpen(indexOpen === index ? null : index)
  }, [indexOpen])


  return (
    <main>
      <section className="scrollReferenc flex flex-col justify-center w-full h-screen bg-azul-escuro relative perspective-[3000px] perspective-origin-[50%_76%] overflow-hidden ">
        <div className="flex justify-center w-full overflow-hidden relative">
          <div className="lg:w-[calc(50%+1px)] max-lg:min-w-[80vw] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="lg:w-[50%] max-lg:min-w-[80vw] scale-x-[-1] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-azul-escuro via-70% via-[rgba(8,8,30,0.00)] to-azul-escuro w-screen h-screen"></div>

        </div>
        <div className="absolute top-0 pt-6 lg:pt-[8vh] left-0 px-4 lg:px-[8vw] right-0 flex flex-row items-center text-base justify-between text-white/60">
          <nav aria-label="Navegação principal">
            
            <button className="flex flex-col items-center justify-center h-[16px] w-[24px] gap-y-1.5 relative z-10 lg:hidden" onClick={()=> setShowMenu(!showMenu)}>
              <div className={`h-[1px] w-full absolute transition-all ease-initial duration-300  ${showMenu ? "rotate-45 top-1/2 bg-azul-marinho" : "top-0 rotate-0 bg-white/60" } `}></div>
              <div className={`h-[1px] w-full absolute transition-all ease-initial duration-300  ${showMenu ? "opacity-0 bg-azul-marinho" : " opacity-100 bg-white/60" } `}></div>
              <div className={`h-[1px] w-full absolute transition-all ease-initial duration-300   ${showMenu ? "-rotate-45 top-1/2  bg-azul-marinho" : "bottom-0 rotate-0 bg-white/60" } `}></div>
            </button>
            <ul className={`flex flex-col max-lg:absolute max-lg:h-screen transition-all ease-initial duration-300 max-lg:top-0 max-lg:bottom-0 max-lg:left-0 lg:flex-row lg:items-center gap-x-3 max-lg:bg-white max-lg:pt-[68px] max-lg:w-full max-lg:max-w-80 max-lg:px-4 max-lg:gap-y-2 ${showMenu ? "max-lg:translate-x-0" : " max-lg:-translate-x-full"}`}>
              <li>
                <MenuItem
                  title="Contato"
                  link={() => onToggleModal(1)}
                  isOpen={indexOpen === 1}
                >
                  <button className="flex relative text-white/60 rounded-full px-6 py-2.5 group/button z-[0] border border-azul-escuro overflow-x-hidden ">
                    <div className="flex flex-row z-[1] mix-blend-color-dodge text-white transition-all ease-in-out duration-500">
                      <svg class="instagram-icon" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Instagram</span>
                    </div>
                    <div className=" bg-[linear-gradient(45deg,#FAE67F_0%,#EE472E_25%,#C61786_50%,#4754A3_100%)] transition-all ease-in-out duration-400 absolute inset-0 rounded-full transform z-[-1] group-hover/button:translate-x-0">

                    </div>
                  </button>
                </MenuItem>
              </li>

              <li>
                <MenuItem
                  title="GitHub"
                  link={() => onToggleModal(2)}
                  isOpen={indexOpen === 2}
                />
                
              </li>

              <li>
                <MenuItem
                  title="Chora2"
                  link="https://www.instagram.com/reel/DNjbKeLxeAb/?igsh=aWV5MXo2c2phcmgw"
                  openNewTab
                />
              </li>
            </ul>

          </nav>

          <p>
            Rafael G. Oliveira
          </p>
        </div>
        <h1 className="absolute font-Montserrat font-semibold bottom-[36%] mix-blend-color-dodge left-1/2 transform text-[#aaaaaa] w-full -translate-x-1/2 text-[7vw] lg:text-[5.5vw] lg:leading-[12vh] text-center ">DESENVOLVEDOR WEB</h1>

        <section className="flex justify-center items-center absolute bottom-[8vh] right-[calc(8vw+50px)] z-10">
          <div className="border-2 border-white/60 w-10 h-16 rounded-3xl flex justify-center relative">
            <div className="arrowDown h-[18px] w-[2px] rounded-full bg-white/80 top-2 left-1/2 transform -translate-x-[cacl(50%-1px)] ">

            </div>

          </div>
          <p className="rotate-90 absolute text-[11px] font-normal -tracking-[0.18px] text-white/80 text-nowrap left-[20px] animate-pulse">
            Scroll down
          </p>
        </section>

        <section className="divBranca z-10 absolute w-screen bg-white text-black min-h-screen h-auto rotate-x-[90deg] rounded-[60px] scale-x-[0.42] top-[25vh] overflow-x-hidden">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <h2 className="h2MeConheca text-[20px] lg:text-[34px] font-semibold text-azul-escuro text-center mb-8">
              Me conheça um pouco mais
            </h2>

            <div className="sobreMim flex flex-col lg:flex-row text-sm text-azul-escuro">
              <div>
                <h3 className="text-base font-semibold">Sobre mim</h3>
                <p>
                  Me chamo Rafael Gomes de Oliveira, sou Desenvolvedor Web Front-End Júnior. Sou formado em Técnico em Informática para a Internet pelo Instituto Federal Baiano - Campus Guanambi e possuo experiência com a plataforma de e-commerce Wake. Atualmente, dedico meus estudos ao React, GSAP, CSS avançado e Tailwind, buscando consolidar minhas habilidades em desenvolvimento de aplicações web.
                </p>
                <p>                 
                  Atuo há {anoExperiencia} anos na área. Além do lado técnico, sou uma pessoa colaborativa, sempre disposto a compartilhar conhecimento e apoiar a equipe, ,me considero relativamente curioso e autodidata, com facilidade em aprender de forma independente. Gosto de desafios que me impulsionam a sair da zona de conforto e me motivam a compreender em profundidade os detalhes das tecnologias e das soluções que aplico.
                </p>
                <p className="hidden">
                  Tenho também grande interesse em automação, dispositivos IoT e desenvolvimento/montagem de drones, áreas que me inspiram a explorar a integração entre software, hardware e criatividade.
                </p>
              </div>
              <img src={enfeite} alt="" />
            </div>

            <div className="projetos w-full flex flex-col lg:flex-row">
              <div className="w-full lg:max-w-[35%]">
                <h3 className="text-end">Projeto 1</h3>
              </div>
              <div className="w-full relative flex flex-col justify-center">
                <img src={enfeite} alt="" className="absolute " />
              </div>
            </div>

            <div className="projetos w-full flex flex-col lg:flex-row">
              <div className="w-full lg:max-w-[35%]">
                <h3 className="text-end">Projeto 2</h3>
              </div>
              <div className="w-full relative flex flex-col justify-center">
                <img src={enfeite} alt="" className="absolute " />
              </div>
            </div>

          </div>

        </section>
      </section>
      <div className="contentNormal flex flex-col w-full">
        Chora papai
        <img src={enfeite} alt="" className="w-fit" />
        <img src={enfeite} alt="" className="w-fit" />
        <img src={enfeite} alt="" className="w-fit" />
      </div>
    </main>
  )
}

/*
  1 - Puxar as informações do github se tiver como e do linkedin, 
  2 - colocar um botão pra contato 
  3 - botão pra baixar o currículo
  4 - Fazer meio que nem aquele site da nike, que vai rolando e vai aparecendo as informações dos projetos e quando scrollar ele joga a imagem pro lado direito e na hr aparecer outra imagem de outro projeto

*/


