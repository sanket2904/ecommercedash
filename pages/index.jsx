import { useEffect, useState } from "react"
import style from "../styles/index.module.css"
import Image from "next/image"
import Welcomesvg from "../public/welcome.svg"
import Sidebar from "../components/sidebar"
export default function Home() {

    const [slider,setSlider] = useState(false)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth)
    },[])

    return (
        <div className={slider ? "overflow-hidden h-72" : "lg:flex "}  >
              { (width < 1024) &&  <header  className= "h-16 flex p-4 justify-between align-middle grid-rows-1"          >
                <svg onClick={() => setSlider(true)} style={{alignSelf:"center"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: "center" }} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
            </header>}
            <Sidebar slider={slider} func={setSlider} />
            <div style={{alignItems:"center"}} className="w-full flex h-screen flex-wrap overflow-y-scroll justify-center gap-5 align-content-center p-5 ">
                <section className={`flex justify-center max-w-lg  mt-10 ${style.general} `}>
                    {/* for general section */}
                    <div className="w-11/12 p-5 rounded-xl max-w-3xl flex flex-wrap justify-center ">
                        <div>
                            <h1 className="align-center text-xl text-center font-bold ">
                                Welcome back!
                            </h1>
                            <p className="text-center mt-3 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque accusantium quod! Eum doloribus ducimus numquam.
                            </p>
                        </div>
                        
                        <Image src={Welcomesvg} alt="svg" height={300} width={300} />
                    </div>
                </section>
                
                    {/* infosection for data analytics */}

                    <div className={`w-11/12 h-40 rounded-xl ${style.analytics}  max-w-md `} >

                    </div>
                    <div className={`w-11/12 h-40 rounded-xl ${style.analytics}  max-w-md `} >

                    </div>
                    <div className={`w-11/12 h-40 rounded-xl ${style.analytics}  max-w-md `} >

                    </div>

                    <div style={{ height: "510px" }} className={`w-11/12  rounded-xl ${style.analytics} max-w-md `} >

                    </div>
                    <div style={{ height: "510px" }} className={`w-11/12  rounded-xl ${style.analytics} max-w-md `} >

                    </div>
                    <div style={{ height: "510px" }} className={`w-11/12  rounded-xl ${style.analytics} max-w-md `} >

                    </div>
                    <div style={{ height: "510px" }} className={`w-11/12  rounded-xl ${style.analytics} max-w-md `} >

                    </div>

               
            </div>
            
        </div>
    )
}



