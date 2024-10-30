import './assets/scss/base.scss'

import Footer from './components/Footer'
import Home from './pages/Home'
import SideNav from './components/SideNav';
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import ThreeTest from './pages/ThreeTest';
import { Canvas } from '@react-three/fiber';


function App() {

  return (
    <div className="App main-layout">
      {/* <SideNav /> */}
     {/* <div className="content">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
     </div> */}
     <Canvas style={{width:'100%', height:'100vh'}}>
      <ThreeTest />
     </Canvas>
     
    </div>
  );
}
 
export default App;
