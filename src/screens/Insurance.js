import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/native'
import CommonHeader from '../common/CommonHeader'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const Insurance = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />

      <View style={[styles.rechargeAndBills]}>

        <View style={styles.quotesView}>
          <Text style={styles.heading}>Vehicle Insurance</Text>
          <View style={styles.searchBox}>
            <Text>Enter Vehicle Number</Text>
            <TouchableOpacity style={styles.startSIPBtn}>
              <Text style={styles.btnTxt}>View Quotes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.heading}>Motor and Travel</Text>
        <View style={styles.transferView}>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/motorcycle.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Bike'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/car.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Car'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/world.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Travel'}</Text>
          </TouchableOpacity>

        </View>

      </View>
      <View style={[styles.rechargeAndBills, { marginBottom: moderateVerticalScale(100) }]}>



        <Text style={styles.heading}>Health and Life</Text>
        <View style={styles.transferView}>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/protection.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Term Life'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/patient.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Accident'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/insurance.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Super Top ups'}</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

export default Insurance
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  searchBox: {
    width: '94%',
    justifyContent: 'space-between',
    height: verticalScale(45),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: .8,
    borderColor: '#929292',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
    alignItems: "center",
    paddingRight: moderateScale(10)
  },
  search: {
    width: scale(15),
    height: scale(15)
  }, searchText: {
    marginLeft: moderateScale(20),
    color: '#929292',
    fontSize: moderateScale(16)
  },
  sipView: {
    width: '94%',

    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  sipTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: moderateVerticalScale(10)
  },
  sipdesc: {
    color: '#929292',
    marginTop: moderateVerticalScale(5),
    fontSize: moderateScale(14)
  }, startSIPBtn: {
    backgroundColor: 'purple',
    width: scale(120),
    height: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    marginTop: moderateVerticalScale(15),
    flexDirection: 'row',
    marginBottom: moderateVerticalScale(10)
  },
  btnTxt: {
    color: 'white',
    fontWeight: '600',
  },
  icon: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
    marginLeft: moderateScale(10)
  },
  sipImage: {
    width: scale(100),
    height: scale(100), resizeMode: 'contain'
  },
  rechargeAndBills: {
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',

    width: '94%',

  }, transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(20),
    marginBottom: moderateVerticalScale(15)

  },
  transferTab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  otherOptionTab: {
    width: '31%',
    height: verticalScale(60),
    backgroundColor: '#277be8',
    borderRadius: moderateScale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: scale(22),
    height: scale(22),
    tintColor: 'white',
  },
  transferCard: {
    width: scale(36),
    height: scale(36),
    borderRadius: moderateScale(10),
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  quotesView: {
    width: '94%',
    height: verticalScale(100),
    backgroundColor: '#bad1f7',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10)
  }
})
