import React, { useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Mesh } from 'three/src/Three.js';
import { RoundedBox } from '@react-three/drei';


export function Box(){
    return(
        <mesh>
            <boxGeometry args={[3,3,3]}/>
            <meshLambertMaterial />
        </mesh>
    )
}

const ThreeTest = () => {



  return (
    <div>
        <Canvas style={{width:`1000px`, height:'500px',}}>
            <color attach="background" args={['gray']}/>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} color="red" />
            <RoundedBox
                args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                >
                <meshPhongMaterial color="#f3f3f3" wireframe />
            </RoundedBox>


        </Canvas>
    </div>
  )
}

export default ThreeTest