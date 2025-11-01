"use client";

import Header from './component/header';
import Footer from './component/footer'
import Hero_Section from "./component/hero_section";
import Playground_cards from './playground_cards';

export default function Home() {
  return (
    <div>
        <Header />
        <main>
            <Hero_Section />
        </main>
        <Playground_cards />
        <Footer />
    </div>
  )
}