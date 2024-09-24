export function FollowUs() {
    return (
        <div className="backgroundFollowUs my-10">
            <div className="fadeImage">
                <div className="container mx-auto py-5">
                    <header className="flex justify-center py-5">
                        <h2 className="text-[var(--white)]">
                            Confira nossos vídeos no youtube!
                        </h2>
                    </header>
                    <div id="people" />

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
                            title="Vídeo sobre comidas de camdomblé com base em minha linhagem"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="sm:w-1/2 w-full sm:h-[20rem] h-[18rem]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
