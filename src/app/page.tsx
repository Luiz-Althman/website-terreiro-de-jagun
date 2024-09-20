'use client';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { About } from './components/About';
import { LocationMap } from './components/LocationMap';
import { FollowUs } from './components/FollowUs';

export default function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <About />
            <LocationMap />
            <FollowUs />
            <Footer />
        </div>
    );
}
