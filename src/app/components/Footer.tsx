'use client';

/* eslint-disable @next/next/no-img-element */

import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaTiktok,
    FaWaze,
} from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { MdEmail, MdCall } from 'react-icons/md';
import Logo from '@/src/app/images/logo.150px.jpg';

export function Footer() {
    return (
        <footer className="bg-[var(--green-300)] w-full py-10 static bottom-0 sm:mt-10 mt-8">
            <div className="container mx-auto">
                <div className="flex justify-between w-full py-2 sm:flex-row flex-col">
                    <div className="w-full flex flex-col gap-4">
                        <a href="/">
                            <img
                                src={Logo.src}
                                alt=""
                                className="sm:w-[9rem] w-[5rem]"
                                loading="lazy"
                            />
                        </a>
                        <p className="sm:pr-3">
                            Terreiro de candomblé, fundado em 2001 em Franco da
                            Rocha. Dirigido pelo Babalorixá Roberto Xaxá, filho
                            de Mãe Cidália de Iroko.
                        </p>
                    </div>
                    <div className="flex flex-col sm:items-center w-full sm:py-0 py-5">
                        <div>
                            <h3 className="sm:text-center sm:pb-2">Menus</h3>
                            <div>
                                <ul className="sm:flex flex-col sm:text-center gap-1 text-[1.15rem] ">
                                    <li>
                                        <a
                                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                                            href="#o_terreiro"
                                        >
                                            O Terreiro
                                        </a>
                                    </li>

                                    <li className="cursor:pointer">
                                        <a
                                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                                            href="#people"
                                        >
                                            Quem somos
                                        </a>
                                    </li>
                                    <li className="cursor:pointer">
                                        <a
                                            href="https://www.instagram.com/centrocultural.opanije/"
                                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                                            target="_blank"
                                        >
                                            Centro Cultural
                                        </a>
                                    </li>

                                    <li className="cursor:pointer">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios."
                                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                                            target="_blank"
                                        >
                                            Agende seu Jogo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="sm:text-center sm:pt-2 py-5">
                            Endereço
                        </h3>
                        <div className="flex sm:gap-8 gap-16">
                            <a
                                href="https://waze.com/ul?ll=-23.273582965056768,-46.66414577600725&navigate=yes"
                                target="_blank"
                                className="cursor:pointer hover:opacity-20 hover:underline"
                            >
                                <FaWaze size={35} />
                            </a>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=-23.273582965056768,-46.66414577600725"
                                className="cursor:pointer hover:opacity-20 hover:underline"
                                target="_blank"
                            >
                                <SiGooglemaps size={35} />
                            </a>
                        </div>
                    </div>

                    <div id="redes_sociais" />
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
                                        href="mailto:terreirodejagun@gmail.com"
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
                        &copy; 2024 Terreiro de jagun - Todos os direitos
                        reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}
