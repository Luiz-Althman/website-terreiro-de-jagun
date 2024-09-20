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
                    <div className="flex justify-between pb-10">
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/YsmO0opH4mg"
                            title="WebClipe da última música lançada."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        <iframe
                            width="500"
                            height="315"
                            src="https://www.youtube.com/embed/nDdSfBtG7jU"
                            title="Vídeo sobre comidas de camdomblé com base em minha linhagem"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
