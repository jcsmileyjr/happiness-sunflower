//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import CTA from './components/CTA/CTA.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <main>
      <Header />
      <section className="content">
        <Content />
      </section>      
      <section className="CTA">
        <CTA />
      </section>
      <section className="Footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;
