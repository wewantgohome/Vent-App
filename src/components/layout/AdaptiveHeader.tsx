import React from 'react';
import styled from 'styled-components/native';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';

interface AdaptiveHeaderProps {
  title: string;
}

const AdaptiveHeader = ({ title }: AdaptiveHeaderProps) => {
  const { colors } = useTheme();
  return (
    <ContainerV2>
      <Typography.H1 color={colors.gray600}>{title}</Typography.H1>
    </ContainerV2>
  );
};
const ContainerV2 = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  align-items: center;
  gap: 20px;
`;

export default AdaptiveHeader;
