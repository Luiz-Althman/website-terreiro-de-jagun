'use client';

/* eslint-disable @next/next/no-img-element */

import FESTA from '@/src/app/images/DSC_2905-min.jpg';
import FOTO_PAI_MAE_CIDALIA from '@/src/app/images/DSC_8998-min.jpg';
import Terreiro_1 from '@/src/app/images/DSC_3337-min.jpg';
import Image from 'next/image';

export function About() {
    return (
        <section className="background my-10">
            <div className="bg-[#000] bg-opacity-40">
                <div className="container py-5 ">
                    <header className="flex justify-center py-5">
                        <h2 className="uppercase text-[var(--white)]">
                            Sobre{' '}
                            <span className="text-[var(--green-100)]">
                                o Terreiro
                            </span>
                        </h2>
                    </header>
                    <div className="flex flex-col gap-4 ">
                        <div className="flex items-center justify-between mt-5 sm:flex-row flex-col-reverse gap-0 sm:gap-4 ">
                            <p className="sm:w-1/2 w-full sm:py-0 py-5 text-[var(--white)] ">
                                A relação entre o filho(a) e sua Mãe ou Pai de
                                Santo, por vezes, transcende a espiritualidade,
                                se confundindo e se aproximando de uma relação
                                biológica, não sendo possível explicá-la, mas
                                apenas senti-la. A foto em tela representa
                                alguns dizeres no tratamento dispensado ao
                                Babalorixá Roberto Xáxa, por sua Iyálorixá. São
                                momentos como este, eternizados através de uma
                                fotografia que ficam para a posteridade, bem
                                como, na memoria de quem os viveu.
                            </p>
                            <Image
                                src={FOTO_PAI_MAE_CIDALIA.src}
                                alt=""
                                width={560}
                                height={375}
                                className="sm:w-[45%] w-full rounded-lg"
                                priority={true}
                            />
                        </div>
                        <div className="flex items-center justify-between sm:flex-row flex-col gap-0 sm:gap-4">
                            <Image
                                src={FESTA.src}
                                alt=""
                                width={560}
                                height={375}
                                className="sm:w-[45%] w-full rounded-lg"
                            />
                            <p className="w-1/2 sm:text-left sm:w-1/2 w-full sm:py-0 py-5 text-[var(--white)]">
                                Os festejos realizados durante o ano litúrgico,
                                seguindo o calendário estabelecido pela direção
                                do Terreiro, mantém o mesmo ritmo, expectativa,
                                dedicação e presteza de todos os filhos da Casa
                                de Candomblé, não havendo distinção entre esta
                                ou aquela festividade, sendo todas objeto de
                                apreço, fé e irmandade de todos os integrantes
                                da comunidade religiosa. Esse tipo de
                                comportamento deveria ser o principio basilar,
                                de todas as Casas de Axé.
                            </p>
                        </div>
                        <div className="flex items-center justify-between pb-5 sm:flex-row flex-col-reverse gap-0 sm:gap-4">
                            <p className=" w-full sm:py-0 py-5 text-[var(--white)]">
                                O Terreiro de Candomblé, tem o escopo de ser o
                                refúgio, o acolhimento, ou seja, um ambiente
                                onde nos sintamos bem. A Religião tem o
                                propósito de nos religar com o sagrado, e não
                                nos afastar. O convívio dentro do espaço
                                litúrgico, necessita ser harmônico, e para
                                tanto, é necessário que se respeitem. Devemos
                                ter zelo pelo Terreiro, como se fosse nossa
                                própria casa. No Terreiro não há espaço para
                                vaidades e egocentrismo, pois as divindades que
                                cultuamos, andam e dançam descalças entre nós,
                                demonstrando toda a sua essência. Se um espaço
                                assim, não lhe apetece, nem adentre.
                            </p>
                            <img
                                src={Terreiro_1.src}
                                alt=""
                                className="sm:w-[45%] w-full rounded-lg"
                                loading="lazy"
                            />
                            <div id="projetos" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
