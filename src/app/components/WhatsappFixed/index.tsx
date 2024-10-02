/* eslint-disable @next/next/no-img-element */

import Whatsapp from '@/src/app/images/WhatsApp.png';

export function WhatsappFixed() {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <a
                href="https://api.whatsapp.com/send?phone=5511942584682&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais."
                target="_blank"
            >
                <img
                    src={Whatsapp.src}
                    className="vibrating-icon sm:w-[3.75rem] sm:h-[3.75rem] w-[3.5rem] h-[3.5rem]"
                    color="var(--green-300)"
                    alt="WhatsApp button"
                />
            </a>
        </div>
    );
}
