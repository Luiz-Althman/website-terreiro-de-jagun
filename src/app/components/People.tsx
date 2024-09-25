import Persona from '@/src/app/images/DSC_7171.jpg';

export default function People() {
    return (
        <section className="container">
            <div className="flex flex-col justify-center">
                <header className="flex justify-center sm:py-5">
                    <h1 className="text-center uppercase">
                        <span className="text-[var(--green-100)]">
                            Lideranças
                        </span>{' '}
                        do terreiro
                    </h1>
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
                            <img
                                src={Persona.src}
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
                                <h4 className="text-[1.15rem] font-semibold uppercase">
                                    Líder religioso
                                </h4>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Tenetur harum nulla dolore
                                    et. Quo dolores explicabo doloremque
                                    voluptatem maiores odit, deleniti dolorem,
                                    aspernatur necessitatibus illum quidem
                                    tenetur ab quaerat cumque.
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

                            <img
                                src={Persona.src}
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
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Tenetur harum nulla dolore
                                    et. Quo dolores explicabo doloremque
                                    voluptatem maiores odit, deleniti dolorem,
                                    aspernatur necessitatibus illum quidem
                                    tenetur ab quaerat cumque.
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

                            <img
                                src={Persona.src}
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
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Tenetur harum nulla dolore
                                    et. Quo dolores explicabo doloremque
                                    voluptatem maiores odit, deleniti dolorem,
                                    aspernatur necessitatibus illum quidem
                                    tenetur ab quaerat cumque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
