import styled from 'styled-components/native';

const Text = styled.Text<{
  color: string;
}>`
  font-family: 'Pretendard Variable';
  color: ${(props) => props.color || '#000000'};
`;

const H1 = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.24px;
`;

const H2 = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
`;

const H3 = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.2px;
`;

const H4 = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: -0.18px;
`;

const H5 = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
`;

const B1 = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.16px;
`;

const B2 = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

const B3 = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.12px;
`;

const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  B1,
  B2,
  B3,
};

export default Typography;
