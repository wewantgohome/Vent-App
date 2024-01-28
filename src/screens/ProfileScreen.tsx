import React from 'react';
import LayoutWithFadeHeader from '@components/layout/LayoutWithFadeHeader';
import { View } from 'react-native';
import VStack from '@components/atomic/VStack';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';
import HStack from '@components/atomic/HStack';
import feedAtom from '@/store/feed';
import { useRecoilValue } from 'recoil';
import ventAtom from '@/store/vent';
import EventArticle from '@components/common/EventArticle';
import Vent from '@components/common/Vent';

const ProfileScreen = () => {
  const feed = useRecoilValue(feedAtom);
  const myFeed = feed.filter((feed) => feed.isMine);
  const vent = useRecoilValue(ventAtom);
  const myVent = vent.filter((vent) => vent.isMember);
  const { colors } = useTheme();
  return (
    <LayoutWithFadeHeader title={'프로필'}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingTop: 20,
          gap: 20,
        }}
      >
        <VStack gap={50}>
          <VStack gap={18}>
            <HStack gap={14}>
              <Typography.H4 color={colors.gray600}>
                내가 참여한 이벤트
              </Typography.H4>
              <Typography.H4 color={colors.primary}>
                {myFeed.length}
              </Typography.H4>
            </HStack>
            <VStack gap={10}>
              {
                // @ts-ignore
                myFeed.map((feed) => (
                  <EventArticle
                    author={feed.author}
                    createdAt={feed.createdAt}
                    content={feed.content}
                    picture={feed.picture}
                  />
                ))
              }
            </VStack>
          </VStack>
          <VStack gap={18}>
            <HStack gap={14}>
              <Typography.H4 color={colors.gray600}>
                내가 참여한 벤트
              </Typography.H4>
              <Typography.H4 color={colors.primary}>
                {myVent.length}
              </Typography.H4>
            </HStack>
            <VStack gap={10}>
              {
                // @ts-ignore
                myVent.map((vent) => (
                  <Vent
                    maxMember={vent.maxMember}
                    currentMember={vent.currentMember}
                    location={vent.location}
                    picture={vent.picture}
                    title={vent.name}
                    id={vent.id}
                  />
                ))
              }
            </VStack>
          </VStack>
        </VStack>
      </View>
    </LayoutWithFadeHeader>
  );
};

export default ProfileScreen;
