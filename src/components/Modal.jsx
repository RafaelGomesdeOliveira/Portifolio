

export default function Modal(props) {

    const { children, isOpen, funct, custom = false } = props
    
    return(
        <>     
            {            
                isOpen ? (
                    <section className="w-screen h-screen  flex justify-center items-center fixed inset-0 z-[100]" >
                        <div className="absolute inset-0 bg-black/20 z-[101]" onClick={funct}>

                        </div>
                        
                        {
                            custom 
                            ?
                            <>
                                {children}
                            </>
                            :
                            <div className="bg-white z-[102] text-azul-escuro">
                                <button onClick={funct} className=" text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                    
                                </button>
                                {children}
                            </div> 

                        }
                        
                        

                    </section>
                    )
                :
                null
            }
        
        </>

    
    )

}