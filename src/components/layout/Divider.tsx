import React from 'react';
import { useTheme } from 'styled-components';
import { View } from 'react-native';

const Divider = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.gray100,
        width: '100%',
      }}
    />
  );
};

export default Divider;
