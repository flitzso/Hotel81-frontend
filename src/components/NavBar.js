import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/NavBar.css'

const NavBar = () => {
  return (
    <div>
     <nav class="navB">
        <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="font1 nav-link active" aria-current="page" href="/home">Home</a>
    </li>
    <li class="nav-item">
      <a class="font1 nav-link" href="#">Reservas</a>
    </li>
    <li class="nav-item">
      <a class="font1 nav-link" href="#">Galeria</a>
    </li>
    <li class="nav-item">
      <a class="font1 nav-link" href="#">Quartos</a>
    </li>
    <li class="nav-item">
      <a class="font1 nav-link" href="#">Contato</a>
    </li>
    <li class="nav-item">
      <a class="font1 nav-link" href="/">Login</a>
    </li>
    <li class="nav-item">
      <a class="font1 nav-link" href="/cadastro">Cadastro</a>
    </li>
  </ul>
  </nav>
    </div>
  );
};

export default NavBar;