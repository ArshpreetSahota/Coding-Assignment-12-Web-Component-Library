import React from "react";
import styled from "styled-components";
import { type ICard } from "./Card.types";

const CustomCard = styled.div<ICard>`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    max-width: ${(props) => props.width || "280px"};
    opacity: ${(props) => (props.disabled ? 0.4 : 1)};
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
    transition: opacity 0.2s ease-in-out;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;
`;

const Title = styled.h2`
    font-size: 1.1em;
    margin-top: 8px;
`;

const Content = styled.p`
    margin-top: 8px;
`;

const ActionButton = styled.button`
    margin-top: 18px;
    padding: 8px 18px;
    border: none;
    border-radius: 5px;
    background-color: navy;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }

    &:disabled {
        opacity: 0.5;
    }
`;

const Card: React.FC<ICard> = ({
                                 imageUrl,
                                 title = "Example Card",
                                 content = "Example Card Content",
                                 buttonText,
                                 onButtonClick,
                                 disabled = false,
                                 ...props
                               }) => {
  return (
      <CustomCard disabled={disabled} {...props}>
        {imageUrl && <Image src={imageUrl} alt={title}/>}
        {title && (<Title>{title}</Title>)}
        {content && <Content>{content}</Content>}
        {buttonText && (
            <ActionButton onClick={onButtonClick} disabled={disabled}>
              {buttonText}
            </ActionButton>
        )}
      </CustomCard>
  );
};

export default Card;