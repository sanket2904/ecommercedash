import { useState } from "react"
import style from "../styles/index.module.css"
import Image from "next/image"
import Welcomesvg from "../public/welcome.svg"
export default function Home() {

    const [slider,setSlider] = useState(false)


    return (
        <div className={slider ? "overflow-hidden h-72" : ""}  >
            <header  className= "h-16 flex p-4 justify-between align-middle grid-rows-1"          >
                <svg onClick={() => setSlider(true)} style={{alignSelf:"center"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: "center" }} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
            </header>
            {
                slider && <div onClick={(e) => console.log(e)} className="w-screen h-screen backdrop-blur-md z-10  fixed top-0">
                    <div style={{ backgroundColor: "#161c24" }} className={`w-4/5 h-screen flex fixed flex-wrap justify-center overflow-y-scroll -left-72  gap-5  ${style.transition} `}>
                        
                            <div className="logo w-4/5 p-4 h-10">

                            </div>
                            <div className={`w-4/5 h-20 grid p-4 rounded-xl ${style.analytics}`} >

                            </div>
                            <h1 className="w-4/5 font-semibold text-sm">
                                General
                            </h1>
                        <div style={{ color:"#919eab"}} className="w-4/5 p-2 h-10 rounded-xl flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                                <h1>
                                    App
                                </h1>
                            </div>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                                <h1>
                                    E-Commerce
                                </h1>
                            </div>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 font-normal flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                                <h1>
                                    Analytics
                                </h1>
                        </div>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <h1>
                                Inventory
                            </h1>
                        </div>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <h1>
                                Orders
                            </h1>
                        </div>
                        <h1 className="w-4/5 font-semibold text-sm">
                            MANAGEMENT
                        </h1>
                        
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h1>
                                Users
                            </h1>
                        </div>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h1>
                                Billing
                            </h1>
                        </div>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h1>
                                Groups
                            </h1>
                        </div>
                        <h1 className="w-4/5 font-semibold text-sm">
                            APP
                        </h1>
                        <div style={{ color: "#919eab" }} className="w-4/5 p-2 h-10 rounded-xl gap-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <h1>
                                Mail
                            </h1>
                        </div>
                    </div>
                    <div onClick={(e) => {setSlider(false)}} className="w-1/5 h-screen fixed right-0 ">

                    </div>
                </div>
            }
            <section className={`flex justify-center   mt-10 ${style.general} `}>
                {/* for general section */}
                <div className="w-11/12 p-5 rounded-xl ">
                    <h1 className="align-center text-xl text-center font-bold ">
                        Welcome back!
                    </h1>
                    <p className="text-center mt-3 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque accusantium quod! Eum doloribus ducimus numquam. 
                    </p>
                    <Image src={Welcomesvg} alt="svg" height={300} width={300}  />
                </div>
            </section>
            <section className="mt-8 flex flex-wrap gap-8 justify-center"> 
                {/* infosection for data analytics */}
                
                <div className={`w-11/12 h-40 rounded-xl ${style.analytics} `} >

                </div>
                <div className={`w-11/12 h-40 rounded-xl ${style.analytics} `} >

                </div>
                <div className={`w-11/12 h-40 rounded-xl ${style.analytics} `} >

                </div>
                <div style={{height:"510px"}} className={`w-11/12  rounded-xl ${style.analytics} `} >

                </div>
                <div style={{ height: "510px" }} className={`w-11/12  rounded-xl ${style.analytics} `} >

                </div>
                <div style={{ height: "510px" }} className={`w-11/12  rounded-xl ${style.analytics} `} >

                </div>

            </section>
        </div>
    )
}



