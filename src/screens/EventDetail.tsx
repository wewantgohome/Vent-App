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
import eventAtom from '@/store/event';
import { useRecoilState } from 'recoil';

const EventDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const [event, setEvent] = useRecoilState(eventAtom);
  const data = event.find((event) => event.id === id);
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title={'이벤트 정보'}>
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
              <VStack gap={2}>
                <Typography.H2 color={colors.gray600}>
                  {data.name}
                </Typography.H2>
                <Typography.B2 color={colors.primary}>
                  {data.startDate} ~ {data.endDate}
                </Typography.B2>
              </VStack>
              <HStack gap={8}>
                <Button
                  variant={'primary'}
                  text={'링크 바로가기'}
                  onPress={() => {
                    Linking.openURL(data.link);
                  }}
                />
                <Button
                  variant={'week'}
                  text={'공유하기'}
                  onPress={() => {
                    Share.share({
                      message: data.link,
                    });
                  }}
                />
              </HStack>
            </VStack>
            <VStack gap={30}>
              <VStack gap={14}>
                <Typography.H2 color={colors.gray600}>
                  이벤트 상세
                </Typography.H2>
                <Typography.B2 color={colors.gray500}>
                  {data.description}
                </Typography.B2>
              </VStack>
              <Divider />
              <VStack gap={18}>
                <HStack spaceBetween>
                  <Typography.H5 color={colors.gray600}>
                    온/오프라인 유무
                  </Typography.H5>
                  <Typography.B1 color={colors.gray400}>
                    {data.location ? '오프라인' : '온라인'}
                  </Typography.B1>
                </HStack>
                {data.location && (
                  <HStack spaceBetween>
                    <Typography.H5 color={colors.gray600}>주소</Typography.H5>
                    <Typography.B1 color={colors.gray400}>
                      서울시 노원구
                    </Typography.B1>
                  </HStack>
                )}
              </VStack>
            </VStack>
          </View>
        </ScrollView>
        <FullCTAButton
          text={'이벤트 참여하러 가기'}
          onPress={() => {
            navigation.navigate('Upload', {
              id: data.id,
            });
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

export default EventDetail;
