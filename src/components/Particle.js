import { loadFull } from "tsparticles";
import particlesConfig from "../config/particles";
import Particles from "react-tsparticles";



const ParticlesBackground = () => {
    const ParticlesInIt = async (main) => {
        await loadFull(main);
    }
    return (
        <Particles
            id="tsparticles"
            options={particlesConfig}
            init={ParticlesInIt}
        />
    )
}

export default ParticlesBackground;