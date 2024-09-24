'use client';

/* eslint-disable @next/next/no-img-element */

import { Carousel } from './CarouselComponent';

import Brasao from '@/src/app/images/logo.jpeg';

import { WhatsappFixed } from './WhatsappFixed';
import { items } from '../mock';

export function Introduction() {
    return (
        <section className="container mx-auto sm:pt-[10rem] pt-[8rem]">
            <header className=" w-full flex justify-center flex-col items-center">
                <h1 className="font-bold sm:my-3 uppercase">
                    Ilé Àiyé Ajagbòrò Igi Aşé Jagun
                </h1>
                <img
                    src={Brasao.src}
                    alt="Brasão do terreiro de Jagun"
                    className="w-full"
                />
            </header>
            <article className="mt-5">
                <h3 className="uppercase">
                    Terreiro de camdomblé fundado em 2013.
                </h3>
                <p className="mt-2">
                    Administrado pelo Babalorixá,{' '}
                    <a
                        href="https://www.instagram.com/xaxaroberto/"
                        className="font-bold underline hover:opacity-20"
                        target="_blank"
                    >
                        Roberto Xáxa.
                    </a>
                </p>
            </article>

            <div id="o_terreiro" />
            <WhatsappFixed />
            <Carousel data={items} />
        </section>
    );
}
