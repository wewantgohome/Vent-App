import React, { useState } from 'react';
import { Animated, Platform, ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FadeHeader from '@components/layout/FadeHeader';
import AdaptiveHeader from '@components/layout/AdaptiveHeader';

interface LayoutWithHeaderProps {
  title: string;
  children: React.ReactNode;
  fixed?: number;
  left?: string;
}

function LayoutWithFadeHeader({
  title,
  children,
  fixed,
  left,
}: LayoutWithHeaderProps) {
  const [scrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <FadeHeader left={left} title={title} scrollY={scrollY} />
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={16}
          stickyHeaderIndices={fixed ? [fixed] : []}
        >
          <AdaptiveHeader title={title} />
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default LayoutWithFadeHeader;
