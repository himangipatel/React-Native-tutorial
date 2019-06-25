import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import WelcomeScreen from './screens/WelcomeScreen';
import HelloWorldScreen from './screens/HelloWorldScreen';
import PropSourceScreen from './screens/PropSourceScreen';
import PropGreetingScreen from './screens/PropGreetingScreen';
import StateBlinkScreen from './screens/StateBlinkScreen';
import DesignStyleScreen from './screens/DesignStyleScreen';
import FixedDimensionsScreen from './screens/FixedDimensionsScreen';
import FlexDimensionsScreen from './screens/FlexDimensionsScreen';
import FlexboxPropsScreen from './screens/FlexboxPropsScreen';
import FlexDirectionFlexboxScreen from './screens/FlexDirectionFlexboxScreen';
import JustifyContentFlexboxScreen from './screens/JustifyContentFlexboxScreen';
import AlignItemsFlexboxScreen from './screens/AlignItemsFlexboxScreen';
import TextPizzaTranslatorScreen from './screens/TextPizzaTranslatorScreen';
import PlayWithButtonsScreen from './screens/PlayWithButtonsScreen';
import BasicButtonsScreen from './screens/BasicButtonsScreen';
import TouchableButtonsScreen from './screens/TouchableButtonsScreen';
import ListingScreen from './screens/ListingScreen';
import FlatListingScreen from './screens/FlatListingScreen';
import SectionListingScreen from './screens/SectionListingScreen';
import NetworkCallScreen from './screens/NetworkCallScreen';
import CustomListviewScreen from './screens/CustomListviewScreen';
import AddSubtractScreen from './screens/AddSubtractScreen'
import Pagination from './screens/Pagination'
import SplashScreen from './screens/SplashScreen';
import HoursCalculatorScreen from './screens/HoursCalculatorScreen';
import DateTimePickerTester from './screens/DateTimePickerTester'
import ReactComponents from './screens/ReactComponents'
import TextInputScreen from './screens/TextInputScreen';
import Calculator from './screens/Calculator';
import TODOScreen from './screens/TODOScreen';
import ResponsiveUIScreen from './screens/ResponsiveUIScreen';
import EcommerceScreen from './screens/EcommerceScreen';
import SharePrefExmple from './screens/SharePrefExmple';
import ViewPagerPage from './screens/ViewPagerPage';


const MainNavigator = createStackNavigator({
  SplashScreen:{
    screen:SplashScreen
  },
  Welcome: {
    screen: WelcomeScreen
  },
  HelloWorld: {
    screen: HelloWorldScreen
  },
  PropSource: {
    screen: PropSourceScreen
  },
  PropGreeting: {
    screen: PropGreetingScreen
  },
  StateBlink: {
    screen: StateBlinkScreen
  },
  DesignStyle: {
    screen: DesignStyleScreen
  },
  FixedDimensions: {
    screen: FixedDimensionsScreen
  },
  FlexDimensions: {
    screen: FlexDimensionsScreen
  },
  FlexboxProps: {
    screen: FlexboxPropsScreen
  },
  FlexDirectionFlexbox: {
    screen: FlexDirectionFlexboxScreen
  },
  JustifyContentFlexbox: {
    screen: JustifyContentFlexboxScreen
  },
  AlignItemsFlexbox: {
    screen: AlignItemsFlexboxScreen
  },
  TextPizzaTranslator: {
    screen: TextPizzaTranslatorScreen
  },
  PlayWithButtons: {
    screen: PlayWithButtonsScreen
  },
  BasicButtons: {
    screen: BasicButtonsScreen
  },
  TouchableButtons: {
    screen: TouchableButtonsScreen
  },
  Listing: {
    screen: ListingScreen
  },
  FlatListing: {
    screen: FlatListingScreen
  },
  SectionListing: {
    screen: SectionListingScreen
  },
  NetworkCall: {
    screen: NetworkCallScreen
  },
  CutomListing: {
    screen: CustomListviewScreen
  },
  AddSubtract: {
    screen: AddSubtractScreen
  }, 
  DateTimePicker:{
    screen:DateTimePickerTester
  },
  HoursCalculator:{
    screen:HoursCalculatorScreen
  },
  DateTimePicker:{
    screen:DateTimePickerTester
  },
  ReactCompo:{
    screen:ReactComponents
  },
  TextInput:{
    screen:TextInputScreen
  },
  Calculator:{
    screen:Calculator
  },
  ToDoScreen :{
    screen:TODOScreen
  },
  Ecommerce:{
    screen:EcommerceScreen
  },
  ResponsiveUI:{
    screen:ResponsiveUIScreen
  },
  SharePrefExmple:{
    screen:SharePrefExmple
  },
  ViewPager:{
    screen:ViewPagerPage
  }
});

const App = createAppContainer(MainNavigator);
export default App;