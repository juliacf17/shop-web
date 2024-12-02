import './App.css';
import Carrusel from './Carrusel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <div className="carrusel">
            <Carrusel/>
        </div>
        <section id="home">
          <h1>Welcome to My Website</h1>
          <p>This is the Home section.</p>
        </section>
        <section id="about">
          <h1>About Us</h1>
          <p>This is the About section.</p>
        </section>
        <section id="services">
          <h1>Our Services</h1>
          <p>This is the Services section.</p>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
          <p>This is the Contact section.</p>
        </section>
      </main>
    </div>
  );
}


export default App;
