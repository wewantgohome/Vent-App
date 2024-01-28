import React, { useState } from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Typography from '../atomic/Typography';
import { colors } from '@/theme/colors';
import { useTheme } from 'styled-components';
import Logo from '@assets/icons/logo.svg';
import SearchIcon from '@assets/icons/search.svg';
import BackIcon from '@assets/icons/back.svg';
import { useNavigation } from '@react-navigation/native';

interface LayoutWithHeaderProps {
  title?: string;
  children: React.ReactNode;
  logo?: boolean;
}

const LayoutWithHeader = ({ title, children, logo }: LayoutWithHeaderProps) => {
  const navigation = useNavigation();
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
          paddingHorizontal: 20,
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {logo ? (
          <>
            <Logo fill={colors.primary} />
            <SearchIcon fill={colors.gray600} />
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>

            <Typography.H4 color={colors.gray600}>{title}</Typography.H4>
            <View
              style={{
                width: 24,
                height: 24,
              }}
            ></View>
          </>
        )}
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LayoutWithHeader;
