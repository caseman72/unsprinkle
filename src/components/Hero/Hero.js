import React from 'react';
import styled from 'styled-components/macro';

// TODO: move to common utils
const srcToSrcSets = (src, ext) => `
  ${src} 1x,
  ${src.replace(/\.jpg/, `@2x.${ext}`)} 2x,
  ${src.replace(/\.jpg/, `@3x.${ext}`)} 3x
`;


const Hero = () => {
  const heroSrc = "/images/hero-img.jpg";
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={srcToSrcSets(heroSrc, "avif")}
        />
        <source
          type="image/jpeg"
          srcSet={srcToSrcSets(heroSrc, "jpg")}
        />
        <HeroImage alt="Main full screen image (cat)" src={heroSrc} />
      </picture>
      <Swoop alt="" src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
