import React from 'react';
import LayoutWithFadeHeader from '@components/layout/LayoutWithFadeHeader';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import EventArticle from '@components/common/EventArticle';
import HStack from '@components/atomic/HStack';
import { useTheme } from 'styled-components';
import Typography from '@/components/atomic/Typography';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import { useQuery } from '@tanstack/react-query';
import { getEventArticles } from '@lib/api/event';
import { useRecoilState } from 'recoil';
import feedAtom from '@/store/feed';

const FeedScreen = () => {
  const [feed, setFeed] = useRecoilState(feedAtom);
  const { colors } = useTheme();
  return (
    <LayoutWithHeader logo>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          gap: 20,
          paddingTop: 20,
        }}
      >
        <HStack gap={14}>
          <TouchableOpacity
            style={{
              borderRadius: 4,
              paddingHorizontal: 18,
              paddingVertical: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary,
            }}
          >
            <Typography.B2 color={colors.gray100}>이벤트 참여</Typography.B2>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 4,
              paddingHorizontal: 18,
              paddingVertical: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.gray100,
            }}
          >
            <Typography.B2 color={colors.gray400}>벤트</Typography.B2>
          </TouchableOpacity>
        </HStack>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}
          contentContainerStyle={{
            gap: 30,
          }}
          showsVerticalScrollIndicator={false}
        >
          {feed.map((feed) => (
            <EventArticle
              key={feed.id}
              content={feed.content}
              picture={feed.picture}
              createdAt={feed.createdAt}
              author={feed.author}
            />
          ))}
        </ScrollView>
      </View>
    </LayoutWithHeader>
  );
};

export default FeedScreen;
