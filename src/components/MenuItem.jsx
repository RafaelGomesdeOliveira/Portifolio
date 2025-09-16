import Modal from "./Modal"

export default function MenuItem(props) {

    const { title, link, openNewTab = false, isOpen, children } = props

    const isFunction = typeof link === "function"
    return(
        <div className="relative group lg:px-1 text-azul-escuro lg:text-white/60 lg:hover:text-white/80">
            {!isFunction ? (
                <a href={link} target={openNewTab ? "_blank" : "_self"} className="relative  rounded-full ">
                    {title}
                    
                </a>  
            ) : (
                <>
                    <button onClick={link} className="cursor-pointer">
                        {title}
                    </button>
                    

                    <Modal
                        isOpen={isOpen}
                        funct={link}
                        title={title}
                    >
                        { children }
                    </Modal>
                </>
                )
            }
            <div className="h-[1px] transform left-1/2 -translate-x-1/2 w-full max-w-0 group-hover:max-w-full transition-all ease-in-out duration-400 bg-white/60 absolute"></div>
            
        </div>
    )

}