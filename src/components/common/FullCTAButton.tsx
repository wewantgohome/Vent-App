import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';

interface FullCtaButtonProps {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

const FullCTAButton = ({ text, disabled, onPress }: FullCtaButtonProps) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{
          height: 56,
          backgroundColor: disabled ? colors.gray200 : colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}
        onPress={onPress}
        disabled={disabled}
      >
        <Typography.H5 color={colors.gray50}>{text}</Typography.H5>
      </TouchableOpacity>
    </View>
  );
};

export default FullCTAButton;
