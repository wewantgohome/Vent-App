import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import FullCTAButton from '@components/common/FullCTAButton';
import Divider from '@components/layout/Divider';
import VStack from '@components/atomic/VStack';
import HStack from '@components/atomic/HStack';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';
import Button from '@components/common/Button';
import styled from 'styled-components/native';
import { launchImageLibrary } from 'react-native-image-picker';
import TextArea from '@components/common/TextArea';
import eventAtom from '@/store/event';
import { useRecoilState } from 'recoil';
import feedAtom from '@/store/feed';

const UploadScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [event, setEvent] = useRecoilState(eventAtom);
  const [feed, setFeed] = useRecoilState(feedAtom);
  const data = event.find((event) => event.id === id);
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title={'이벤트 참여'}>
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            paddingTop: 20,
            paddingHorizontal: 20,
            paddingBottom: 70,
          }}
          contentContainerStyle={{
            gap: 30,
          }}
        >
          <VStack gap={20}>
            <Typography.H2 color={colors.gray600}>이벤트</Typography.H2>
            <HStack gap={20}>
              <Thumbnail
                source={{
                  uri: data.picture,
                }}
              />
              <Typography.H3 color={colors.gray600}>{data.name}</Typography.H3>
            </HStack>
          </VStack>
          <Divider />
          <VStack gap={30}>
            <VStack gap={30}>
              <HStack spaceBetween>
                <Typography.H2 color={colors.gray600}>사진</Typography.H2>
                <Button
                  onPress={() => {
                    launchImageLibrary(
                      {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 200,
                        maxWidth: 200,
                      },
                      (res) => {
                        if (res.assets) {
                          setImage(res.assets[0].uri);
                        }
                      },
                    );
                  }}
                  text={'사진 업로드'}
                  variant="week"
                />
              </HStack>
              {image && (
                <Image
                  style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 8,
                  }}
                  source={{ uri: image }}
                />
              )}
            </VStack>

            <VStack gap={20}>
              <Typography.H2 color={colors.gray600}>글 작성</Typography.H2>
              <TextArea
                onChange={(s) => setContent(s)}
                value={content}
                placeholder={'글을 작성해주세요'}
              />
            </VStack>
            <View style={{ height: 20 }} />
          </VStack>
        </ScrollView>
      </View>
      <FullCTAButton
        text={'이벤트 참여하기'}
        onPress={() => {
          setFeed([
            ...feed,
            {
              id: feed.length + 1,
              content: content,
              picture: image,
              eventId: id,
              createdAt: new Date().toISOString().slice(0, 10),
              isMine: true,
              author: '주현명',
            },
          ]);
          navigation.navigate('Feed');
        }}
        disabled={content === '' || image === null}
      />
    </LayoutWithHeader>
  );
};

const Thumbnail = styled.Image`
  width: 118px;
  height: 80px;
  border-radius: 8px;
`;

export default UploadScreen;
