import { FaSpinner } from "react-icons/fa";
import styled, { css } from "styled-components";
import Text from "../Text";

const Container = styled.div<{ centered: boolean }>`
  animation: 1s linear 0s normal none infinite running rot;
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ centered }) =>
    centered &&
    css`
      margin: 20px auto;
    `}
`;

export const Spinner = ({ centered = false, color = "black", size = 18 }) => {
  return (
    <>
      <Text bold medium centered={centered}>
        Пожалуйста подождите..
      </Text>
      <Container centered={centered} style={{ width: size, height: size }}>
        <FaSpinner color={color} size={size} />
      </Container>
    </>
  );
};
