import React from 'react';
import { ProjectCardType } from '../../types';
import Image from 'next/image';

export function ProjectCard({ image, title, description }: ProjectCardType) {
    return (
        <div className="relative group">
            <Image
                src={image.src}
                alt={title}
                width={550}
                height={415}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300"
            />
            <div className="absolute m-3 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-[var(--white)] bg-opacity-70 p-5">
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}
