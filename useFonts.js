import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Montserrat-Black': require('./app/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Regular': require('./app/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./app/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./app/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Thin': require('./app/assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-SemiBold': require('./app/assets/fonts/Montserrat-SemiBold.ttf'),
  });