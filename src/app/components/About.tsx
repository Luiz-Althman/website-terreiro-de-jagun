'use client';

/* eslint-disable @next/next/no-img-element */

import FESTA from '@/src/app/images/DSC01155.jpg';
import FOTO_PAI_MAE_CIDALIA from '@/src/app/images/DSC_8998.jpg';
import Terreiro_1 from '@/src/app/images/DSC_3337.jpg';

export function About() {
    return (
        <div className="background my-10">
            <div className="fadeImage">
                <div className="container py-5">
                    <header className="flex justify-center py-5">
                        <h2 className="uppercase text-[var(--white)]">
                            O Terreiro
                        </h2>
                    </header>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center mt-5 sm:flex-row flex-col-reverse">
                            <p className="text-[var(--white)] sm:w-1/2 w-full sm:py-0 py-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores provident dolorum
                                veniam dignissimos tenetur, nihil fugiat ad iste
                                necessitatibus quis, nostrum magni ullam sunt
                                temporibus. Enim suscipit placeat dignissimos
                                repellat!
                            </p>
                            <img
                                src={FOTO_PAI_MAE_CIDALIA.src}
                                alt=""
                                className="sm:w-1/2 w-full rounded-lg"
                            />
                        </div>
                        <div className="flex items-center sm:flex-row flex-col">
                            <img
                                src={FESTA.src}
                                alt=""
                                className="sm:w-1/2 w-full rounded-lg"
                            />
                            <p className="text-[var(--white)] w-1/2 sm:text-right sm:w-1/2 w-full sm:py-0 py-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores provident dolorum
                                veniam dignissimos tenetur, nihil fugiat ad iste
                                necessitatibus quis, nostrum magni ullam sunt
                                temporibus. Enim suscipit placeat dignissimos
                                repellat!
                            </p>
                        </div>
                        <div className="flex items-center pb-5 sm:flex-row flex-col-reverse">
                            <p className="text-[var(--white)] w-1/2 sm:w-1/2 w-full sm:py-0 py-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores provident dolorum
                                veniam dignissimos tenetur, nihil fugiat ad iste
                                necessitatibus quis, nostrum magni ullam sunt
                                temporibus. Enim suscipit placeat dignissimos
                                repellat!
                            </p>
                            <img
                                src={Terreiro_1.src}
                                alt=""
                                className="sm:w-1/2 w-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
