import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper';
import {auth, store} from '../../firebase-auth';

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const handleSignUp = () => {
       auth

        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            // navigation.navigate('Home')
            store.collection('appusers').add({
                Email: email,
                Age: age,
                FirstName: fname,
                LastName: lname
              })
            navigation.navigate('Home')
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
      <Text style={styles.hometopic}>Register</Text>
      <TextInput 
        style={styles.homeinput}
        placeholder='Enter First Name'
        value={fname}
        onChangeText={text => setFname(text)}
      />
      <TextInput 
        style={styles.homeinput}
        placeholder='Enter Last Name'
        value={lname}
        onChangeText={text => setLname(text)}
      />
      <TextInput 
        style={styles.homeinput}
        keyboardType = 'number-pad'
        placeholder='Enter Age'
        value={age}
        onChangeText={text => setAge(text)}
      />
      <TextInput 
        style={styles.homeinput}
        placeholder='Enter Email'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.homeinput}
        value={password}
        placeholder='Enter Password'
        onChangeText={text => setPassword(text)}
        secureTextEntry={passwordVisible}
        right={<TextInput.Icon style={{marginTop: 20}} name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} />}
        />
        <TouchableOpacity 
        style = {[styles.homebtn, styles.registerbtn]}
        disabled={!email || !password}
        onPress = {handleSignUp}
        >
            <Text style={styles.regtext}>
               Sign Up
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text 
            style={styles.alreadytext}
            onPress={() =>
                navigation.navigate('Login')}
            >
            Already a member?
            </Text>
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
       textAlign: 'center',
       justifyContent: 'center',
    },
    hometopic: {
       fontSize: 30,
       fontWeight: 'bold',
       padding: 15,
       textAlign: 'center',
       justifyContent: 'center',
    },
    homeinput: {
        marginTop: 10,
        width: '80%',
        justifyContent: 'center',
        paddingLeft: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 8,
        fontSize: 17,
        height: 40,
    },
    homebtn: {
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 8,
        height: 40,
    },
    registerbtn: {
        backgroundColor: '#0782F9',
    },
    regtext: {
        color:'#fff',
        fontSize: 16,
    },
    alreadytext: {
        color: '#0782F9',
        marginLeft: '10%',
        padding: 5,
    }
  });

export default Signup