import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import Typography from '../atomic/Typography';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onPress: () => void;
  variant?: 'primary' | 'week';
}

const Button = ({ text, disabled, onPress, variant }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: disabled
          ? colors.gray200
          : variant === 'primary'
            ? colors.primary
            : colors.primaryWeek,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      }}
    >
      <Typography.H5
        color={variant === 'primary' ? colors.gray50 : colors.primary}
      >
        {text}
      </Typography.H5>
    </TouchableOpacity>
  );
};

export default Button;
