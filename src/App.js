import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import Main from './pages/Main';
import Cardmenu from './pages/Cardmenu';
import Footer from './pages/Footer';
import Room from './pages/Room';
import './App.css';

function HomePage() {
    return (
        <>
            <Carousel />
            <Main />
            <Cardmenu />
            <Footer />
        </>
    );
}

function RoomPage() {
    return <Room />
}

function ContactPage() {
    return <h1>Contact Us Page</h1>;
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/room" element={<RoomPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
