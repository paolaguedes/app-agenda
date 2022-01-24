import React from 'react'
import {
  SafeAreaView, 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const data = [
  {
    id: '1',
    text: 'Sobre',
    icon: 'questioncircleo',
  },
  {
    id: '2',
    text: 'Logout',
    icon: 'poweroff',
  }
]
export default function Schedule({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginBottom: 15
      }}>Opções</Text>
      {
        data.map(item => (
          <View style={styles.list} key={item.id}>
            <Icon name={item.icon} size={16} color="#1BB13C"/>
            <TouchableOpacity 
            style={{
              paddingLeft: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            }}
            onPress={() => navigation.navigate('Home')}
            >
            <Text>{item.text}</Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    padding: 5
  }
})