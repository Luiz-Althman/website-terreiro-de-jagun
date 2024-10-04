import React from 'react';

import Card from './Card';
import { cards } from '../../mock';

export default function Cards() {
    return (
        <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-6 gap-2 pt-5 pb-10 ">
            {cards.map((item, index) => (
                <React.Fragment key={`ids${index}`}>
                    <Card
                        icon={item.icon}
                        className={item.className}
                        title={item.title}
                        number={item.number}
                        paragraph={item.paragraph}
                    />
                </React.Fragment>
            ))}
        </div>
    );
}
