import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import ParticleImage, { 
  Vector,
  forces
} from "react-particle-image";

// Round number up to nearest step for better canvas performance
const round = (n, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5;
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 7);
};

const src = "about.jpg";

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "54db13f1deef6bf15ce17127aa98eb33.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 550) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Title> Hey! I'm Nikhil 👋️ </Title>
              <Text>  
              I am currently pursuing Bachelor's in Computer Science from <b class="text-primary lined-link">India</b>. I am a self taught programmer, a nerd for history and big time Chai lover.</Text>
              <Text> A little over an year back I decided to teach myself Data Science. I started to learn code and enrolled my self to the excellent courses by Andrew Ng on Coursera. A few months back I have started using Kaggle and HackerEarth to improve my skills and be more competitve in Data Science and Machine Learning. I am currently also dabbling into the world of OpenSource.</Text>
              <Text> After spending around 8 hours a day studying, coding and completing projects, I realized that I'd learnt a lot more in just a couple of months than I did in my entire degree program.</Text>
              <Text> Learning the fundamentals of statistics, probability, programming and business analytics is no easy task. These are entire fields on their own, and it would take a lifetime to master even one of them.</Text>
              
              <Text>  This blog will serve as a home for all my thoughts, notes and experiences ranging from Programming, Math, Machine Learning and Computer Vision.  </Text>
              <Text> (The site is currently on development stage and might break this site time to time, so please bear with me.) </Text>
              <ResumeButton href="Nikhil Kumar's Cv.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
            
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
