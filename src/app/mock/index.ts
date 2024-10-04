/* eslint-disable @next/next/no-img-element */

import FOTO_2 from '@/src/app/images/oxum-iroko.jpg';
import FOTO_5 from '@/src/app/images/DSC_7875-min.jpg';
import Projeto_nana from '@/src/app/images/projeto-nana.jpg';
import Projeto_ogun from '@/src/app/images/projeto-ogun-3.jpg';
import Projeto_yewa from '@/src/app/images/projeto-yewa.jpg';
import Projeto_yansa from '@/src/app/images/projeto-yansa-2.jpg';
import { FaMusic, FaCamera, FaBowlFood, FaBook } from 'react-icons/fa6';

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

export const cards = [
    {
        icon: FaMusic,
        title: 'Músicas autorais',
        number: '01',
        paragraph:
            'Músicas compostas e produzidas pelo Babalorixá Roberto Xáxa',
    },
    {
        icon: FaCamera,
        title: 'Lives gravadas',
        number: '02',
        paragraph:
            'Lives de bate papo feitas e gravadas pelo nosso Facebook e são posteriormente postadas em nosso canal.',
        className: 'mt-8',
    },
    {
        icon: FaBowlFood,
        title: 'Comidas de santo',
        number: '03',
        paragraph:
            'Apresentando a forma a qual preparamos, com passo a passo, as comidas de santo do terreiro seguindo nossa tradição.',
    },
    {
        icon: FaBook,
        title: 'Poemas em vídeo',
        number: '04',
        paragraph:
            'Poemas de Orixás compostos pelo Babalorixá Roberto Xáxa,  gravados em um webclipe onde o intuito é de divulgar nossa religião, nossa cultura e nossa arte.',
        className: 'mt-8',
    },
];
