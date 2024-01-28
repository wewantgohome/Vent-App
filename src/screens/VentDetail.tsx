import React from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { ScrollView, View, Share, Linking } from 'react-native';
import styled from 'styled-components/native';
import VStack from '@components/atomic/VStack';
import HStack from '@components/atomic/HStack';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';
import FullCTAButton from '@components/common/FullCTAButton';
import Divider from '@components/layout/Divider';
import Button from '@components/common/Button';
import PeopleIcon from '@assets/icons/people.svg';
import LocationIcon from '@assets/icons/location.svg';
import ventAtom from '@/store/vent';
import { useRecoilState } from 'recoil';

const VentDetail = ({ route }) => {
  const { id } = route.params;
  const [vent, setVent] = useRecoilState(ventAtom);
  const data = vent.find((vent) => vent.id === id);
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title={'벤트 정보'}>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <Thumbnail
            source={{
              uri: data.picture,
            }}
          />
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 24,
              gap: 40,
            }}
          >
            <VStack gap={20}>
              <VStack gap={10}>
                <Typography.H2 color={colors.gray600}>
                  {data.name}
                </Typography.H2>
                <HStack gap={14}>
                  <HStack gap={10}>
                    <PeopleIcon width={24} height={24} fill={colors.primary} />
                    <Typography.H5 color={colors.primary}>
                      {data.maxMember
                        ? `${data.currentMember}/${data.maxMember}명`
                        : `${data.currentMember}명 참여중`}
                    </Typography.H5>
                  </HStack>
                  <HStack gap={10}>
                    <LocationIcon fill={colors.primary} />
                    <Typography.H5 color={colors.primary}>
                      {data.location}
                    </Typography.H5>
                  </HStack>
                </HStack>
              </VStack>
            </VStack>
            <VStack gap={14}>
              <Typography.H2 color={colors.gray600}>벤트 소개</Typography.H2>
              <Typography.B2 color={colors.gray500}>
                {data.description}
              </Typography.B2>
            </VStack>
          </View>
        </ScrollView>
        <FullCTAButton
          text={data.isMember ? '이미 참여중입니다' : '벤트 참여하기'}
          disabled={data.isMember}
          onPress={() => {
            setVent(
              vent.map((vent) => {
                if (vent.id === id) {
                  return {
                    ...vent,
                    currentMember: vent.currentMember + 1,
                    isMember: true,
                  };
                }
                return vent;
              }),
            );
          }}
        />
      </View>
    </LayoutWithHeader>
  );
};

const Thumbnail = styled.Image`
  height: 260px;
  width: 100%;
`;

export default VentDetail;
