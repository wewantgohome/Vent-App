import styled from 'styled-components/native';

const VStack = styled.View<{
  padding?: number | [number, number];
  center?: boolean;
  gap?: number;
  width?: number | string;
  spaceBetween?: boolean;
  flex?: number;
  stretch?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.center
      ? 'center'
      : props.spaceBetween
        ? 'space-between'
        : 'flex-start'};

  align-self: ${(props) => (props.stretch ? 'stretch' : 'auto')};

  gap: ${(props) => props.gap}px;
  ${(props) =>
    props.padding
      ? `padding: ${
          Array.isArray(props.padding)
            ? props.padding.join('px ') + 'px'
            : props.padding + 'px'
        };`
      : ''}
  width: ${(props) =>
    typeof props.width === 'number' ? props.width + 'px' : props.width};
`;

export default VStack;
