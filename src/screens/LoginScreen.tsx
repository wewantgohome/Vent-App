import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import VStack from '@components/atomic/VStack';
import Typography from '@/components/atomic/Typography';
import { useTheme } from 'styled-components';

import Logo from '@assets/icons/logo.svg';
import InputText from '@components/common/InputText';
import FullCTAButton from '@components/common/FullCTAButton';
import { login } from '@lib/api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { colors } = useTheme();
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
          paddingTop: 65,
          paddingHorizontal: 20,
        }}
      >
        <VStack gap={40}>
          <VStack gap={14}>
            <Logo width={120} height={35} fill={colors.primary} />
            <Typography.H3 color={colors.gray600}>
              지루한 일상 속, 우리들의 탈출구
            </Typography.H3>
          </VStack>
          <VStack gap={24}>
            <VStack gap={10}>
              <Typography.H5 color={colors.gray600}>아이디</Typography.H5>
              <InputText
                value={id}
                onChange={(s) => setId(s)}
                placeholder={'아이디를 입력해주세요.'}
              />
            </VStack>
            <VStack gap={10}>
              <Typography.H5 color={colors.gray600}>비밀번호</Typography.H5>
              <InputText
                secure
                value={password}
                onChange={(s) => setPassword(s)}
                placeholder={'비밀번호를 입력해주세요.'}
              />
            </VStack>
          </VStack>
        </VStack>
      </View>
      <View
        style={{
          gap: 18,
          width: '100%',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Typography.B1 color={colors.primary}>
            vent에 처음이신가요?
          </Typography.B1>
        </TouchableOpacity>
        <FullCTAButton
          disabled={!id || !password}
          text={'로그인'}
          onPress={() => {
            login({
              userId: id,
              pwd: password,
            })
              .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                  AsyncStorage.setItem('access', res.data.accessToken).then(
                    () => {
                      navigation.navigate('Tab');
                    },
                  );
                } else {
                  alert('로그인에 실패하였습니다.');
                }
              })
              .catch((err) => {
                console.log(err);
                alert('로그인에 실패하였습니다.');
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
