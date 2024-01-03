// import {NavigationActions} from 'react-navigation';
import {CommonActions} from '@react-navigation/native';
let _navigator:any;

function setTopLevelNavigator(navigatorRef?:any) {
  _navigator = navigatorRef;
}

function navigate(routeName?:any, params?:any) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
