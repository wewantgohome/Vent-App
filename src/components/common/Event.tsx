import React from 'react';
import HStack from '@components/atomic/HStack';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import VStack from '@components/atomic/VStack';
import Typography from '../atomic/Typography';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface EventProps {
  picture: string;
  title: string;
  startDate: string;
  endDate: string;
  navigation?: any;
  id: number;
}

const Event = ({ picture, title, startDate, endDate, id }: EventProps) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EventDetail', {
          id: id,
        })
      }
    >
      <HStack gap={20}>
        <Thumbnail
          source={{
            uri: picture,
          }}
        />
        <VStack gap={2}>
          <Typography.H5 color={colors.gray600}>{title}</Typography.H5>
          <Typography.B2 color={colors.primary}>
            {startDate.slice(0, 10).replace(/-/g, '.')} -{' '}
            {endDate.slice(0, 10).replace(/-/g, '.')}
          </Typography.B2>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

const Thumbnail = styled.Image`
  width: 118px;
  height: 80px;
  border-radius: 8px;
`;

export default Event;
