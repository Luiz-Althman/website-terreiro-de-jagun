'use client';
import Image from 'next/image';

import FESTA from '@/src/app/images/DSC01155.jpg';
import FOTO_PAI_MAE_CIDALIA from '@/src/app/images/DSC_8998.jpg';
import Terreiro_1 from '@/src/app/images/DSC_3337.jpg';

export function About() {
    return (
        <div className="background my-10">
            <div className="fadeImage">
                <div id="o_terreiro" />

                <div className="container mx-auto py-5">
                    <header className="flex justify-center py-5">
                        <h2 className="uppercase text-[var(--yellow)]">
                            O Terreiro
                        </h2>
                    </header>

                    <div className="flex items-center mt-5">
                        <p className="text-[var(--white)] w-1/2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores provident dolorum veniam dignissimos
                            tenetur, nihil fugiat ad iste necessitatibus quis,
                            nostrum magni ullam sunt temporibus. Enim suscipit
                            placeat dignissimos repellat!
                        </p>
                        <Image
                            src={FOTO_PAI_MAE_CIDALIA}
                            alt=""
                            width={0}
                            height={150}
                            style={{ width: '50%' }}
                        />
                    </div>
                    <div className="flex my-10 items-center">
                        <Image
                            src={FESTA}
                            alt=""
                            width={0}
                            height={150}
                            style={{ width: '50%' }}
                        />
                        <p className="text-[var(--white)] w-1/2 text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores provident dolorum veniam dignissimos
                            tenetur, nihil fugiat ad iste necessitatibus quis,
                            nostrum magni ullam sunt temporibus. Enim suscipit
                            placeat dignissimos repellat!
                        </p>
                    </div>
                    <div className="flex items-center pb-5">
                        <p className="text-[var(--white)] w-1/2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores provident dolorum veniam dignissimos
                            tenetur, nihil fugiat ad iste necessitatibus quis,
                            nostrum magni ullam sunt temporibus. Enim suscipit
                            placeat dignissimos repellat!
                        </p>
                        <Image
                            src={Terreiro_1}
                            alt=""
                            width={0}
                            height={150}
                            style={{ width: '50%' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
