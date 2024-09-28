export function FollowUs() {
    return (
        <section className="backgroundFollowUs my-10">
            <div className="container mx-auto">
                <header className="flex flex-col justify-center items-center text-center py-5 ">
                    <h2 className="text-[var(--white)] uppercase">
                        Confira{' '}
                        <span className="text-[var(--brown-300)]">
                            nosso canal!
                        </span>
                    </h2>
                    <p className="text-[var(--white)] py-5 text-[1.15rem] font-semibold w-1/2">
                        Em nosso{' '}
                        <a
                            href="https://www.youtube.com/@OTerreirodeJagunOficial"
                            target="_blank"
                            className="relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--brown-300)] after:transition-all after:duration-500 hover:after:w-full"
                        >
                            {' '}
                            canal do youtube
                        </a>{' '}
                        temos músicas, lives, comidas de santo (seguindo nossa
                        tradição), além de exclusividades por lá!
                    </p>
                </header>

                <div className="flex justify-between pb-10 sm:flex-row flex-col-reverse sm:gap-2 gap-4">
                    <iframe
                        src="https://www.youtube.com/embed/YsmO0opH4mg"
                        title="WebClipe da última música lançada."
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="sm:w-1/2 w-full sm:h-[20rem] h-[18rem]"
                    />
                    <iframe
                        src="https://www.youtube.com/embed/nDdSfBtG7jU"
                        title="Vídeo sobre comidas de candomblé com base em minha linhagem"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="sm:w-1/2 w-full sm:h-[20rem] h-[18rem]"
                    />
                </div>
                <div id="people" />
            </div>
        </section>
    );
}
