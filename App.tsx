import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RecoilRoot } from 'recoil';
import RootNavigation from './src/navigation/RootNavigation';
// import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';
import { colors } from '@/theme/colors';

const theme = {
  colors: colors,
};

const queryClient = new QueryClient();

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 1000); //스플래시 활성화 시간
  // });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <RootNavigation />
          </ThemeProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
