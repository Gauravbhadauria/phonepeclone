import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const CommonHeader = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.header}>
    <View style={styles.header2}>
      <View style={styles.headerLeftView}>
        <View>
          <Image
            source={require('../images/man.png')}
            style={styles.user}
          />
          <Image
            source={require('../images/flag.png')}
            style={styles.flag}
          />
        </View>
        <View style={{marginLeft: moderateScale(10)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.home}>Home</Text>
            <Image
              source={require('../images/down.png')}
              style={styles.dropdown}
            />
          </View>
          <Text style={styles.address}>1285,Street No 2,Noida ,UP</Text>
        </View>
      </View>
      <View style={styles.headerRightView}>
       <TouchableOpacity onPress={()=>{
        navigation.navigate("QrCodeScanner")
       }}>
       <Image
          source={require('../images/qr-code.png')}
          style={styles.icons}
        />
       </TouchableOpacity>
        <Image
          source={require('../images/bell.png')}
          style={[
            styles.icons,
            {marginLeft: moderateScale(15), marginRight: moderateScale(15)},
          ]}
        />
        <Image
          source={require('../images/help.png')}
          style={styles.icons}
        />
      </View>
    </View>
  </View>
  )
}

export default CommonHeader
const styles=StyleSheet.create({
    header: {
        width: '100%',
        height: verticalScale(80),
        backgroundColor: 'purple',
        justifyContent: 'flex-end',
      },
      header2: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
      },
      headerLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      user: {
        width: scale(40),
        height: scale(40),
      },
      flag: {
        width: scale(20),
        height: scale(20),
        position: 'absolute',
        right: -moderateScale(3),
        bottom: moderateScale(0),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: 'white',
      },
      home: {
        fontSize: moderateScale(18),
        color: 'white',
        fontWeight: '600',
      },
      dropdown: {
        width: scale(16),
        height: scale(16),
        tintColor: 'white',
        marginLeft: moderateScale(5),
      },
      address: {
        color: 'white',
        fontSize: moderateScale(12),
        marginTop: moderateScale(2),
      },
      headerRightView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icons: {
        width: scale(22),
        height: scale(22),
        tintColor: 'white',
      },
})