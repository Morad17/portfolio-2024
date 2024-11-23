import React, { useRef } from 'react';
import { Html, OrbitControls } from '@react-three/drei';
import { RoundedBox, ScrollControls, Scroll, Environment } from '@react-three/drei';
import { GreekModel } from '../components/GreekModel';
import { Spaceman } from '../components/Spaceman';
import About from './About';
import { VikingShip } from '../components/Viking_ship';

const ThreeTest = () => {


  return (
    <>
    <color attach="background" args={['gray']}/>
    <ambientLight intensity={0.1} />
    <spotLight position={[0,25,0]} angle={1.3} castShadow intensity={2} shadow-bias={-0.0001}/>
    <Environment
        preset='warehouse'
    />
    <VikingShip scale={0.2} rotation={[0,2,0]} position={[2,-1,2]}/>
    <ScrollControls pages={5} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        {/* <GreekModel scale={0.5}/> */}
        {/* <Spaceman position={[0,-1,0]} /> */} 
        <Html  >
          <About/>
          <div className="box">
            <h1>About Work</h1>
          <h1>Abu</h1>
          </div>
          
        </Html>
        
        
       
        <Scroll style={{width:'100%', zIndex: '111'}}>
            {/* Canvas contents in here will scroll along */}
          
        </Scroll>
        <Scroll html style={{width:'100%', zIndex: '-111'}} occlude="true">
            {/* DOM contents in here will scroll along */}
            <h1 style={{ position:'absolute',top: '100vh' }}>second page</h1>
            <h1 style={{ position:'absolute',top: '200vh' }}>third page</h1>
        </Scroll>
    </ScrollControls>
    </>
  )
}

export default ThreeTest