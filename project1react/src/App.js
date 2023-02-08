import "./App.css";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ServicesList from "./components/Services";
import {services} from "./data/data";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Employees />
            <ServicesList data={services} />
            <Footer />
        </>
    );
}
export default App;
