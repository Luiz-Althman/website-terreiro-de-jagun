'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export const Carousel = ({ data }: any) => {
    return (
        <div className="relative mt-6">
            <Slider {...settings}>
                {data !== undefined &&
                    data.map((item: any, index: any) => (
                        <div
                            key={`idx${index}`}
                            className="flex flex-col relative mr-5"
                        >
                            <a href={item.link}>
                                <img
                                    src={item.imageUrl.src}
                                    alt={item.name}
                                    className="w-full h-[25rem] object-cover"
                                />
                            </a>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};
