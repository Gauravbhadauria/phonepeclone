import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CommonActions } from '@react-navigation/native'
import CommonHeader from '../common/CommonHeader'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const Wealth = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <View style={styles.searchBox}>
        <Image source={require('../images/search.png')} style={styles.search} />
        <Text style={styles.searchText}>Search Mutual Funds</Text>
      </View>
      <View style={styles.sipView}>
        <View>
          <Text style={styles.sipTitle}>Create Wealth with SIP</Text>
          <Text style={styles.sipdesc}>{"6 cr+ SIP investments every month."}</Text>
          <TouchableOpacity style={styles.startSIPBtn}>
            <Text style={styles.btnTxt}>START A SIP</Text>
            <Image source={require('../images/next.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Image source={require('../images/sip.png')} style={styles.sipImage} />
      </View>
      <View style={[styles.rechargeAndBills, { marginBottom: moderateVerticalScale(100) }]}>
        <Text style={styles.heading}>Investment Ideas</Text>
        <View style={styles.transferView}>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/gold-ingots.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Gold'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/growth.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Top Companies'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/calculator.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Tax Saving Funds'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/rupee2.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Start with\n ₹ 100'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transferView}>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/invest.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Best SIP Funds'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/fixed.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Better Than\nFD'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/profits.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'Trending Themes'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transferTab}>
            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
              <Image
                source={require('../images/interest-rate.png')}
                style={[
                  styles.icons,
                  { tintColor: 'purple', width: scale(30), height: scale(30) },
                ]}
              />
            </View>
            <Text style={styles.tranferText}>{'High Returns Funds'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Wealth
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  searchBox: {
    width: '94%',
    height: verticalScale(40),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(30),
    borderWidth: .5,
    borderColor: '#929292',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15)
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
  }, rechargeAndBills: {
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
    height: verticalScale(200),
    width: '94%',
  }, transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(20),
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
})
