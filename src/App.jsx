/*ICONS / IMAGES */
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import perfil from "./assets/img/perfil-2.png"
import enfeite from "./assets/img/Enfeite.png"
import sobreMim from "./assets/img/sobre-mim.png"
import sobreMimMobile from "./assets/img/sobre-mim-mobile.png"
import viagem_1 from "./assets/img/viagem-1.png"
import viagem_2 from "./assets/img/viagem-2.png"
import viagem_3 from "./assets/img/viagem-3.png"

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import writtenNumber from "written-number";
import MenuItem from "./components/MenuItem";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/all";
import SocialButton from "./components/SocialButton.jsx";

export default function App() {

  const [indexOpen, setIndexOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const anoAtual = new Date().getFullYear()


  const anoExperiencia = writtenNumber((anoAtual - 2021), { lang: "pt" })

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // trava o scroll geral
    } else {
      document.body.style.overflow = "auto";   // libera o scroll
    }
  }, [showMenu])

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
        pin: true,
        scrub: 2,
      }
    });

    linhaDoTempo.to(".divBranca", {
      rotationX: 0,
      scaleX: 1,
      top: 0,
      borderRadius: 0,
      backgroundColor: '#090920',
      color: '#FFFFFF',
    })

    linhaDoTempo.fromTo(".h2MeConheca", animStart, animEnd)

    linhaDoTempo.to(".h2MeConheca", animExit)

    linhaDoTempo.fromTo(".sobreMim", animStart, animEnd)

    linhaDoTempo.to(".sobreMim", animExit)

    const projetos = document.querySelectorAll(".projetos")

    projetos.forEach((element, index) => {
      let content;
      const divImgs = element.querySelector(".contentImgs")
      if(divImgs) {
        content = element.querySelector(".contentImgs")
      } else {
        content = element.querySelector("img")
      }

      if(!content) return
      

      linhaDoTempo.fromTo(content,
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

      if(divImgs) {
        const imgs = element.querySelectorAll("img")

        imgs.forEach(ele => {
        linhaDoTempo.fromTo(ele,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        )
        });

      }

      linhaDoTempo.fromTo(element,
        {
          display: "none"
        },
        {
          display: "flex"
        },
        ">"
      )
      console.log(projetos.length)
      console.log(index)
      if ((projetos.length - 1) != index) {
        linhaDoTempo.to(content,
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
    <main className={` ${showMenu ? "overflow-y-hidden" : null}`}>
      <section className={`scrollReferenc flex flex-col justify-center w-full h-screen bg-azul-escuro relative perspective-[3000px] perspective-origin-[50%_76%] overflow-hidden`}>
        <div className="flex justify-center w-full overflow-hidden relative">
          <div className="lg:w-[calc(50%+1px)] max-lg:min-w-[80vw] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="lg:w-[50%] max-lg:min-w-[80vw] scale-x-[-1] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-azul-escuro via-70% via-[rgba(8,8,30,0.00)] to-azul-escuro w-screen h-screen"></div>

        </div>
        <div className="absolute top-0 pt-6 lg:pt-[8vh] left-0 px-4 lg:px-[8vw] right-0 flex flex-row items-center text-base justify-between text-white/60">
          <nav aria-label="Navegação principal">
            
            <button className="flex  flex-col items-center justify-center h-[16px] w-[24px] gap-y-1.5 relative z-[51] lg:hidden" onClick={()=> setShowMenu(!showMenu)}>
              <div className={`h-[1px] w-full absolute transition-all ease-initial duration-300  ${showMenu ? "rotate-45 top-1/2 bg-azul-marinho" : "top-0 rotate-0 bg-white/60" } `}></div>
              <div className={`h-[1px] w-full absolute transition-all ease-initial duration-300  ${showMenu ? "opacity-0 bg-azul-marinho" : " opacity-100 bg-white/60" } `}></div>
              <div className={`h-[1px] w-full absolute transition-all ease-initial duration-300   ${showMenu ? "-rotate-45 top-1/2  bg-azul-marinho" : "bottom-0 rotate-0 bg-white/60" } `}></div>
            </button>
            <ul className={`flex z-50 flex-col max-lg:absolute max-lg:h-screen transition-all ease-initial duration-300 max-lg:top-0 max-lg:bottom-0 max-lg:left-0 lg:flex-row lg:items-center gap-x-3 max-lg:bg-white max-lg:pt-[68px] max-lg:w-full max-lg:max-w-80 max-lg:px-4 max-lg:gap-y-2 ${showMenu ? "max-lg:translate-x-0" : " max-lg:-translate-x-full"}`}>
              <li>
                <MenuItem
                  title="Sobre mim"
                  showTitle={false}
                  link={() => onToggleModal(1)}
                  isOpen={indexOpen === 1}
                >
                  
                    <div className="flex flex-col max-w-[260px] lg:max-w-[500px]  w-full ">
                      <div className="flex justify-between gap-x-2 lg:gap-x-8 items-center lg:flex-row flex-col-reverse">
                        <div className="flex flex-col-reverse lg:flex-col justify-between max-lg:gap-y-4 h-full max-lg:mt-3 lg:min-h-[170px]">
                          <div className="flex flex-col max-lg:gap-y-0.5 text-azul-escuro">
                            <h2 className=" font-medium text-[20px] lg:text-[22px]">
                              Rafael Gomes de Oliveira
                            </h2>
                            <h3 className="text-[#444279] font-medium">Desenvolvedor Front-End júnior</h3>
                            <p className="text-xs lg:text-sm">React JS | JavaScript | Tailwind | CSS Intermediário | C++ </p>
                          </div>
                          <div className="flex flex-row gap-x-1 max-lg:justify-center">
                            <SocialButton
                              link="https://www.instagram.com/gomezs_rafael/"
                              openNewTab={true}
                              bgColor="bg-[linear-gradient(45deg,#FAE67F_0%,#EE472E_25%,#C61786_50%,#4754A3_100%)]"
                            >
                              <LuInstagram size={24} strokeWidth={1.75} className="min-w-6"/>
                            </SocialButton>
                            <SocialButton
                              link="https://www.linkedin.com/in/rafael-gomes-de-oliveira-92a173334/"
                              openNewTab={true}
                              bgColor="bg-[#0072b1]"
                            >
                              <CiLinkedin size={27} strokeWidth={0.33} className="min-w-[27px]"/>
                            </SocialButton>

                            <SocialButton
                              link="mailto:rafaelgomesdeoliveiraa@gmail.com"
                              openNewTab={true}
                              bgColor="bg-[#EA4335]"
                            >
                              <HiOutlineMail size={27} strokeWidth={1.6} className="min-w-[27px]"/>
                            </SocialButton>
                            <SocialButton
                              link="https://github.com/RafaelGomesdeOliveira"
                              openNewTab={true}
                              bgColor="bg-black"
                            >
                              <FiGithub size={21} strokeWidth={2.2} className="min-w-[21px]"/>
                            </SocialButton>
                            
                          </div>
                        </div>
                        <img src={perfil} alt="" className="shadow-[2px_3px_8px_rgba(0,0,0,0.3)] rounded-[20px] w-[200px] lg:w-[170px]"/>
                        
                      </div>

                    </div>
                  

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
        <h1 contentEditable="true" className="absolute outline-0 font-Montserrat font-semibold bottom-[36%] mix-blend-color-dodge left-1/2 transform text-[#aaaaaa] w-full -translate-x-1/2 text-[7vw] lg:text-[5.5vw] lg:leading-[12vh] text-center ">DESENVOLVEDOR WEB</h1>

        <section className="flex justify-center items-center absolute bottom-[8vh] right-[calc(8vw+50px)] z-10">
          <div className="border-2 border-white/60 w-10 h-16 rounded-3xl flex justify-center relative">
            <div className="arrowDown h-[18px] w-[2px] rounded-full bg-white/80 top-2 left-1/2 transform -translate-x-[cacl(50%-1px)] ">

            </div>

          </div>
          <p className="rotate-90 absolute text-[11px] font-normal -tracking-[0.18px] text-white/80 text-nowrap left-[20px] animate-pulse">
            Scroll down
          </p>
        </section>

        <section className="divBranca z-[52] absolute w-screen bg-white text-black min-h-screen h-auto rotate-x-[90deg] rounded-[60px] scale-x-[0.42] top-[25vh] overflow-x-hidden">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            
            <h2 className="h2MeConheca text-[20px] lg:text-[34px] font-semibold  text-center mb-8 animate-gradient-x bg-[linear-gradient(45deg,#7A7ACC_0%,#D6D6FF_50%,#A3A3F2_100%)] bg-size-[400%_100%]">
              Me conheça um pouco mais
            </h2>
            

            <div className="sobreMim flex flex-col lg:flex-row gap-x-20 items-center gap-y-6 text-sm text-white/90 h-[100dvh] px-4 lg:px-[8vw] py-8 ">
              <div className="flex-1 overflow-y-auto flex-shrink lg:max-w-[530px]">
                <h3 className="text-xl w-fit lg:text-2xl font-medium mb-3 animate-gradient-x bg-[linear-gradient(45deg,#7A7ACC_0%,#D6D6FF_50%,#A3A3F2_100%)] bg-size-[400%_100%] ">Sobre mim</h3>
                <div className="flex flex-col gap-y-3 lg:gap-y-4 text-justify lg:text-base">
                  <p>
                    Me chamo Rafael Gomes de Oliveira, sou Desenvolvedor Web Front-End Júnior. Sou formado em Técnico em Informática para a Internet pelo Instituto Federal Baiano - Campus Guanambi e possuo experiência com a plataforma de e-commerce Wake. Atualmente, dedico meus estudos ao React, GSAP, CSS avançado e Tailwind, buscando consolidar minhas habilidades em desenvolvimento de aplicações web.
                  </p>
                  <p>
                    Atuo há {anoExperiencia} anos na área. Além do lado técnico, sou uma pessoa colaborativa, sempre disposto a compartilhar conhecimento e apoiar a equipe, me considero relativamente curioso e autodidata, com facilidade em aprender de forma independente. Gosto de desafios que me impulsionam a sair da zona de conforto e me motivam a compreender em profundidade os detalhes das tecnologias e das soluções que aplico.
                  </p>
                  <p >
                    Tenho também grande interesse em automação, dispositivos IoT e desenvolvimento/montagem de drones, áreas que me inspiram a explorar a integração entre software, hardware e criatividade.
                  </p>
                </div>
              </div>

              <picture>
                <source media="(min-width: 1024px)" srcSet={sobreMim} />

                <img
                  src={sobreMimMobile}
                  alt="Foto do desenvolvedor"
                  className="w-full object-contain lg:max-w-[530px] rounded-[20px] "
                />
              </picture>

            </div>


            <div className="projetos w-full flex flex-col lg:flex-row justify-center items-center">
              <div className="w-full lg:max-w-[530px]">
                <h3 className="text-xl w-fit lg:text-2xl font-medium mb-3 animate-gradient-x bg-[linear-gradient(45deg,#7A7ACC_0%,#D6D6FF_50%,#A3A3F2_100%)] bg-size-[400%_100%] ">Viagem Internacional</h3>
                <p>

                </p>
              </div>
              <div className="flex flex-wrap lg:max-w-[530px] contentImgs gap-4">
                <picture className="w-full relative flex flex-col justify-center">
                  <img src={viagem_1} alt="" className="w-full rounded-[20px]" />
                </picture>
                <picture className="w-full max-w-[calc(50%-8px)]">
                  <img src={viagem_2} alt="" className="w-full rounded-[20px]" />
                </picture>
                <picture className="w-full max-w-[calc(50%-8px)]">
                  <img src={viagem_3} alt="" className="w-full rounded-[20px]" />
                </picture>
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
  3 - Aparecer os projetos mais simples meio que de todos os lados e se juntarem no meio, fazer um cálculo pra se adaptar com a quantidade de imagens que tiver
  3 - botão pra baixar o currículo
  4 - Fazer meio que nem aquele site da nike, que vai rolando e vai aparecendo as informações dos projetos e quando scrollar ele joga a imagem pro lado direito e na hr aparecer outra imagem de outro projeto

*/


