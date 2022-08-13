import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
    margin: 0 auto;
    iframe {
      width: 100%;
    }
  }
  @media (max-width: 30em) {
    width: 100vw;
    margin: 0 auto;
    iframe {
      width: 100%;
    }
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.myPrimary};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;
const Videos = styled.div`
  width: 100%;
  margin: 20% auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  iframe {
    margin: 1rem;
    border-radius: 1rem;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Media = () => {
  return (
    <Section id="fixed-target" className="media">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Media
      </Title>
      <Videos>
      
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kQeZng8uvdQ" title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2svaCKlYxCA" title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cYiI8kR35zU" title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/sewlReH9O0c" title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       </Videos>
    </Section>
  );
};

export default Media;

