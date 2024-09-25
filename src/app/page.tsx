'use client';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { About } from './components/About';
// import { LocationMap } from './components/LocationMap';
import { FollowUs } from './components/FollowUs';
import People from './components/People';
import { Projects } from './components/Projects';

export default function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <About />
            <Projects />
            <FollowUs />
            <People />
            <Footer />
        </div>
    );
}
