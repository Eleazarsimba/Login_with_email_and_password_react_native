import { Text, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from './Mediafile'

export class AppNavigator extends Component {
    static contextType = AudioContext
  render() {
    return (
      <ScrollView style={styles.MusicL}>
        {this.context.audioFiles
        .sort((a,b) =>  a.filename > b.filename ? 1 : -1)
        .map(item => 
            <Text 
                style={{
                    padding: 15,
                    borderBottomColor: 'white', 
                    borderBottomWidth: 1}} 
                key={item.id}>{item.filename}
            </Text>
        )}
    </ScrollView>
    )
  }
  
}
const styles = StyleSheet.create({
    MusicL:{
        marginTop: -30,
        marginBottom: 30,
    }
  });

export default AppNavigator