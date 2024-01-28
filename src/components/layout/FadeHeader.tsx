import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';

interface FadeHeaderProps {
  title: string;
  scrollY: Animated.Value;
  left: string;
}

const FadeHeader = ({ title, scrollY, left }: FadeHeaderProps) => {
  const { colors } = useTheme();
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 70],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <Container>
      <Animated.View
        style={{
          opacity: headerOpacity,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Typography.H4 color={colors.gray600}>{title}</Typography.H4>
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  height: 54px;
  width: 100%;
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default FadeHeader;
