import { StaticImageData } from 'next/image';

export interface CarouselType {
    imageUrl: StaticImageData;
    name: string;
}

export interface CarouselTypeArray {
    data: CarouselType[];
}

export interface MenuWithSubmenuType {
    link: string;
    title: string;
    outPage?: boolean;
}
export interface MenuWithSubmenuTypeResponse {
    data: MenuWithSubmenuType[];
}

export interface ProjectCardType {
    image: StaticImageData;
    title: string;
    description: string;
}
