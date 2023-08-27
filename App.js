import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeContext } from "./src/context/themeContext";
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/myKeyboard';


export default function App() {


  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme === 'light' ? myColors.light : myColors.black }]}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
          <Switch
            value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{ margin: 50, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], }}
            trackColor={{ false: '#767577', true: '#90EE90' }}
            thumbColor={theme === 'light' ? '#242526' : '#f4f3f4'}
          />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
