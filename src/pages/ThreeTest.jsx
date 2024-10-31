import React, { useRef } from 'react';
import { RoundedBox, ScrollControls, Scroll, Environment } from '@react-three/drei';
import { GreekModel } from '../components/GreekModel';
import { Spaceman } from '../components/Spaceman';
import About from './About';

const ThreeTest = () => {


  return (
    <>
    <color attach="background" args={['gray']}/>
    <ambientLight intensity={0.1} />
    <spotLight position={[0,25,0]} angle={1.3} castShadow intensity={2} shadow-bias={-0.0001}/>
    <Environment
        preset='warehouse'
    />
    <Spaceman position={[0,-2,0]} />
    <ScrollControls pages={5} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        {/* <GreekModel scale={0.5}/> */}
        
        <Scroll>
            {/* Canvas contents in here will scroll along */}
        </Scroll>
        <Scroll html style={{width:'100%'}}>
            {/* DOM contents in here will scroll along */}
            <About />
            <h1 style={{ position:'absolute',top: '100vh' }}>second page</h1>
            <h1 style={{ position:'absolute',top: '200vh' }}>third page</h1>
        </Scroll>
    </ScrollControls>
    </>
  )
}

export default ThreeTest