import React from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { MenuWithSubmenuTypeResponse, MenuWithSubmenuType } from '../../types';
import { useTheme } from '../../context/ThemeProvider';

export function MenuWithSubmenu({ data }: MenuWithSubmenuTypeResponse) {
    const { open, setOpen } = useTheme();

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="text-2xl p-2 focus:outline-none"
            >
                <span className="transition duration-1000 ease-in-out">
                    {open ? (
                        <RxCross2 size={25} />
                    ) : (
                        <RxHamburgerMenu size={25} />
                    )}
                </span>
            </button>

            {open && open && (
                <div
                    className={`absolute left-0 mt-2 w-48 bg-[var(--green-300)] rounded-md shadowMenu  ${
                        open
                            ? 'transform scale-100 opacity-100'
                            : 'transform scale-0 opacity-0'
                    }`}
                >
                    <ul className="py-1">
                        {data !== undefined &&
                            data.map(
                                (item: MenuWithSubmenuType, index: number) => (
                                    <li className="px-4 py-2" key={`${index}`}>
                                        <a
                                            href={item.link}
                                            className="text-[1.15rem] font-semibold"
                                            target={
                                                item.outPage ? '_blank' : ''
                                            }
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            )}
                    </ul>
                </div>
            )}
        </div>
    );
}
