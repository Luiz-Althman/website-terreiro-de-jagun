import React from 'react';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { MenuWithSubmenuTypeResponse, MenuWithSubmenuType } from '../../types';

export function MenuWithSubmenu({ data }: MenuWithSubmenuTypeResponse) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="text-2xl p-2 focus:outline-none"
            >
                <span className="transition duration-1000 ease-in-out">
                    {isOpen ? (
                        <RxCross2 size={25} />
                    ) : (
                        <RxHamburgerMenu size={25} />
                    )}
                </span>
            </button>

            {isOpen && isOpen && (
                <div
                    className={`absolute right-0 mt-2 w-48 bg-[var(--green-300)] rounded-md shadow-lg border border-[var(--brown-100)] ${
                        isOpen
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
                                            className="text-[1.15rem] font-semibold "
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
