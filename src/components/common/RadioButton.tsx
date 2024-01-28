import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';

interface RadioButtonProps {
  checked: boolean;
  onChange: () => void;
}

const RadioButton = ({ checked, onChange }: RadioButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onChange}
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: checked ? colors.primary : colors.gray200,
      }}
    >
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.gray50,
        }}
      />
    </TouchableOpacity>
  );
};

export default RadioButton;
