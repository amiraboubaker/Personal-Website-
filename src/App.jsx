import NavBar from "./sections/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <div>
                <NavBar />
                <Hero />
                <About />
                <Projects />
            </div>
        </main>
    );
}

export default App;

