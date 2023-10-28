import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
const Confetti = () => {
  async function customInit(engine: Engine): Promise<void> {
    await loadConfettiPreset(engine);
  }
  const options = {
    emitters: [
      {
        life: {
          duration: 5,
          count: 100,
        },
        position: {
          x: 50,
          y: 30,
        },
        particles: {
          move: {
            direction: "top-right",
          },
        },
      },
      {
        life: {
          duration: 5,
          count: 1,
        },
        position: {
          x: 100,
          y: 30,
        },
        particles: {
          move: {
            direction: "top-left",
          },
        },
      },
    ],
    preset: "confetti",
  };

  return <Particles options={options} init={customInit} />;
};

export default Confetti;
