import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default function Teste({navigation}){
  return(
    <View style={styles.container}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginBottom: 15
      }}>
        Componente teste
      </Text>
      <TouchableOpacity 
        style={{
          paddingLeft: 10,
          fontFamily: 'Poppins-Regular',
          fontSize: 16,
        }}
        onPress={() => navigation.navigate('Agenda')}
      >
        <Text style={{
          color: 'red',
          borderWidth: 1,
          borderColor: 'purple',
          padding: 10
        }}>
          clica aqui pra ir pra outro componente
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  }
})