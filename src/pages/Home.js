import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeBackground from '../components/imgs/home2_background.png';
import '../components/css/Home.css'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Reservas from '../pages/Reservas';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div>
        <img src={homeBackground} class="homeB"></img>
        <Reservas />
        </div>
        <Footer />
    </div>
  );
};

export default Home;