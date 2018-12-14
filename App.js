import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import BookScreen from './src/screens/BookScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import LoginScreen from './src/screens/LoginScreen';
import { colors } from './src/components/_base';

export default createStackNavigator (
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    Category: {
      screen: CategoryScreen
    },
    Book: {
      screen: BookScreen
    },
    Players: {
      screen: PlayersScreen
    }
  },
  {
    initialRouteName: 'Players',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.normalText,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
