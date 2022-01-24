import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

export function Task(){
  return(
    <View style={styles.container}>

      <View style={{
        width: 85,
        height: 85,
        backgroundColor: '#DDE',
        borderRadius: 42.5
      }}>
      </View>
   
      <View style={styles.footer}>
        <Text style={styles.text}>Cabeleleira leila</Text>
        <Text style={styles.text}>Pozzobon</Text>
        <Text style={styles.textBold}>Votuporanga - SP</Text>
        <View style={styles.gold}>
          <Icon name="star" size={16} color="#C2B42F"/>
          <Text style={{color: '#C2B42F', paddingLeft: 5}}>
            5.0 (97)
          </Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    borderRadius: 7,
    height: 150,
    padding: 18,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: .9
  },
  footer: {
    justifyContent: 'center',
    marginLeft: 15
  },
  text: {
    fontFamily: 'Poppins-Regular'
  },
  textBold: {
    fontFamily: 'Poppins-Medium',
  },
  gold: {
    flexDirection: 'row',
  }
})
