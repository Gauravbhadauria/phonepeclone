import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import CommonHeader from '../common/CommonHeader';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Stores = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <ScrollView>
        <View style={styles.searchBox}>
          <Image
            source={require('../images/search.png')}
            style={styles.searchIcon}
          />
          <Text style={styles.searchPlaceholder}>
            Search by store name or phone number
          </Text>
        </View>
        <FlatList
          data={[1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.shopItem}>
                <Text style={styles.transactionTime}>
                  Last paid ₹50 ,3 months ago{' '}
                </Text>
                <View style={styles.shopDetails}>
                  <View style={styles.leftSection}>
                    <Image
                      source={require('../images/shoip.jpeg')}
                      style={styles.shopIcon}
                    />
                    <View style={styles.shopNameView}>
                      <Text>XYZ Store</Text>
                      <View style={styles.shopRatingView}>
                        <Image
                          source={require('../images/rating.png')}
                          style={styles.rating}
                        />

                        <Text style={styles.ratingCount}>4.3</Text>
                        <Text
                          style={[
                            styles.ratingCount,
                            {marginLeft: moderateScale(20)},
                          ]}>
                          50 m
                        </Text>
                        <Text
                          style={[
                            styles.ratingCount,
                            {marginLeft: moderateScale(20)},
                          ]}>
                          Closes at 10:00 Pm
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.PayNowBtn}>
                  <Image
                    source={require('../images/down-right.png')}
                    style={styles.paynowIcon}
                  />
                  <Text style={styles.paynNowBtnTxt}>Pay Now</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.categoryCard}>
          <Text style={styles.heading}>Popular Categories</Text>
          <FlatList
            numColumns={4}
            contentContainerStyle={{marginTop:moderateScale(20)}}
            data={[
              {
                icon: require('../images/shop.png'),
                title: 'Kirana & General Stores',
              },
              {
                icon: require('../images/healthy-food.png'),
                title: 'Fruits and vegetables',
              },
              {
                icon: require('../images/turkey.png'),
                title: 'Meat Shop',
              },
              {
                icon: require('../images/medicine.png'),
                title: 'Pharmacy',
              },
              {
                icon: require('../images/pharmacy.png'),
                title: 'Doctor & Path labs',
              },
              {
                icon: require('../images/healthy-food.png'),
                title: 'Fruits and vegetables',
              },
              {
                icon: require('../images/beverages.png'),
                title: 'Food Beverages',
              },
              {
                icon: require('../images/stationery.png'),
                title: 'Stationery',
              },
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.categoryItem}>
                  <Image source={item.icon} style={styles.categoryIcon} />
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Stores;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  searchBox: {
    width: '94%',
    height: verticalScale(45),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(15),
  },
  searchIcon: {
    width: scale(18),
    height: scale(18),
  },
  searchPlaceholder: {
    color: '#9e9e9e',
    marginLeft: moderateScale(15),
    fontSize: moderateScale(15),
  },
  shopItem: {
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    padding: moderateScale(10),
  },
  transactionTime: {
    color: '#9e9e9e',
    fontSize: moderateScale(12),
  },
  shopDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(10),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },
  shopNameView: {
    marginLeft: moderateScale(10),
  },
  shopRatingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(5),
  },
  rating: {
    width: scale(10),
    height: scale(10),
  },
  ratingCount: {
    color: '#9e9e9e',
    marginLeft: moderateScale(3),
  },
  PayNowBtn: {
    width: '96%',
    alignSelf: 'center',
    height: verticalScale(30),
    borderRadius: moderateScale(30),
    borderWidth: 0.4,
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paynowIcon: {
    width: scale(10),
    height: scale(10),
    tintColor: 'purple',
  },
  paynNowBtnTxt: {
    color: 'purple',
    marginLeft: moderateScale(10),
  },
  categoryCard: {
    width: '94%',
    height: verticalScale(200),
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(100),
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  categoryItem: {
    width: '25%',
   
    alignItems: 'center',
    marginTop:moderateVerticalScale(15)
  },
  categoryIcon: {
    width: scale(30),
    height: scale(30),
    tintColor:'purple'
  },
  title:{
    fontSize:moderateScale(12)
    ,textAlign:'center',
    marginTop:moderateVerticalScale(5)
  }
});
