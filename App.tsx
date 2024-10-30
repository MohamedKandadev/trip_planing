import {ThemeProvider} from './context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation';
import ReduxProvider from './providers/ReduxProvider';
import Toast from 'react-native-toast-message';
import {StyleSheet} from 'react-native';

type Props = {};

const App = (props: Props) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
