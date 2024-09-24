import Persona from '@/src/app/images/DSC_7171.jpg';

export default function People() {
    return (
        <div className="container">
            <div className="flex flex-col justify-center">
                <header className="flex justify-center py-5">
                    <h1 className="text-center">
                        Conheça alguns membros do terreiro
                    </h1>
                </header>
                <div className="flex flex-col w-full justify-between gap-4 mt-5">
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col">
                            <img src={Persona.src} className=" rounded-lg" />
                            <h3>Babalorixá Roberto Xáxa</h3>
                        </div>
                        <div className="flex flex-col">
                            <img src={Persona.src} className=" rounded-lg" />
                            <h3>Yalase Nathalya</h3>
                        </div>
                        <div className="flex flex-col">
                            <img src={Persona.src} className=" rounded-lg" />
                            <h3>Mãe Luciane</h3>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col">
                            <img src={Persona.src} className=" rounded-lg" />
                            <h3>Apa Otun Luiz</h3>
                        </div>
                        <div className="flex flex-col">
                            <img src={Persona.src} className=" rounded-lg" />
                            <h3>Douglas</h3>
                        </div>
                        <div className="flex flex-col">
                            <img src={Persona.src} className=" rounded-lg" />
                            <h3>Kimberly</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
