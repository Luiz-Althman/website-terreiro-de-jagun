'use client';

/* eslint-disable @next/next/no-img-element */

import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';
import Logo from '@/src/app/images/logo.150px.jpg';

export function Footer() {
    return (
        <footer className="bg-[var(--green-300)] w-full p-6 static bottom-0">
            <div className="container mx-auto">
                <div className="flex justify-between w-full py-2">
                    <div className="w-full flex flex-col gap-4">
                        <a href="/">
                            <img src={Logo.src} alt="" className="w-[10rem]" />
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eveniet, est minus rerum error deserunt
                            impedit temporibus excepturi vel minima. Quaerat
                            sapiente esse hic facere, optio consequuntur porro
                            numquam ad nostrum.
                        </p>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="">PRECISO DE IDEIA</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <h3 className="text-center">Redes sociais</h3>
                        <div className="flex flex-col items-center py-2">
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-4">
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
                                <div className="cursor:pointer hover:opacity-20 hover:underline">
                                    <a
                                        href="https://www.youtube.com/@OTerreirodeJagunOficial"
                                        target="_blank"
                                    >
                                        <FaYoutube size={35} />
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 pt-6">
                                <h3 className="text-center">Contato</h3>
                                <div className="flex gap-10">
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
            </div>
        </footer>
    );
}
