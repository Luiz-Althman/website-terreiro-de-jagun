'use client';
import { Carousel } from './Carousel';

import Brasao from '@/src/app/images/logo.jpeg';
import FOTO_2 from '@/src/app/images/dodo1.jpg';
import FOTO from '@/src/app/images/DSC_3061.jpg';
import FOTO_3 from '@/src/app/images/DSC01085.jpg';
import FOTO_4 from '@/src/app/images/DSC04974.jpg';
import FOTO_5 from '@/src/app/images/DSC_7875.jpg';
import FOTO_6 from '@/src/app/images/DSC02285.jpg';
import FOTO_7 from '@/src/app/images/IMG_7027.jpg';

export function Introduction() {
    const items: any = [
        {
            imageUrl: FOTO_3,
            name: 'Festa',
        },
        {
            imageUrl: FOTO_2,
            name: 'Festa',
        },
        {
            imageUrl: FOTO,
            name: 'Festa',
        },
        {
            imageUrl: FOTO_4,
            name: 'Festa',
        },
        {
            imageUrl: FOTO_5,
            name: 'Festa',
        },
        {
            imageUrl: FOTO_6,
            name: 'Festa',
        },
        {
            imageUrl: FOTO_7,
            name: 'Festa',
        },
    ];
    return (
        <div className="container mx-auto">
            <header className=" w-full flex justify-center flex-col items-center">
                <h1 className="font-bold my-5 uppercase">
                    Ilé Àiyé Ajagbòrò Igi Aşé Jagun
                </h1>
                <img src={Brasao.src} alt="Brasão do terreiro de Jagun" />
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
            <Carousel data={items} />
        </div>
    );
}
