'use client';

/* eslint-disable @next/next/no-img-element */

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselTypeArray, CarouselType } from '../../types';
import Image from 'next/image';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 1,
                variableWidth: false,
                slidesToScroll: 1,
            },
        },
    ],
};

export const Carousel = ({ data }: CarouselTypeArray) => {
    return (
        <div className="relative mt-6">
            <Slider {...settings}>
                {data !== undefined &&
                    data.map((item: CarouselType, index: number) => (
                        <div
                            key={`idx${index}`}
                            className="flex flex-col relative mr-5"
                        >
                            <Image
                                src={item.imageUrl.src}
                                alt={item.name}
                                width={1120}
                                height={400}
                                className="w-full sm:h-[25rem] h-[10rem] object-cover"
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};
