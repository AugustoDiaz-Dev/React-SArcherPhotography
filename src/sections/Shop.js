import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { motion } from "framer-motion";

import img4 from "../assets/Images/color/c4.jpg";
import img5 from "../assets/Images/color/c5.jpg";
import img6 from "../assets/Images/color/c6.jpg";
import img7 from "../assets/Images/color/c7.jpg";
import img8 from "../assets/Images/color/c8.jpg";
import img9 from "../assets/Images/color/c9.jpg";
import img10 from "../assets/Images/color/c10.jpg";
import img11 from "../assets/Images/color/c11.jpg";
import img12 from "../assets/Images/color/c12.jpg";
import img13 from "../assets/Images/color/c13.jpg";
import img14 from "../assets/Images/color/c14.jpg";
import img15 from "../assets/Images/color/c15.jpg";
import img16 from "../assets/Images/color/c16.jpg";
import img17 from "../assets/Images/color/c17.jpg";
import img18 from "../assets/Images/color/c18.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.myPrimary};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <motion.img src={img} alt={title} 
      whileTap={{ scale: 1.5 }}
      />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,

          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
      Last releases
      </Title>
      <Left>
        <p>
        I am always exploring new techniques and styles in order to get the job done in the best possible way.
          <br />
          <br />
          These are some of my latest pictures, all of them made during this year.
          <br />
          <br />
          Why don't we build something together?
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img4} title="Julia" />
        <Product img={img5} title="Natasha" />
        <Product img={img6} title="Anastasia" />
        <Product img={img7} title="Elena" />
        <Product img={img8} title="Ekaterina" />
        <Product img={img9} title="Alexandra" />
        <Product img={img10} title="Alissa" />
        <Product img={img11} title="Svetlana" />
        <Product img={img12} title="Maria" />
        <Product img={img13} title="Vlada" />
        <Product img={img14} title="Galina" />
        <Product img={img15} title="Galina" />
        <Product img={img16} title="Ekaterina" />
        <Product img={img17} title="Anna" />
        <Product img={img18} title="Nadia" />
      </Right>
    </Section>
  );
};

export default Shop;
