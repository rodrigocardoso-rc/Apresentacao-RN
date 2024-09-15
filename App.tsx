import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Navigator from './src/navigation/Navigator';
import FlashMessage from 'react-native-flash-message';

function App(): React.JSX.Element {

  return (
    <>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>

      <FlashMessage position={'top'} style={{paddingTop: 28}} />
    </>
  );
}

export default App;
