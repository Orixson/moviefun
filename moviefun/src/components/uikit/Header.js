import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../../../constants'

const Header = ({ detail, leftIcon, leftColor, headerColor, title, onPress }) => {
  return (
    <View style={[styles.viewStyle, { backgroundColor: headerColor }]}>
      {leftIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[styles.leftButtonStyle, { paddingLeft: detail ? 10 : 25 }]} color={leftColor} />
        </TouchableOpacity>
      )}
      <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}>
        {title}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    height: 122
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 40,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 75

  },
  leftButtonStyle: {
    paddingTop: 50,
    fontSize: 35

  }
})

export default Header;
