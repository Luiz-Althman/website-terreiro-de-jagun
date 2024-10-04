import Cards from '../Cards';

export default function FollowUs() {
    return (
        <section className="backgroundFollowUs my-10">
            <div className="bg-[#000] bg-opacity-40">
                <div className="container">
                    <header className="flex flex-col justify-center items-center text-center pt-5 pb-24">
                        <h2 className="text-[var(--white)] uppercase">
                            Confira{' '}
                            <span className="text-[var(--green-100)]">
                                nosso canal!
                            </span>
                        </h2>
                        <p className="text-[var(--white)] py-5 text-[1.15rem] font-semibold w-full sm:w-1/2">
                            Em nosso{' '}
                            <a
                                href="https://www.youtube.com/@OTerreirodeJagunOficial"
                                target="_blank"
                                className="relative text-[var(--green-100)] inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--green-100)] after:transition-all after:duration-500 hover:after:w-full"
                            >
                                {' '}
                                canal do youtube
                            </a>{' '}
                            você irá encontrar...
                        </p>
                    </header>
                    <Cards />
                    <div id="people" />
                </div>
            </div>
        </section>
    );
}
