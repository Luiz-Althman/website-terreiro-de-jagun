'use client';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { About } from './components/About';
// import { LocationMap } from './components/LocationMap';
import FollowUs from './components/FollowUs/index';
import People from './components/People';
import { Projects } from './components/Projects';
import { useTheme } from './context/ThemeProvider';
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';

export default function App() {
    const [loading, setLoading] = useState(true);
    const { setOpen } = useTheme();

    useEffect(() => {
        const handlePageLoad = () => {
            // Função para verificar o carregamento de todas as imagens
            const checkImagesLoaded = () => {
                const images = Array.from(document.images); // Coleta todas as imagens do documento
                const imagePromises = images.map((img) => {
                    // Retorna uma promise para cada imagem
                    return new Promise<void>((resolve) => {
                        if (img.complete) {
                            resolve(); // Se a imagem já estiver carregada
                        } else {
                            img.onload = () => resolve(); // Se não, espera pelo carregamento
                            img.onerror = () => resolve(); // Lida com erros de carregamento
                        }
                    });
                });
                return Promise.all(imagePromises); // Aguarda o carregamento de todas as imagens
            };

            checkImagesLoaded().then(() => {
                setLoading(false); // Desabilita o preloader somente após todas as imagens e textos estarem carregados
            });
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <div>
                    <Header />
                    <div onClick={handleClose}>
                        <Introduction />
                        <About />
                        <Projects />
                        <FollowUs />
                        <People />
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
}
