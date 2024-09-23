import Hero from "./components/Hero";
import Hightlights from "./components/Highlights";
import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Hightlights />
        </main>
    );
}

export default App;
