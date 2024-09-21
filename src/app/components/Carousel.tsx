'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { CarouselTypeArray, CarouselType } from './Introduction';

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
                slidesToShow: 1,
                variableWidth: true,
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
                                src={item.imageUrl}
                                alt={item.name}
                                className="h-[25rem] object-cover"
                                fill
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};
