import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Svg from "../utils/Svg";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg2};
  color: ${(props) => props.theme.myPrimary};
  padding-bottom: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2, // 2
      delay: 5,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <Svg/>
        <Text variants={textVariants} initial="hidden" animate="visible">
          Archer
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
