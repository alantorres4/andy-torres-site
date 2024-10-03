import { useScramble } from 'use-scramble';


const ProjectsLinkScrambleText = () => {
  const { ref } = useScramble({
    text: "[ PROJECTS ]",
    range: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 37, 35, 36, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    speed: 0.22999999999999998,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 7,
    chance: 1,
    overdrive: false,
    overflow: false,  
  })
  
  return <p ref={ref} />
};

const AboutLinkScrambleText = () => {
  const { ref } = useScramble({
    text: "[ ABOUT ]",
    range: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 37, 35, 36, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    speed: 0.22999999999999998,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 7,
    chance: 1,
    overdrive: false,
    overflow: false,
  })
  
  return <p ref={ref} />
};

const ContactLinkScrambleText = () => {
  const { ref } = useScramble({
    text: "[ CONTACT ]",
    range: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 37, 35, 36, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    speed: 0.22999999999999998,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 7,
    chance: 1,
    overdrive: false,
    overflow: false,  
  })
  
  return <p ref={ref} />
};

const View2023ReelScrambleText = () => {

  const { ref } = useScramble({
    text: "[ VIEW 2024 REEL ]",
    range: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 37, 35, 36, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    speed: 0.22999999999999998,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 7,
    chance: 1,
    overdrive: false,
    overflow: false,  
  })
  
  return <p ref={ref} />
};

const HighlightReel2023Text = () => {

  const { ref } = useScramble({
    text: "2024 HIGHLIGHT REEL",
    range: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 37, 35, 36, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    speed: 0.62999999999999998,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 7,
    chance: 1,
    overdrive: false,
    overflow: false,  
  })
  
  return <p ref={ref} />
};

const SuperBowlLVIIShowOpenSubtitle = () => {

  const { ref } = useScramble({
    text: "FanDuel",
    range: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 37, 35, 36, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    speed: 0.62999999999999998,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 7,
    chance: 1,
    overdrive: false,
    overflow: false,
    playOnMount: true,
  })
  
  return <p ref={ref} />
};



export {
  ProjectsLinkScrambleText, 
  AboutLinkScrambleText, 
  ContactLinkScrambleText, 
  View2023ReelScrambleText, 
  HighlightReel2023Text, 
  SuperBowlLVIIShowOpenSubtitle
}