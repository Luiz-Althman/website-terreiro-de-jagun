/* eslint-disable @next/next/no-img-element */

import FOTO_2 from '@/src/app/images/DSC_7171.jpg';
import FOTO from '@/src/app/images/DSC_3061.jpg';
import FOTO_3 from '@/src/app/images/DSC01085.jpg';
import FOTO_4 from '@/src/app/images/DSC04974.jpg';
import FOTO_5 from '@/src/app/images/DSC_7875.jpg';
import FOTO_6 from '@/src/app/images/DSC02285.jpg';
import FOTO_7 from '@/src/app/images/IMG_7027.jpg';
import FOTO_8 from '@/src/app/images/DSC_7224.jpg';
import FOTO_9 from '@/src/app/images/dodo1.jpg';
import Projeto_nana from '@/src/app/images/projeto-nana.jpg';
import Projeto_ogun from '@/src/app/images/projeto-ogun-3.jpg';
import Projeto_yewa from '@/src/app/images/projeto-yewa.jpg';
import Projeto_yansa from '@/src/app/images/projeto-yansa-2.jpg';

import { CarouselType, MenuWithSubmenuType } from '../types';

export const items: CarouselType[] = [
    {
        imageUrl: FOTO_3,
        name: 'Festa',
    },
    {
        imageUrl: FOTO_8,
        name: 'Festa',
    },
    {
        imageUrl: FOTO_2,
        name: 'Festa',
    },
    {
        imageUrl: FOTO_9,
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

export const Submenu: MenuWithSubmenuType[] = [
    {
        link: '#o_terreiro',
        title: 'O Terreiro',
        outPage: false,
    },
    {
        link: '#people',
        title: 'Quem somos',
        outPage: false,
    },
    {
        link: '#projetos',
        title: 'Projetos',
        outPage: false,
    },
    {
        link: '#redes_sociais',
        title: 'Redes sociais',
        outPage: false,
    },
    {
        link: 'https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios.',
        title: 'Agende seu jogo',
        outPage: true,
    },
    {
        link: 'https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1.%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais.',
        title: 'Contato',
        outPage: true,
    },
];

export const projects = [
    {
        image: Projeto_nana,
        title: 'Projeto 1',
        description: 'Descrição do Projeto 1',
    },
    {
        image: Projeto_yansa,
        title: 'Projeto 2',
        description: 'Descrição do Projeto 2',
    },
    {
        image: Projeto_yewa,
        title: 'Projeto 3',
        description: 'Descrição do Projeto 3',
    },
    {
        image: Projeto_ogun,
        title: 'Projeto 4',
        description: 'Descrição do Projeto 4',
    },
];
