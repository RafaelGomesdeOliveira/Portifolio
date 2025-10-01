export default function SocialButton({link, children, bgColor, size, openNewTab = false}) {

    return(
        <a href={link ? link : "#"} target={openNewTab ? "_blank" : "_self"} className={`flex relative ${bgColor ? bgColor : "bg-black"} text-white/90 rounded-xl ${size ? size : "w-[40px] h-[40px]"}  py-2.5 group/button z-[0] transition-all ease-in duration-500 cursor-pointer hover:border-transparent overflow-hidden justify-center items-center shadow-[3px_3px_5px_rgba(0,0,0,0.3)]`}>
            {children}
        <div className={` absolute rotate-45 w-[200%] h-[70%] group-hover/button:translate-x-full transition-all duration-[400ms] ease-in bg-white/30 transform -translate-x-full `}>

        </div>
        </a>
    )
}