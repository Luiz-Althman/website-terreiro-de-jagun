import Image from 'next/image';

import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';

import Mae from '@/src/app/images/foto-mae-pretoebranco.jpg';

export function JardimEsoterico() {
    return (
        <section className="my-10" id="jardim_esoterico">
            <div className="container text-center">
                <header className="flex flex-col justify-center py-5">
                    <h2 className="uppercase">
                        Jardim{' '}
                        <span className="text-[var(--green-100)]">
                            esotérico
                        </span>
                    </h2>
                    <p className="text-center py-5 text-[1.15rem] font-semibold">
                        O <span className="text-[var(--green-100)]">tarô</span>{' '}
                        como ferramenta de clareza, conexão e transformação.
                    </p>
                </header>
                <div className="flex sm:flex-row flex-col justify-center items-center gap-4 text-left">
                    <h2 className="sm:hidden flex">
                        <span className="text-[var(--green-100)] pr-1">
                            Luciane
                        </span>
                        Althman
                    </h2>
                    <Image
                        src={Mae}
                        alt=""
                        width={560}
                        height={375}
                        className="rounded-lg sm:w-1/2 w-full"
                    />
                    <div className="space-y-4">
                        <h2 className="hidden sm:flex">
                            <span className="text-[var(--green-100)] pr-1">
                                Luciane
                            </span>
                            Althman
                        </h2>
                        <p>
                            Mãe de 2 filhos, 50 anos de idade, sendo mais de 33
                            anos dedicados ao Candomblé. Me dedico aos Estudos
                            do Tarô desde o ano de 2018, onde iniciei algumas
                            tiragens para conhecidos. Dei uma pausa com as
                            tiragens por não conseguir conciliar tudo, então,
                            decidi me aprofundar nos estudos e cursos. Hoje com
                            mais tempo, estou conseguindo retomar as tiragens do
                            tarô para pessoas fora do meu circílo de amigos.
                            Atendo somente online, para conseguir dispor de um
                            tempo melhor aos clientes, com aconselhamentos
                            pessoais, suporte espiritual e autoconhecimento.
                            <br />
                            <br />O Tarô pode lhe abrir a mente, os olhos e o
                            coração. Não deixe pra amanhã, fale comigo!
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.tiktok.com/@jardim.esoterico"
                                target="_blank"
                                className="cursor:pointer hover:opacity-20"
                            >
                                <FaTiktok size={30} />
                            </a>
                            <a
                                href="https://www.facebook.com/share/18q5v7LHeA/?mibextid=wwXIfr"
                                target="_blank"
                                className="cursor:pointer hover:opacity-20"
                            >
                                <FaFacebook size={30} />
                            </a>
                            <a
                                href="https://www.instagram.com/jardimesoterico_/"
                                target="_blank"
                                className="cursor:pointer hover:opacity-20"
                            >
                                <FaInstagram size={30} />
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=5511964720005&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:opacity-20"
                            >
                                <FaWhatsapp size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
