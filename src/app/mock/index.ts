/* eslint-disable @next/next/no-img-element */

import FOTO_2 from '@/src/app/images/oxum-iroko.jpg';
// import FOTO from '@/src/app/images/DSC_3061-min.jpg';
// import FOTO_3 from '@/src/app/images/DSC_3061-min.jpg';
import FOTO_5 from '@/src/app/images/DSC_7875-min.jpg';
// import FOTO_8 from '@/src/app/images/DSC_7224-min.jpg';
import Projeto_nana from '@/src/app/images/projeto-nana.jpg';
import Projeto_ogun from '@/src/app/images/projeto-ogun-3.jpg';
import Projeto_yewa from '@/src/app/images/projeto-yewa.jpg';
import Projeto_yansa from '@/src/app/images/projeto-yansa-2.jpg';

import { CarouselType, MenuWithSubmenuType } from '../types';

export const items: CarouselType[] = [
    {
        imageUrl: FOTO_2,
        name: 'Festa',
    },
    {
        imageUrl: FOTO_5,
        name: 'Festa',
    },
    // {
    //     imageUrl: FOTO_3,
    //     name: 'Festa',
    // },
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
        title: 'CANTO DA CRIAÇÃO',
        description:
            'Com o objetivo de propagar a Cosmogonia Yorubá, através de historias perpetuadas pela oralidade, apresentando a criação dos seres humanos por uma ótica diversa da cultura judaico/cristã, de maneira lúdica e de fácil compreensão de todos.',
    },
    {
        image: Projeto_yansa,
        title: 'PROJETO YANSAN',
        description:
            'Com o intuito de divulgar, desmistificar e aproximar pessoas que tenham qualquer tipo de intolerância com o Candomblé, bem como, romantizar em forma de ensaios com este, os traços características das divindades, neste caso Yansan, Senhora da Tarde e dos ventos fortes.',
    },
    {
        image: Projeto_yewa,
        title: 'CANTO DO RIO',
        description:
            'Este trabalho é a primeira música composta pelo Babalorixá Roberto Xáxa para série SAGA DAS AIYABAS. Traz no enredo da música a divindade Yewa e sua dualidade ora mulher, ora serpente.',
    },
    {
        image: Projeto_ogun,
        title: 'PROJETO OGUN',
        description:
            'A finalidade do projeto, neste caso, é demonstrar como essa divindade está em nosso cotidiano e em nossos corpos. Ao passo que Ogun é o senhor do Ferro, sua essência corre nas veias de todos nós, eis que o Ferro é um mineral essencial para nossa existência.',
    },
];
