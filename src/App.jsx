import { useCallback, useLayoutEffect, useState } from "react";

import MenuItem from "./components/MenuItem";
import { gsap } from "gsap";
import enfeite from "./assets/img/Enfeite.png"
import { ScrollTrigger } from "gsap/all";

export default function App() {

  const [indexOpen, setIndexOpen] = useState(false)

  useLayoutEffect(()=> {
    gsap.registerPlugin(ScrollTrigger)

    const linhaDoTempo = gsap.timeline({
        scrollTrigger: {
            trigger: ".scrollReferenc",
            start: "top top",
            end: "+=2000",
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

    linhaDoTempo.fromTo(".h2MeConheca", 
      {
        opacity: 0,
        duration: 0
      }, { 
        opacity: 1, 
      }
    )

    linhaDoTempo.to(".h2MeConheca", 
      {
        opacity: 0,
        display: "none"
      }
    )


    // const projetos = document.querySelectorAll(".projetos")

    // projetos.forEach(element => {
    //   const img = element.querySelector("img")
    //   linhaDoTempo.fromTo(img, 
    //     {
    //       xPercent: 100,
    //       rotate: 340,
    //       right: 0,
    //       display:"none"
    //     },
    //     {
    //       xPercent: 0,
    //       right: "auto",
    //       rotate: 360,
    //       display: "flex"
    //     } 
    //   )

    //   linhaDoTempo.fromTo(element, 
    //     {
    //       display:"none"
    //     },
    //     {
    //       display: "flex"
    //     },
    //     "<"
    //   )

    //   linhaDoTempo.to(img, 
    //     {
    //       xPercent: 100,
    //       rotate: 340,
    //       opacity:0,
    //       display: "none"
    //     } 
    //   )
    //   linhaDoTempo.to(element, 
    //     {
    //       display:"none",
    //       opacity: 0
    //     },
    //     "<"
    //   )
      
    // });

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
    <>
      <section className="scrollReferenc flex justify-center w-full h-screen bg-[#08081E] relative perspective-[3000px] perspective-origin-[50%_76%] overflow-hidden ">
        <div className="flex justify-center w-full overflow-hidden relative">
          <div className="lg:w-[calc(50%+1px)] max-lg:min-w-[80vw] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="lg:w-[50%] max-lg:min-w-[80vw] scale-x-[-1] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-[#08081E] via-70% via-[rgba(8,8,30,0.00)] to-[#08081E] w-screen h-screen"></div>

        </div>
          <div className="absolute top-[8vh] left-[8vw] right-[8vw] flex flex-row items-center text-base justify-between text-white/60">

            <nav aria-label="Navegação principal">
              <ul className="flex items-center gap-x-3">
                <li>
                  <MenuItem 
                    title="Sobre" 
                    link={() => onToggleModal(1)}
                    isOpen={indexOpen === 1} 
                  />
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
        <h1 className="absolute font-Montserrat font-medium bottom-[36%] mix-blend-color-dodge left-1/2 transform text-[#aaaaaa] w-full -translate-x-1/2 text-[5.5vw] lg:leading-[12vh] text-center ">A melhor versão do <br></br>Seu próximo Projeto</h1>

        <section className="flex justify-center items-center absolute bottom-[8vh] right-[calc(8vw+50px)] z-10">
          <div className="border-2 border-white/60 w-10 h-16 rounded-3xl flex justify-center relative">
            <div className="arrowDown h-[18px] w-[2px] rounded-full bg-white/80 top-2 left-1/2 transform -translate-x-[cacl(50%-1px)] ">

            </div>

          </div>
          <p className="rotate-90 absolute text-[11px] font-normal -tracking-[0.18px] text-white/80 text-nowrap left-[20px] animate-pulse">
            Scroll down
          </p>
        </section>
          
        <section className="divBranca absolute w-screen bg-white text-black h-screen rotate-x-[90deg] rounded-[60px] scale-x-[0.42] top-[25vh]">
          <div className="flex justify-center items-center h-screen w-full">
            <h2 className="h2MeConheca">
              Me conheça um pouco mais
            </h2>

            <div className="projetos">
              <h3>Projeto 1</h3>
              <img src={enfeite} alt=""  className="left-0 transform translate-x-full"/>
            </div>

            {/* <div className="projetos">
              <h3>Projeto 2</h3>
              <img src={enfeite} alt="" />
            </div> */}
          </div>

        </section>
      </section>  
    </>
  )
}

/*
  1 - Puxar as informações do github se tiver como e do linkedin, 
  2 - colocar um botão pra contato 
  3 - botão pra baixar o currículo
  4 - Fazer meio que nem aquele site da nike, que vai rolando e vai aparecendo as informações dos projetos e quando scrollar ele joga a imagem pro lado direito e na hr aparecer outra imagem de outro projeto

*/


