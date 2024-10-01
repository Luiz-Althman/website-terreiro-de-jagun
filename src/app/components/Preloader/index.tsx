import React from 'react';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-solid border-[var(--green-300)] border-t-transparent" />
            <div className="flex items-center text-[var(--green-300)]">
                <p className="pt-4">Aguarde</p>
                <span
                    className="dot-bounce ml-1"
                    style={{ animationDelay: '0ms' }}
                >
                    .
                </span>
                <span
                    className="dot-bounce"
                    style={{ animationDelay: '200ms' }}
                >
                    .
                </span>
                <span
                    className="dot-bounce"
                    style={{ animationDelay: '400ms' }}
                >
                    .
                </span>
            </div>
        </div>
    );
};

export default Preloader;
