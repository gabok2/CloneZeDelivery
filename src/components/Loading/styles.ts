import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs({
  size: "large",
  color: "#FFCC00",
})``;