'use client';

import React from 'react';
import { ProjectCard } from './ProjectsComponent';
import { projects } from '../mock';

export function Projects() {
    return (
        <section className="container">
            <header className="flex flex-col text-center w-full justify-center my-5">
                <h2 className="uppercase">
                    <span className="text-[var(--green-100)]">NOSSOS</span>{' '}
                    PROJETOS
                </h2>
                <h4 className="py-5 text-[1.15rem] font-semibold">
                    Alguns dos nosso projetos pelo{' '}
                    <a
                        href="https://www.instagram.com/centrocultural.opanije/"
                        className="text-[var(--green-100)] relative inline-block hover:opacity-50 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--green-100)] after:transition-all after:duration-500 hover:after:w-full"
                    >
                        Centro Cultural Opanije
                    </a>
                </h4>
            </header>

            <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}
