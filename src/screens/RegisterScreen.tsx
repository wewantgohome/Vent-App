import React from 'react';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import VStack from '@components/atomic/VStack';
import Typography from '@/components/atomic/Typography';
import { useTheme } from 'styled-components';
import FullCTAButton from '@components/common/FullCTAButton';
import InputText from '@components/common/InputText';
import { signup } from '@lib/api/user';

const RegisterScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [age, setAge] = React.useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 52,
          paddingHorizontal: 20,
        }}
      >
        {step === 0 ? (
          <VStack gap={12}>
            <Typography.H1 color={colors.gray600}>
              우리들의 탈출구,{'\n'}vent에 오신 걸 환영해요!
            </Typography.H1>
            <Typography.H5 color={colors.gray400}>
              시작하기 전, 몇가지 정보를 입력해주셔야 해요
            </Typography.H5>
          </VStack>
        ) : (
          <VStack gap={35}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 6,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: 5,
                  borderRadius: 12,
                  backgroundColor: step >= 1 ? colors.primary : colors.gray200,
                }}
              />
              <View
                style={{
                  flex: 1,
                  height: 5,
                  borderRadius: 12,
                  backgroundColor: step >= 2 ? colors.primary : colors.gray200,
                }}
              />
              <View
                style={{
                  flex: 1,
                  height: 5,
                  borderRadius: 12,
                  backgroundColor: step >= 3 ? colors.primary : colors.gray200,
                }}
              />
            </View>
            <VStack gap={30}>
              <VStack gap={6}>
                <Typography.H5 color={colors.gray400}>{step}/3</Typography.H5>
                <Typography.H1 color={colors.gray600}>
                  {step === 1
                    ? '아이디를 정해주세요'
                    : step === 2
                      ? '비밀번호를 입력해주세요'
                      : '닉네임과 나이를 입력해주세요'}
                </Typography.H1>
              </VStack>
              {step === 1 && (
                <InputText
                  value={id}
                  onChange={(s) => setId(s)}
                  placeholder={'아이디를 입력해주세요'}
                />
              )}
              {step === 2 && (
                <VStack gap={16}>
                  <InputText
                    value={password}
                    secure
                    onChange={(s) => setPassword(s)}
                    placeholder={'비밀번호 (4자리~12자리, 특수문자 미포함)'}
                  />
                  <InputText
                    value={passwordConfirm}
                    secure
                    onChange={(s) => setPasswordConfirm(s)}
                    placeholder={'비밀번호 확인'}
                  />
                </VStack>
              )}
              {step === 3 && (
                <VStack gap={16}>
                  <InputText
                    value={age}
                    onChange={(s) => setAge(s)}
                    placeholder={'나이를 입력해주세요 (숫자)'}
                  />
                  <InputText
                    value={name}
                    onChange={(s) => setName(s)}
                    placeholder={'닉네임을 입력해주세요'}
                  />
                </VStack>
              )}
            </VStack>
          </VStack>
        )}
      </View>
      <FullCTAButton
        text={step === 3 ? '시작하기' : '다음'}
        onPress={() => {
          if (step === 3) {
            signup({
              userId: id,
              pwd: password,
              pwdCheck: password,
              age,
              nickname: name,
            })
              .then((res) => {
                console.log(res.data);
                navigation.navigate('Login');
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            setStep(step + 1);
          }
        }}
        disabled={
          (step === 1 && id === '') ||
          (step === 2 && (password === '' || passwordConfirm === '')) ||
          (step === 3 && (age === '' || name === ''))
        }
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
