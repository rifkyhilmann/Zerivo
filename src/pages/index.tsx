import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconsHeader, Logo } from "../assets"
import CardService from "../components/CardService"
import Navbar from "../components/Navbar"
import {  faEnvelope, faHeadset, faLightbulb, faStar } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Pages = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <div className="h-screen px-14 w-full flex items-center justify-center">
                <div className="max-w-[900px] md:mt-0 mt-10 w-full h-max flex flex-col md:flex-row justify-evenly gap-10">
                    {/* Gambar di atas pada tampilan mobile */}
                    <div className="w-full flex flex-col items-center justify-center md:items-start">
                        <img 
                            src={IconsHeader} 
                            alt="" 
                        />
                    </div>
                    <div className="w-full flex flex-col text-primary justify-center gap-5 md:items-start items-center md:text-left text-center">
                        <p className="text-4xl md:text-5xl font-bold">
                            Digital solution for tomorrow
                        </p>
                        <p className="text-md md:text-md font-medium text-black max-w-[350px]">
                        Kami berkomitmen untuk memberikan solusi digital yang dapat membantu bisnis Anda tumbuh dan beradaptasi di era modern. Dengan keahlian di berbagai bidang, kami siap menjadi mitra terpercaya Anda.
                        </p>
                        <button className="h-12 w-36 text-md rounded-xl bg-primary text-white hover:bg-secondary">
                            Lets tal'k
                        </button>
                    </div>
                </div>  
            </div>
            
            <div className="h-max px-14 w-full flex  items-center justify-center mb-20">
                <div className="max-w-[900px] w-full h-max flex flex-col gap-14 items-center text-primary">
                    <div className="flex flex-col items-center gap-1">
                        <p className="font-bold text-2xl">Our Services</p>
                        <p className="text-xl md:text-2xl font-normal">We are Master of Digital Agency</p>
                    </div>
                    <div className="w-full h-max grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <CardService 
                            title="Web Design"
                        />
                        <CardService 
                            title="Web Apps"
                        />
                        <CardService 
                            title="Mobile Apps"
                        />
                        <CardService 
                            title="Desain Graphics"
                        />
                        <CardService 
                            title="Internet Of Things"
                        />
                        <CardService 
                            title="Data Analytics"
                        />
                        <CardService 
                            title="UI/UX"
                        />
                        <CardService 
                            title="Cyber Security"
                        />
                        <CardService 
                            title="Desain Ilusator"
                        />

                    </div>
                </div>
            </div>
            
            <div className="h-max px-14 w-full flex items-center justify-center mb-20">
                <div className="max-w-[900px] w-full h-max flex flex-col  gap-5 items-center text-primary">
                    <div className="flex flex-col items-center gap-1">
                        <p className="font-bold text-md">Why Chose Us</p>
                        <p className="text-md md:text-2xl font-normal">We are Master of Digital Agency</p>
                    </div>
                    <div className="w-full  h-max grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-5">
                        <div className="h-64 rounded-md shadow-xl flex flex-col items-center py-10 gap-5">
                            <FontAwesomeIcon className="text-4xl" icon={faStar} />
                            <p className="text-sm font-semibold">Customer Service</p>
                            <p className="text-sm text-center mx-5">
                                Tim layanan pelanggan kami siap membantu Anda kapan saja.
                            </p>
                        </div>
                        <div className="h-64 rounded-md shadow-xl flex flex-col items-center py-10 gap-5">
                            <FontAwesomeIcon className="text-4xl" icon={faHeadset} />
                            <p className="text-sm font-semibold">Competitive Advantages</p>
                            <p className="text-sm text-center mx-5">
                                Kami berkomitmen untuk memberikan produk dan layanan dengan kualitas tertinggi.
                            </p>
                        </div>
                        <div className="h-64 rounded-md shadow-xl flex flex-col items-center py-10 gap-5">
                            <FontAwesomeIcon className="text-4xl" icon={faLightbulb} />
                            <p className="text-sm font-semibold">Innovation</p>
                            <p className="text-sm text-center mx-5">
                            Kami menggunakan teknologi terbaru untuk memberikan solusi yang inovatif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-72 w-full flex flex-col items-center justify-center text-white  gap-5 bg-secondary">
                <p className="md:text-xl text-md text-center">Konsultasi kebutuhan aplikasi bisnis atau instansi anda ?</p>
                <button className="w-32 h-10 rounded text-sm bg-primary hover:opacity-60">
                    Hubungi Kami
                </button>
            </div>

            <div className="h-max w-full bg-black px-14 py-10 flex flex-col items-center ">
                <div className="w-full flex items-center gap-10 justify-between ">
                    <div className="grid grid-cols-2 gap-10 md:gap-4 md:grid-cols-4 w-full">
                        <div className="flex flex-col gap-4">
                            <p className="text-white  text-md font-semibold">Company</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">About Us</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Blog</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Contact Us</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white  text-md font-semibold">Services</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Consulting</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Websites</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Mobile Apps</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Grapic Desain</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white  text-md font-semibold">Tekonologi</p>
                            <div className="flex flex-col gap-3">
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Javascript</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Python</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">PHP</p>
                                <p className="text-white hover:text-secondary text-xs font-medium cursor-pointer">Kotlin</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-white">
                            <img src={Logo} className="h-12 w-12" alt="" />
                            <p className="text-md font-semibold">Ready to get started?</p>
                            <button className="w-32 h-10 rounded bg-primary hover:bg-secondary">
                                Contact Us
                            </button>
                            <div className="flex items-center gap-4">
                                <a target="blank" href="https://www.instagram.com/zerivo.technology/">
                                    <FontAwesomeIcon className="text-lg hover:text-secondary " icon={faInstagram} /> 
                                </a>
                                <a href="">
                                    <FontAwesomeIcon className="text-lg hover:text-secondary " icon={faLinkedin} /> 
                                </a>
                                <a href="">
                                    <FontAwesomeIcon className="text-lg hover:text-secondary " icon={faWhatsapp} /> 
                                </a>
                                <a href="">
                                    <FontAwesomeIcon className="text-lg hover:text-secondary " icon={faEnvelope} /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-secondary my-10"></div>
                <div className="flex items-center justify-between w-full text-white text-xs font-medium">
                    <p></p>
                    <p>©Copyright 2024 Zerivo. All Rights Reserved.</p>
                </div>
            </div>
        
        </div>
    )
}

export default Pages
