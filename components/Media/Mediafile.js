import { Alert } from 'react-native'
import React, { Component, createContext } from 'react'
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext()
export class Mediafile extends Component {
    constructor(props){
        super(props)
        this.state = {
            audioFiles: []
        }
    }
    permisionAlert = () => {
        Alert.alert('Permission Required', 'This app need to read media files!', [{
            text: 'I am ready',
            onPress: () => {
                this.getPermission()
            }
        },{
            text: 'Cancel',
            onPress: () => {
                this.permisionAlert()
            }
        }])
    }

    getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
        })
        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: media.totalCount,
        })
        this.setState({...this.state, audioFiles: media.assets})
    }

    getPermission = async () => {
        const permision = await MediaLibrary.getPermissionsAsync()
        if(permision.granted){
            //get all songs
            this.getAudioFiles()
        }
        
        if(!permision.granted && permision.canAskAgain){
            //request for permission
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync()
            if(status === 'denied' && canAskAgain){
                //alert the user to allow permissions
                this.permisionAlert()
            }
            if(status === 'granted'){
                //get all songs
                this.getAudioFiles()
            }
        }
    }

    componentDidMount(){
        this.getPermission()
    }
  render() {
        return( 
            <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
                {this.props.children}
            </AudioContext.Provider>
        );
  }
}

export default Mediafile