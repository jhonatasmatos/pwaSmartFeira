import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCF3EF',
  },

  header: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: width,
  },

  containerTitle: {
    width: 210,
    height: 60,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  firstTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#E25B45'
  },

  secondTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FA6D3F',
    paddingRight: 10
  },

  image: {
    width: 26,
    height: 52,
    marginBottom: 15
  },

  subTitle: {
    width: 210,
    fontSize: 16,
    color: '#796F6F',
    textAlign: 'center'
  },

  containerButton: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 172,
    height: 54,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E25B45'
  },

  textButton: {
    color: '#EFEDED',
    fontSize: 16,
  }

});

export default styles;
