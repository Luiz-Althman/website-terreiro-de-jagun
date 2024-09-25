'use client';

import Project_1 from '@/src/app/images/DSC01195.jpg';
import React from 'react';
import { ProjectCard } from './ProjectsComponent';

export function Projects() {
    const projects = [
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

    return (
        <div className="container">
            <header className="flex flex-col text-center w-full justify-center my-5">
                <h2 className="uppercase">
                    <span className="text-[var(--green-100)]">NOSSOS</span>{' '}
                    PROJETOS
                </h2>
                <h4 className="py-5 text-[1.15rem] font-semibold">
                    Alguns dos nosso projetos pelo centro cultural{' '}
                    <a
                        href="/centro-cultural-opanije"
                        className="text-[var(--green-100)] relative inline-block hover:opacity-50 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--green-100)] after:transition-all after:duration-500 hover:after:w-full"
                    >
                        Opanije
                    </a>
                </h4>
            </header>
            <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
}
