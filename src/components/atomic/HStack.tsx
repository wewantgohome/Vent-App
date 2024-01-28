import styled from 'styled-components/native';

const HStack = styled.View<{
  padding?: number | [number, number];
  center?: boolean;
  gap?: number;
  width?: number | string;
  spaceBetween?: boolean;

  stretch?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.center
      ? 'center'
      : props.spaceBetween
        ? 'space-between'
        : 'flex-start'};
  align-items: center;
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

export default HStack;
