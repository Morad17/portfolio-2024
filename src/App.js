import './assets/scss/base.scss'

import Footer from './components/Footer'
import Home from './pages/Home'
import SideNav from './components/SideNav';
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


function App() {

  return (
    <div className="App">
      <SideNav />
     <div className="main-layout">
      <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
     </div>
    </div>
  );
}

export default App;
