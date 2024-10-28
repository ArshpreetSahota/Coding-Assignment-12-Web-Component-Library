import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Image.types";

const CustomImg = styled.img<ImgProps>`
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
    filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
      <CustomImg
          src={src}
          alt={alt}
          width={width}
          height={height}
          disabled={disabled}
      />
  );
};

export default Img;