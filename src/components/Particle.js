import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (
        <div className="App">

            <Particles
                id="tsparticles"
                init={particlesInit}

                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 75,
                            "density": {
                                "enable": true,
                                "value_area": 1200
                            }
                        },
                        "color": {
                            "value": ["#f511ff", "#15d4df", "#549de8", "#a259f3"]
                        },
                        "shape": {
                            "type": "circle",
                            "options": {
                                "sides": 5
                            }
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 20,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 100,
                            "color": "#f511ff",
                            "opacity": 0.5,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": true,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": ["grab"]
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 600,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 600,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "#1A1A1B",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover",
                    }
                }}
            />

        </div>
    );
}

export default Particle;
