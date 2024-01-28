import React from 'react';
import styled from 'styled-components/native';
import VStack from '@components/atomic/VStack';
import Typography from '../atomic/Typography';
import { useTheme } from 'styled-components';
import HStack from '@components/atomic/HStack';
import PeopleIcon from '@assets/icons/people.svg';
import LocationIcon from '@assets/icons/location.svg';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface VentProps {
  maxMember: number;
  currentMember: number;
  location: string;
  picture: string;
  title: string;
  id: number;
}

const Vent = ({
  maxMember,
  currentMember,
  location,
  picture,
  title,
  id,
}: VentProps) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('VentDetail', {
          id: id,
        })
      }
    >
      <VStack gap={20}>
        <Thumbnail
          source={{
            uri: picture,
          }}
        />
        <VStack gap={10}>
          <Typography.H5 color={colors.gray600}>{title}</Typography.H5>
          <HStack gap={14}>
            <HStack gap={8}>
              <PeopleIcon fill={colors.primary} />
              <Typography.B2 color={colors.primary}>
                {maxMember
                  ? `${currentMember}/${maxMember}명`
                  : `${currentMember}명 참여중`}
              </Typography.B2>
            </HStack>
            <HStack gap={8}>
              <LocationIcon fill={colors.primary} />
              <Typography.B2 color={colors.primary}>{location}</Typography.B2>
            </HStack>
          </HStack>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
};

const Thumbnail = styled.Image`
  width: 100%;
  height: 184px;
  border-radius: 8px;
`;

export default Vent;
