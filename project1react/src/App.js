import "./App.css";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ServicesList from "./components/ServicesList";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Employees />
            <ServicesList />
            <Footer />
        </>
    );
}
export default App;
