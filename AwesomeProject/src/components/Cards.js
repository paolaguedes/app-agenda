import React from 'react'
import {
  View,
  StyleSheet,

} from 'react-native'

export function Cards(){
  return(
    <View style={styles.card}>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: '#1BB13C',
    borderRadius: 7,
    margin: 15,
    marginTop: 0
  }
})