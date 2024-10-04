import { ComponentProps, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = ComponentProps<'div'> & {
    icon: ElementType;
    title: string;
    number: string;
    paragraph: string;
};

export default function Card({
    icon: Icon,
    title,
    number,
    paragraph,
    className,
    ...props
}: CardProps) {
    return (
        <div className={twMerge('relative sm:w-1/4 ', className)} {...props}>
            <span className="absolute -top-24 left-1/2  transform -translate-x-1/2 -translate-y-1/2 animate-bounce-up-down w-[80px] h-[80px] rounded-[50%] border border-[1px] border-[var(--white)] border-dashed flex justify-center items-center">
                {<Icon color="var(--white)" size={30} />}
            </span>

            <div className="bg-[var(--white)] py-12 px-7 flex flex-col items-center rounded-lg transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px] hover:shadow-[0_50px_80px_rgba(136,180,71,0.25),0_12px_12px_rgba(0,0,0,0.1)] hover:shadow-lg hover:bg-[var(--green-100)]">
                <div className="text-center">
                    <div className="text-center relative flex flex-col">
                        <p className="font-extrabold">{title}</p>
                        <p className="absolute bottom-[-20px] left-0 right-0 text-[3rem] font-bold opacity-20 text-[var(--black)]">
                            {number}
                        </p>
                    </div>
                    <p className="text-sm pt-2">{paragraph}</p>
                </div>
            </div>
        </div>
    );
}
