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
import Project_1 from '@/src/app/images/DSC01195.jpg';
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
    },
    {
        link: '#people',
        title: 'Quem somos',
    },
    {
        link: '#projetos',
        title: 'Projetos',
    },
    // {
    //     link: '/reinauguracao',
    //     title: 'Reinauguração',
    // },
    {
        link: 'https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20Gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios.',
        title: 'Agende seu jogo',
    },
    {
        link: 'mailto:terreirodejagun@gmail.com',
        title: 'Contato',
    },
];

export const projects = [
    {
        image: Project_1, // Substitua pela URL da sua imagem
        title: 'Projeto 1',
        description: 'Descrição do Projeto 1',
    },
    {
        image: Project_1, // Substitua pela URL da sua imagem
        title: 'Projeto 2',
        description: 'Descrição do Projeto 2',
    },
    {
        image: Project_1, // Substitua pela URL da sua imagem
        title: 'Projeto 3',
        description: 'Descrição do Projeto 3',
    },
    {
        image: Project_1, // Substitua pela URL da sua imagem
        title: 'Projeto 4',
        description: 'Descrição do Projeto 4',
    },
    // Adicione mais projetos conforme necessário
];
