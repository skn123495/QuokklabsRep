import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from '../screens/Categories';
import MyAccount from '../screens/MyAccount';
import Cart from '../screens/Cart';
import SideMenu from '../components/Sidemenu/Sidemenu';
import WelcomeScreen from '../screens/WelcomeScreen';


const Drawer = createDrawerNavigator();

 function DrawerNav() {
  return (
      <Drawer.Navigator drawerContent={ props => <SideMenu {...props} /> }>
        <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Profile" component={MyAccount} />
        <Drawer.Screen name="Support" component={Cart} />
      </Drawer.Navigator>
  );
}


export default DrawerNav;