import React from 'react'
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native'

import {Task} from './Task'

export function List(){
  return(
    <View style={styles.container}>
    <ScrollView 
    style={styles.list}
    showsHorizontalScrollIndicator={false}
    >
    <Task/>
    <Task/>
    <Task/>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  list: {
    height: 250,
    marginBottom: 15
  }
})

