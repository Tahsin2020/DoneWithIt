import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera'

export default function App() {
  const [hasCameraPermission,setHasCameraPermission] = useState();
  const [hasMicrophonePermission,setHaMicrophonePermission] = useState();

  useEffect(()=>{
    (async () =>{
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
    })();
  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
