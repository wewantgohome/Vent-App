import React from 'react';
import HStack from '@components/atomic/HStack';
import VStack from '@components/atomic/VStack';
import styled from 'styled-components/native';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';

interface EventArticleProps {
  author: string;
  createdAt: string;
  content: string;
  picture: string;
}

const EventArticle = ({
  author,
  createdAt,
  content,
  picture,
}: EventArticleProps) => {
  const { colors } = useTheme();
  return (
    <VStack gap={18}>
      <Thumbnail
        source={{
          uri: picture,
        }}
      />
      <VStack gap={14}>
        <Typography.H3 color={colors.gray600}>{content}</Typography.H3>
        <HStack spaceBetween>
          <HStack gap={8}>
            <Temp2 />
            <Typography.B1 color={colors.gray400}>{author}</Typography.B1>
          </HStack>
          <Typography.B1 color={colors.gray300}>{createdAt}</Typography.B1>
        </HStack>
      </VStack>
    </VStack>
  );
};

const Temp2 = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.gray100};
  border: 1px solid ${(props) => props.theme.colors.gray200};
`;

const Thumbnail = styled.Image`
  width: 100%;
  height: 230px;
  border-radius: 8px;
`;

export default EventArticle;
