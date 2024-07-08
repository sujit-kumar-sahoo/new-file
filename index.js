/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18next from './assets/languages';

export default Main = () => {
    return (
        <App />
    );
  };
  
AppRegistry.registerComponent(appName, () => Main);