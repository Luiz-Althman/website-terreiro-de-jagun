import Pai from '@/src/app/images/foto-pai.jpg';
import Nathalya from '@/src/app/images/foto-nathalya.jpg';
import Mae from '@/src/app/images/foto-mae.jpg';
import Image from 'next/image';

export default function People() {
    return (
        <section className="container">
            <div className="flex flex-col justify-center">
                <header className="flex flex-col justify-center">
                    <h2 className="text-center uppercase">
                        <span className="text-[var(--green-100)]">
                            Lideranças
                        </span>{' '}
                        do terreiro
                    </h2>
                    <p className="text-center py-5 text-[1.15rem] font-semibold">
                        Uma breve descrição dos(as) príncipais lideres do{' '}
                        <a
                            href="https://www.instagram.com/terreirodejagun/"
                            target="_blank"
                            className="text-[var(--green-100)] relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--green-100)] after:transition-all after:duration-500 hover:after:w-full"
                        >
                            Terreiro de Jagun
                        </a>
                    </p>
                </header>
                <div className="flex flex-col w-full justify-between gap-4 mt-5">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                            <h2 className="sm:hidden flex">
                                <span className="text-[var(--green-100)] pr-1">
                                    Babalorixá
                                </span>{' '}
                                Roberto Xáxa
                            </h2>
                            <Image
                                src={Pai.src}
                                width={560}
                                height={375}
                                className="rounded-lg sm:w-1/2 w-full"
                                alt="Foto do Babalorixá Roberto Xáxa"
                            />
                            <div className="">
                                <h2 className="sm:flex hidden">
                                    <span className="text-[var(--green-100)] pr-1">
                                        Babalorixá
                                    </span>
                                    Roberto Xáxa
                                </h2>

                                <p>
                                    <span className="font-bold">
                                        Roberto Xáxa
                                    </span>
                                    , Babalorixá do Ile Aiye Ajagboro Igi Asé
                                    Jagun, com mais de 40 anos de iniciado no
                                    Candomblé, poeta e compositor de samba, mpb
                                    e músicas sacras, voltadas a cultura
                                    afro-brasileira. Filho da lendária Mãe
                                    Cidália de Iroko, reconhecida como a
                                    Enciclopédia Candomblé no Brasil, filha
                                    dileta de Mãe Menininha do Gantois. Roberto
                                    Xáxa leva o legado de sua Iyalorixá em todos
                                    os aspectos, desde a preservação daquilo que
                                    foi deixado de ensinamento pelos seus
                                    ancestrais, como valores morais e éticos na
                                    condução do Terreiro de Candomblé.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-4 sm:mt-0 mt-5">
                            <h2 className="sm:hidden flex">
                                <span className="text-[var(--green-100)] pr-1">
                                    Iya N’Lasé
                                </span>{' '}
                                Nathalya
                            </h2>

                            <Image
                                src={Nathalya.src}
                                width={560}
                                height={375}
                                className="sm:w-1/2 w-full rounded-lg"
                                alt="Foto da Iya N’Lasé Nathalya"
                            />
                            <div className="">
                                <h2 className="sm:flex hidden">
                                    <span className="text-[var(--green-100)] pr-1">
                                        Iya N’Lasé
                                    </span>{' '}
                                    Nathalya
                                </h2>
                                <p>
                                    <span className="font-bold">
                                        Iyá Lasé Nathalya de Oxum
                                    </span>
                                    , a Mãe do Axé. Com 23 anos de iniciada por
                                    mãe Cidália de Iroko, é a ela que caberá no
                                    futuro preservar todo o legado de sua
                                    Iyalorixá, perpetuado pelo seu pai biológico
                                    e Babalorixá, Roberto Xáxa. Desde a tenra
                                    idade, sempre mostrou-se aplicada ao
                                    aprendizado, bem como, o respeito aos mais
                                    velhos e à todos os filhos do Terreiro,
                                    conquistando o respeito de todos
                                    independente da idade de cada um. É a Iyá
                                    Lasé a sucessora natural dentro da linhagem
                                    de um Terreiro de Candomblé.
                                </p>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col flex-row-reverse justify-center items-center gap-4 sm:mt-0 mt-5">
                            <h2 className="sm:hidden flex">
                                <span className="text-[var(--green-100)] pr-1">
                                    Iya Egbé
                                </span>{' '}
                                Luciane
                            </h2>

                            <Image
                                src={Mae.src}
                                width={560}
                                height={375}
                                className="sm:w-1/2 w-full rounded-lg"
                                alt="Foto da Iya Egbé Luciane"
                            />
                            <div className="">
                                <h2 className="sm:flex hidden">
                                    <span className="text-[var(--green-100)] pr-1">
                                        Iya Egbé{' '}
                                    </span>
                                    Luciane
                                </h2>
                                <p>
                                    <span className="font-bold">
                                        Iyá Egbé Luciane de Yewá
                                    </span>
                                    , a Mãe da Sociedade do Terreiro de Jagun.
                                    Com mais de 30 anos de iniciada no
                                    Candomblé, pelas mãos do saudoso Babalorixá
                                    Pércio de Xango, é a Iyá Egbé quem
                                    recepciona, organiza, além de auxiliar o
                                    Babalorixá nas funções litúrgicas. Cabe a
                                    Iyá Egbé orientar a comunidade do Terreiro,
                                    acerca das atribuições e responsabilidades
                                    de cada um, para um melhor funcionamento de
                                    toda Egbé, sendo de papel fundamental para a
                                    manutenção da ordem e, do bom
                                    andamento do Axé.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
