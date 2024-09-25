'use client';
/* eslint-disable @next/next/no-img-element */

import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';

import Logo from '@/src/app/images/logo.150px.jpg';
import { MenuWithSubmenu } from './MenuWithSubmenu';
import { Submenu } from '../mock';

export function Header() {
    return (
        <header className="bg-[var(--green-300)] w-full p-6 fixed z-50 shadow">
            <div className="container flex justify-between items-center">
                <div className="flex justify-between flex-row-reverse w-full sm:hidden">
                    <a href="/" className="cursor:pointer">
                        <img
                            src={Logo.src}
                            alt=""
                            className="sm:w-[6rem] w-[3rem]"
                        />
                    </a>
                    <div className="sm:hidden block">
                        <MenuWithSubmenu data={Submenu} />
                    </div>
                </div>
                <div className="hidden sm:block">
                    <a href="/" className="cursor:pointer">
                        <img
                            src={Logo.src}
                            alt=""
                            className="sm:w-[4rem] w-[3rem]"
                        />
                    </a>
                </div>
                <ul className="hidden sm:flex justify-center gap-5 text-[1.15rem] font-semibold ">
                    <li className="cursor:pointer">
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
                    {/* <li className="cursor:pointer ">
                        <a
                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                            href="/projetos"
                        >
                            Projetos
                        </a>
                    </li> 
                    <li className="cursor:pointer">
                        <a
                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                            href="/reinauguracao"
                        >
                            Reinauguração
                        </a>
                    </li>*/}
                    <a
                        href="/centro-cultural"
                        className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                        target="_blank"
                    >
                        Centro cultural
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios."
                        className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                        target="_blank"
                    >
                        Agende seu Jogo
                    </a>

                    <li className="cursor:pointer">
                        <a
                            className="relative inline-block text-[var(--brown-300)] after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                            href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais."
                        >
                            Contato
                        </a>
                    </li>
                </ul>
                <ul className="hidden sm:flex justify-center gap-5 text-[1rem] font-semibold">
                    <li className="cursor:pointer hover:opacity-20">
                        <a
                            href="https://www.tiktok.com/@terreirodejagun"
                            target="_blank"
                        >
                            <FaTiktok size={30} />
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20">
                        <a
                            href="https://www.facebook.com/TerreirodeJagun?locale=pt_BR"
                            target="_blank"
                        >
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20">
                        <a
                            href="https://www.instagram.com/terreirodejagun/"
                            target="_blank"
                        >
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20">
                        <a
                            href="https://www.youtube.com/@OTerreirodeJagunOficial"
                            target="_blank"
                        >
                            <FaYoutube size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
