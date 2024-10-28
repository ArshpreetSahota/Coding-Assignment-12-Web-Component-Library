import React from "react";
import styled from "styled-components";
import { IHeroImage } from "./Hero Image.types";

const HeroImageWrapper = styled.div<IHeroImage>`
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    filter: ${({ disabled }) => disabled ? 'grayscale(100%)' : 'none'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
`;

const HeroTitle = styled.h1`
    color: #fff;
    margin: 0;
`;

const HeroSubtitle = styled.h2`
    color: #fff;
    margin: 5px 0;
`;

const HeroButton = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};

    &:hover {
        background-color: darkblue;
    }
`;

const HeroImage: React.FC<IHeroImage> = ({
                                               imageUrl,
                                               title,
                                               subtitle,
                                               text,
                                               disabled = false,
                                               onClick,
                                             }) => {
  return (
      <HeroImageWrapper imageUrl={imageUrl} disabled={disabled}>
        {title && <HeroTitle>{title}</HeroTitle>}
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        {text && (
            <HeroButton onClick={onClick} disabled={disabled}>
              {text}
            </HeroButton>
        )}
      </HeroImageWrapper>
  );
};

export default HeroImage;