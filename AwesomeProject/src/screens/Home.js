import React from 'react'
import {
  StyleSheet,
} from 'react-native'

import {Cards} from '../components/Cards'
import {Header} from '../components/Header'
import {List} from '../components/List'

export default function Home(){
  return(
    <>
      <Header/>
      <Cards/>

      <List/>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    height: 250,
    backgroundColor: '#222'
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    marginLeft: 15
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10
  },
  cards : {
    position: 'absolute',
    marginTop: 150
  }
})