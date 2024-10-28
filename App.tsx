import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation';
import ReduxProvider from './providers/ReduxProvider';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setUser} from './store/features/auth/authApi';
import {supabase} from './api/supabase';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Button from './components/common/Button';

type Props = {};

const App = (props: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSnapPress = useCallback(index => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  return (
    // <ReduxProvider>
    //   <ThemeProvider>
    //     <NavigationContainer>
    //       <MainNavigation />
    //     </NavigationContainer>
    //     <Toast ref={ref => Toast.setRef(ref)} />
    //   </ThemeProvider>
    // </ReduxProvider>
    // <GestureHandlerRootView style={{flex: 1}}>
    //   <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
    //   <BottomSheet
    //     snapPoints={snapPoints}
    //     ref={bottomSheetRef}
    //     onChange={handleSheetChanges}>
    //     <BottomSheetView style={{flex: 1, padding: 36, alignItems: 'center'}}>
    //       <Text>Awesome 🎉</Text>
    //     </BottomSheetView>
    //   </BottomSheet>
    // </GestureHandlerRootView>
    <SafeAreaView>
      <GestureHandlerRootView style={{flex: 1}}>
        <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
        <BottomSheet
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}>
          <BottomSheetView style={{flex: 1, padding: 36, alignItems: 'center'}}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
      <Text>adad</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
