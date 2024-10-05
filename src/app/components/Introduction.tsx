'use client';

// import { Carousel } from './CarouselComponent';

import Brasao from '@/src/app/images/logo.jpeg';

import { WhatsappFixed } from './WhatsappFixed';
// import { items } from '../mock';
import Image from 'next/image';

export function Introduction() {
    return (
        <section className="container mx-auto sm:pt-[10rem] pt-[8rem]">
            <header className=" w-full flex justify-center flex-col items-center">
                <h1 className="font-bold sm:my-3 uppercase">
                    Ilé Àiyé Ajagbòrò Igi Aşé Jagun
                </h1>
                <Image
                    src={Brasao}
                    alt="Brasão do terreiro de Jagun"
                    width={600}
                    height={600}
                    className="w-full"
                    priority={true}
                />
            </header>
            <article className="mt-5">
                <h3 className="">
                    <span className="text-[var(--green-100)]">
                        Terreiro de Candomblé
                    </span>{' '}
                    fundado em 2012.
                </h3>
                <div id="o_terreiro" />

                <p className="mt-2">
                    Dirigido pelo Babalorixá{' '}
                    <a
                        href="https://www.instagram.com/xaxaroberto/"
                        className="font-bold text-[var(--green-100)] relative inline-block hover:opacity-50 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--green-100)] after:transition-all after:duration-500 hover:after:w-full"
                        target="_blank"
                    >
                        Roberto Xáxa.
                    </a>
                </p>
            </article>

            <WhatsappFixed />
            {/* <Carousel data={items} /> */}
        </section>
    );
}
