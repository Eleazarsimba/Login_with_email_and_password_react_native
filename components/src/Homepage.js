import { View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Button, Menu, Provider } from 'react-native-paper';
import {auth} from '../../firebase-auth';

import AppNavigator from '../Media/AppNavigator';
import Mediafile from '../Media/Mediafile';

const Homepage = ({navigation}) => {
  const [user, setUser] = useState({});

  const [visible, setVisible] = useState(false);
  
  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);
//logout user
  const handleLogout = () => {
    auth
     .signOut()
     .then(user => {
        alert('You are logged out');
        navigation.replace('Login')
     })
     .catch(error => alert(error.message))
 }
//Get logged user
 useEffect(() => {
    auth
    .onAuthStateChanged(currentUser => {
        setUser(currentUser)
    })        
}, []);

  return (
    <Provider>
      <View style={styles.container}>
        <Menu
          visible={visible}
          style={{marginTop: -45}}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} mode="outlined">
              {visible ? 'Hide Menu' : 'Show Menu'}
            </Button>
          }>
            <View>
                <Menu.Item
                    onPress={handleLogout}
                    title="LOGOUT"
                />
            </View>
        </Menu>
      </View>
      <View>
        <Mediafile>
          <AppNavigator/>
        </Mediafile>
      </View>
        
        
    </Provider>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 100,
    },
    music: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
  });

export default Homepage
