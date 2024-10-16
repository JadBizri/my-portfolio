import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";

import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isSmall = useMediaQuery({ maxWidth: 440 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className='flex flex-col sm:mt-36 mt-20 mx-auto w-full'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I'm
                    Jad <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>Building Products and Brands</p>
            </div>

            <div className='h-full w-full absolute inset-0'>
                {/*<Leva/>*/}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className='absolute right-0 w-full z-10 bottom-7 left-0 c-space'>
                <a href='#contact' className='w-fit'>
                    <Button name={"Let's work together"} isBeam containerClass='w-full sm:w-fit sm:min-w-96' />
                </a>
            </div>

        </section>
    )
}
export default Hero
