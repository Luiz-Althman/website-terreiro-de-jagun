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
                            />
                        </a>
                        <p className="sm:pr-3">
                            Terreiro de candomblé, fundado em 2001 em Franco da
                            Rocha. Dirigido pelo Babalorixá Roberto Xaxá, filho
                            de Egbomi Mãe Cidália de Iroko.
                        </p>
                    </div>
                    <div className="flex flex-col sm:items-center w-full sm:py-0 py-5">
                        <h3 className="sm:text-center">Endereço</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.2920862220034!2d-46.66511038925857!3d-23.27333199869288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee8a269947fdf%3A0x2f6cd91ce6eaa6a6!2zSWzDqSBBaXnDqCBBamdiw7Jyw7IgSWdpIEFzw6ggSmFndW4!5e0!3m2!1spt-BR!2sbr!4v1726849613524!5m2!1spt-BR!2sbr"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="py-2 w-full h-[15rem] rounded-lg"
                            // referrerPolicy="no-referrer-when-downgrade"
                        />

                        <a
                            href="https://www.google.com/maps/dir/-23.2680166,-46.6512276/Rua+Alana+Caldas,+4+-+Bairro+dos+PENHAS,+Franco+da+Rocha+-+SP/@-23.2707123,-46.6636364,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94cee8a24210b895:0x6781851cf92b6f24!2m2!1d-46.6641565!2d-23.2736914?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                            className="hover:underline hover:opacity-20 font-semibold"
                            target="_blank"
                        >
                            R. Alana Caldas, 4 - Bairro dos PENHAS, Franco da
                            Rocha - SP, 07863-495
                        </a>
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
