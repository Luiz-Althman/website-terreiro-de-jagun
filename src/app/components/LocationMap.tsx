'use client';
/* eslint-disable @next/next/no-img-element */
import Foto_entrada from '@/src/app/images/DSC01639.jpg';

export function LocationMap() {
    return (
        <div className="container mx-auto py-5">
            <header className="flex flex-col items-center justify-center mb-6">
                <h2>Localização</h2>
                <p>
                    Nosso terreiro está localizado na cidade de Franco da Rocha,
                    SP.
                </p>
            </header>
            <div className="flex justify-between pb-10 sm:flex-row flex-col sm:gap-2 gap-4">
                <img
                    src={Foto_entrada.src}
                    alt=""
                    className="sm:w-1/2 w-full"
                />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.2920862220034!2d-46.66511038925857!3d-23.27333199869288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee8a269947fdf%3A0x2f6cd91ce6eaa6a6!2zSWzDqSBBaXnDqCBBamdiw7Jyw7IgSWdpIEFzw6ggSmFndW4!5e0!3m2!1spt-BR!2sbr!4v1726849613524!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="sm:w-1/2 sm:h-[25rem] h-[18rem] w-full"
                    // referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}
