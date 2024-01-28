import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import FullCTAButton from '@components/common/FullCTAButton';
import VStack from '@components/atomic/VStack';
import HStack from '@components/atomic/HStack';
import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';
import Button from '@components/common/Button';
import { launchImageLibrary } from 'react-native-image-picker';
import TextArea from '@components/common/TextArea';
import InputText from '@components/common/InputText';
import RadioButton from '@components/common/RadioButton';
import { useRecoilState } from 'recoil';
import ventAtom from '@/store/vent';

const CreateScreen = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [max, setMax] = React.useState('');
  const [limit, setLimit] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const { colors } = useTheme();
  const [vent, setVent] = useRecoilState(ventAtom);
  return (
    <LayoutWithHeader title={'벤트 생성'}>
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
            <Typography.H2 color={colors.gray600}>벤트 이름</Typography.H2>
            <InputText
              value={name}
              onChange={(text) => setName(text)}
              placeholder={'벤트 이름을 입력해주세요.'}
            />
          </VStack>
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
          </VStack>
          <VStack gap={20}>
            <Typography.H2 color={colors.gray600}>벤트 주소</Typography.H2>
            <InputText
              value={address}
              onChange={(e) => {
                setAddress(e);
              }}
              placeholder={'벤트 주소을 입력해주세요.'}
            />
          </VStack>
          <VStack gap={20}>
            <Typography.H2 color={colors.gray600}>벤트 설명</Typography.H2>
            <TextArea
              value={description}
              onChange={(e) => {
                setDescription(e);
              }}
              placeholder={'벤트 설명을 입력해주세요.'}
            />
          </VStack>
          <VStack gap={20}>
            <Typography.H2 color={colors.gray600}>참여 인원</Typography.H2>
            <HStack gap={16}>
              <HStack gap={10}>
                <RadioButton
                  checked={!limit}
                  onChange={() => setLimit(false)}
                />
                <Typography.H5 color={colors.gray600}>제한 없음</Typography.H5>
              </HStack>
              <HStack gap={10}>
                <RadioButton checked={limit} onChange={() => setLimit(true)} />
                <Typography.H5 color={colors.gray600}>직접 설정</Typography.H5>
              </HStack>
            </HStack>
          </VStack>
          {
            // limit이 true일 때
            limit && (
              <VStack gap={20}>
                <Typography.H2 color={colors.gray600}>
                  최대 참여 인원
                </Typography.H2>
                <InputText
                  value={max}
                  onChange={(e) => {
                    setMax(e);
                  }}
                  placeholder={'최대 참여 인원을 입력해주세요.'}
                />
              </VStack>
            )
          }
          <View style={{ height: 20 }} />
        </ScrollView>
      </View>
      <FullCTAButton
        text={'벤트 만들기'}
        onPress={() => {
          setVent([
            ...vent,
            {
              id: vent.length + 1,
              name: name,
              location: address,
              description: description,
              picture: image,
              maxMember: limit ? Number(max) : null,
              currentMember: 1,
              isMember: true,
            },
          ]);
          navigation.goBack();
        }}
        disabled={
          name === '' ||
          address === '' ||
          description === '' ||
          image === null ||
          (limit ? max === '' : false)
        }
      />
    </LayoutWithHeader>
  );
};

export default CreateScreen;
