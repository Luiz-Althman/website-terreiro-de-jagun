'use client';

/* eslint-disable @next/next/no-img-element */

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTiktok,
} from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';
import Logo from '@/src/app/images/logo.150px.jpg';
import Rua from '@/src/app/images/DSC00962.jpg';

export function Footer() {
    return (
        <footer className="bg-[var(--green-300)] w-full py-10 static bottom-0">
            <div className="container mx-auto">
                <div className="flex justify-between w-full py-2 sm:flex-row flex-col">
                    <div className="w-full flex flex-col gap-4">
                        <a href="/">
                            <img
                                src={Logo.src}
                                alt=""
                                className="sm:w-[10rem] w-[5rem]"
                            />
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eveniet, est minus rerum error deserunt
                            impedit temporibus excepturi vel minima. Quaerat
                            sapiente esse hic facere, optio consequuntur porro
                            numquam ad nostrum.
                        </p>
                    </div>
                    <div className="flex flex-col sm:items-center w-full sm:py-0 py-5">
                        <h3 className="sm:text-center">Endereço</h3>
                        <img src={Rua.src} alt="" className="sm:w-full py-2" />
                        <a
                            href="https://www.google.com/maps/dir/-23.2680166,-46.6512276/Rua+Alana+Caldas,+4+-+Bairro+dos+PENHAS,+Franco+da+Rocha+-+SP/@-23.2707123,-46.6636364,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94cee8a24210b895:0x6781851cf92b6f24!2m2!1d-46.6641565!2d-23.2736914?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                            className="hover:underline hover:opacity-20 font-semibold"
                        >
                            R. Alana Caldas, 4 - Bairro dos PENHAS, Franco da
                            Rocha - SP, 07863-495
                        </a>
                    </div>
                    <div className="flex flex-col w-full">
                        <h3 className="sm:text-center">Redes sociais</h3>
                        <div className="flex flex-col sm:items-center sm:py-2 py-5">
                            <div className="flex sm:gap-10 gap-16">
                                <div className="flex flex-col sm:gap-4 gap-8">
                                    <div className="cursor:pointer hover:opacity-20 hover:underline">
                                        <a
                                            href="https://www.facebook.com/TerreirodeJagun?locale=pt_BR"
                                            target="_blank"
                                        >
                                            <FaFacebook size={35} />
                                        </a>
                                    </div>
                                    <div className="cursor:pointer hover:opacity-20 hover:underline">
                                        <a
                                            href="https://www.instagram.com/terreirodejagun/"
                                            target="_blank"
                                        >
                                            <FaInstagram size={35} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col  sm:gap-4 gap-8">
                                    <div className="cursor:pointer hover:opacity-20 hover:underline">
                                        <a
                                            href="https://www.youtube.com/@OTerreirodeJagunOficial"
                                            target="_blank"
                                        >
                                            <FaYoutube size={35} />
                                        </a>
                                    </div>
                                    <div className="cursor:pointer hover:opacity-20 hover:underline">
                                        <a
                                            href="https://www.tiktok.com/@terreirodejagun"
                                            target="_blank"
                                        >
                                            <FaTiktok size={35} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:gap-4 gap-8 sm:pt-6 pt-8">
                                <h3 className="sm:text-center">Contato</h3>
                                <div className="flex sm:gap-10 gap-16">
                                    <div className="cursor:pointer hover:opacity-20 hover:underline">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais."
                                            target="_blank"
                                        >
                                            <FaWhatsapp size={35} />
                                        </a>
                                    </div>
                                    <div className="cursor:pointer hover:opacity-20 hover:underline">
                                        <a
                                            href="tel:+55 11 94258-4682"
                                            target="_blank"
                                        >
                                            <MdCall size={35} />
                                        </a>
                                    </div>
                                </div>
                                <div className="cursor:pointer hover:opacity-20 hover:underline">
                                    <a
                                        href="https://www.facebook.com/TerreirodeJagun?locale=pt_BR"
                                        target="_blank"
                                    >
                                        <MdEmail size={35} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-[var(--brown-300)] my-10" />
                <div className="flex justify-center">
                    <span className="text-sm">
                        Terreiro de jagun - &copy; Copyright 2024.
                    </span>
                </div>
            </div>
        </footer>
    );
}
