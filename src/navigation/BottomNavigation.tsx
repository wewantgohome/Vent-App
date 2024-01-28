import React, { useRef, useState } from 'react';
import {
  StatusBar,
  Animated,
  TouchableHighlight,
  View,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventIcon from '@assets/icons/event.svg';
import FeedIcon from '@assets/icons/feed.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import VentIcon from '@assets/icons/vent.svg';
import PlusIcon from '@assets/icons/plus.svg';

import FeedScreen from '@screens/FeedScreen';
import EventScreen from '@screens/EventScreen';
import ProfileScreen from '@screens/ProfileScreen';
import VentScreen from '@screens/VentScreen';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Typography from '@components/atomic/Typography';
import { useTheme } from 'styled-components';
import { colors } from '@/theme/colors';

function BottomNavigation() {
  const { colors } = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: 'white',
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FeedIcon
                height={28}
                fill={focused ? colors.primary : colors.gray300}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Event"
          component={EventScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <EventIcon
                height={28}
                fill={focused ? colors.primary : colors.gray300}
              />
            ),
          }}
        />
        <Tab.Screen name="button" component={View} />
        <Tab.Screen
          name="Vent"
          component={VentScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <VentIcon
                height={28}
                fill={focused ? colors.primary : colors.gray300}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <ProfileIcon
                height={28}
                fill={focused ? colors.primary : colors.gray300}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

interface TabIconProps {
  children: React.ReactNode;
  onPress: () => void;
}

const TabIcon = ({ children, onPress }: TabIconProps) => {
  const [bg, setBg] = useState('#FFFFFF');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const onPressIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.9,
      duration: 140,
      useNativeDriver: false,
    }).start();
    setBg('#f6f8f8');
  };

  function onPressOut() {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 140,
      useNativeDriver: false,
    }).start();
    setBg('#FFFFFF');
  }

  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      style={{
        display: 'flex',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={{
          width: '80%',
          height: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bg,
          borderRadius: 10,
          transform: [{ scale: fadeAnim }],
        }}
      >
        {children}
      </Animated.View>
    </TouchableHighlight>
  );
};

const BottomTabBar = ({ state, descriptors, navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [buttonColor, setButtonColor] = useState(colors.primary);

  interface LabelProps {
    [key: string]: string;
  }

  const ScreenLabel: LabelProps = {
    Home: '홈',
    Feed: '피드',
    Event: '이벤트',
    Profile: '프로필',
    Vent: '밴트',
  };

  return (
    <Container
      style={{
        bottom: insets.bottom,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const Icon = options.tabBarIcon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        if (route.name === 'button') {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('Create');
              }}
              key={index}
              onPressIn={() => {
                setButtonColor(colors.primaryDark);
              }}
              onPressOut={() => {
                setButtonColor(colors.primary);
              }}
              style={{
                backgroundColor: buttonColor,
                width: 48,
                height: 48,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PlusIcon />
            </Pressable>
          );
        }
        return (
          <TabIcon onPress={() => onPress()} key={index}>
            <IconBox>
              <Icon focused={isFocused} />
            </IconBox>
            <View
              style={{
                height: 4,
              }}
            />
            <Typography.B3 color={isFocused ? colors.primary : '#BBC7C8'}>
              {ScreenLabel[route.name]}
            </Typography.B3>
          </TabIcon>
        );
      })}
    </Container>
  );
};

const IconBox = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.SafeAreaView`
  width: 100%;
  padding: 8px 0;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top-width: 1px;
  border-top-color: #e9ecef;
`;

export default BottomNavigation;
