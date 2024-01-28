import { Animated, TextInput } from 'react-native';

import React, { useState } from 'react';
import { colors } from '@/theme/colors';

interface InputTextProps {
  value: string;
  onChange: (string: string) => void;
  placeholder: string;
}

const TextArea = ({ value, onChange, placeholder }: InputTextProps) => {
  const [typing, setTyping] = React.useState(false);
  const [borderHeight, setBorderHeight] = useState(new Animated.Value(1));
  const [currentColor, setCurrentColor] = useState(colors.gray200);
  return (
    <Animated.View
      style={{
        borderWidth: borderHeight,
        borderColor: currentColor,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingTop: 16,
        height: 140,
      }}
    >
      <TextInput
        blurOnSubmit={true}
        multiline={true}
        onFocus={() => {
          setTyping(true);
          setCurrentColor(colors.primary);
          Animated.timing(borderHeight, {
            toValue: 2,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }}
        onBlur={() => {
          setTyping(false);
          setCurrentColor(colors.gray200);
          Animated.timing(borderHeight, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }}
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: colors.gray600,
        }}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </Animated.View>
  );
};

export default TextArea;
