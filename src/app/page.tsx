import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { OneSection } from './components/OneSection';

export default function App() {
    return (
        <div className="text-[var(--white)]">
            <Header />
            <div className="container mx-auto">
                <OneSection />
                <OneSection />
            </div>
            <Footer />
        </div>
    );
}
