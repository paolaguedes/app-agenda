import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

export function Header(){
  return(
    <View style={styles.text}>
      <Icon name="search1" size={20} color="#1BB13C"/>
      <TextInput
        style={styles.input}
        placeholder="pesquisar..."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    paddingLeft: 10,
    borderColor: '#CECECE',
    borderWidth: 1,
    borderRadius: 7
  },
  input: {
    fontFamily: 'Poppins-Regular',
    width: 150
  }
})