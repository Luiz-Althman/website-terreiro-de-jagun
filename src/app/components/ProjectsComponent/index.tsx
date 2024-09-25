import React from 'react';
import { ProjectCardType } from '../../types';

export function ProjectCard({ image, title, description }: ProjectCardType) {
    return (
        <div className="relative group">
            <img
                src={image.src}
                alt={title}
                className="w-full aspect-[4/3]  object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[var(--white)] bg-opacity-70 p-4">
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}
