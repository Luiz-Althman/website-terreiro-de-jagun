import React from 'react';
import { ProjectCardType } from '../../types';

export function ProjectCard({ image, title, description }: ProjectCardType) {
    return (
        <div className="relative group">
            <img
                src={image.src}
                alt={title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300"
            />
            <div className="absolute m-5 inset-0 flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-90 opacity-90 transition-opacity duration-300 bg-[var(--white)] bg-opacity-70 p-5">
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}
