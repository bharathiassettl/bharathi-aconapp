import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import BottomTabScreen from './BottomTabScreen';
import AddGeofencs from './AddGeofencs';
import Settings from './Settings';
import Reports from './Reports';
import Graphs from './Graphs';
import Notifications from './Notifications';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabScreen" component={BottomTabScreen} />
      <Drawer.Screen name="AddGeofencs" component={AddGeofencs} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Reports" component={Reports} />
      <Drawer.Screen name="Graphs" component={Graphs} />
      <Drawer.Screen name="Notifications" component={Notifications} />

    </Drawer.Navigator>
  );
};
export default MainScreen;
