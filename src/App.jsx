import './App.css'

import Headshot from "./components/headshot"
import Illustration from "./components/illustration"
import Info from "./components/info"
import About from "./components/about"
import Interests from "./components/interests"
import Social from "./components/social"

export default function App() {
    return (
        <main className="container">
            <Illustration />
            <Info />
            <About />
            <Interests />
            <Social />
        </main>
    )
}