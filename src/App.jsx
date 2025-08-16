
export default function App() {
  return (
    <>
      <section className="flex justify-center w-full h-screen bg-[#08081E] ">
        <div className="flex justify-center w-full overflow-hidden relative">
          <div className="lg:min-w-[50%] max-lg:min-w-[80vw] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="lg:min-w-[50%] max-lg:min-w-[80vw] scale-x-[-1] mix-blend-color-dodge h-[150vh] bg-[conic-gradient(from_90deg_at_50%_50%,#F8F8F8_0deg,_#0C0C0C_20deg,#B1B1B1_100deg,#B1B1B1_120deg,#BDBDBD_210deg,#F8F8F8_360deg)]"></div>
          <div className="absolute inset-0 bg-linear-to-b from-[#08081E] via-70% via-[rgba(8,8,30,0.00)] to-[#08081E] w-screen h-screen"></div>
          <div className="absolute top-[20%]">

          </div>
        </div>
        <h1 className="absolute font-Montserrat font-medium bottom-[36%] mix-blend-color-dodge left-1/2 transform text-[#aaaaaa] w-full -translate-x-1/2 text-[5.5vw] lg:leading-[12vh] text-center ">A melhor versão do <br></br>Seu próximo Projeto</h1>

        <section className="flex justify-center items-center absolute bottom-[8vh] right-[8vw] z-10">
          <div className="border-2 border-white/60 w-10 h-16 rounded-3xl flex justify-center relative">
            <div className="arrowDown h-[18px] w-[2px] rounded-full bg-white/80 top-2 left-1/2 transform -translate-x-[cacl(50%-1px)] ">

            </div>

          </div>
            <p className="rotate-90 absolute text-[11px] font-normal -tracking-[0.18px] text-white/80 text-nowrap left-[20px] animate-pulse">
              Scroll down
            </p>
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


