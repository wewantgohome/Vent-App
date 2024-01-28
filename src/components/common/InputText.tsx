import { Animated, TextInput } from 'react-native';

import React, { useState } from 'react';
import { colors } from '@/theme/colors';

interface InputTextProps {
  value: string;
  onChange: (string: string) => void;
  placeholder: string;
  secure?: boolean;
}

const InputText = ({
  value,
  onChange,
  placeholder,
  secure,
}: InputTextProps) => {
  const [typing, setTyping] = React.useState(false);
  const [borderHeight, setBorderHeight] = useState(new Animated.Value(1));
  const [currentColor, setCurrentColor] = useState(colors.gray200);
  return (
    <Animated.View
      style={{
        borderWidth: borderHeight,
        borderColor: currentColor,
        borderRadius: 4,
        paddingHorizontal: 14,
        paddingVertical: 16,
      }}
    >
      <TextInput
        secureTextEntry={secure}
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
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </Animated.View>
  );
};

export default InputText;
