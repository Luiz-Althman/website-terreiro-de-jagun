'use client';
/* eslint-disable @next/next/no-img-element */

import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';

import Logo from '@/src/app/images/logo.150px.jpg';
import { MenuWithSubmenu, MenuWithSubmenuType } from './MenuWithSubmenu';

export function Header() {
    const Submenu: MenuWithSubmenuType[] = [
        {
            link: '#o_terreiro',
            title: 'O Terreiro',
        },
        {
            link: '/people',
            title: 'Quem somos',
        },
        {
            link: '/projetos',
            title: 'Projetos',
        },
        {
            link: '/reinauguracao',
            title: 'Reinauguração',
        },
        {
            link: 'https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios.',
            title: 'Agende seu jogo',
        },
        {
            link: 'mailto:terreirodejagun@gmail.com',
            title: 'Contato',
        },
    ];
    return (
        <header className="bg-[var(--green-300)] w-full p-6 mb-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="cursor:pointer">
                    <img
                        src={Logo.src}
                        alt=""
                        className="sm:w-[5rem] w-[3rem]"
                    />
                </a>
                <div className="sm:hidden block">
                    <MenuWithSubmenu data={Submenu} />
                </div>
                <ul className="hidden sm:flex justify-center gap-5 text-[1.15rem] font-semibold ">
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a href="#o_terreiro">O Terreiro</a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a href="/people">Quem somos</a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a href="/projetos">Projetos</a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a href="/reinauguracao">Reinauguração</a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios.">
                            Agende seu Jogo
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais.">
                            Contato
                        </a>
                    </li>
                </ul>
                <ul className="hidden sm:flex justify-center gap-5 text-[1rem] font-semibold">
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a
                            href="https://www.tiktok.com/@terreirodejagun"
                            target="_blank"
                        >
                            <FaTiktok size={30} />
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a
                            href="https://www.facebook.com/TerreirodeJagun?locale=pt_BR"
                            target="_blank"
                        >
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
                        <a
                            href="https://www.instagram.com/terreirodejagun/"
                            target="_blank"
                        >
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className="cursor:pointer hover:opacity-20 hover:underline">
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
