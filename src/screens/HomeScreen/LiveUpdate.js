import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ArrowDiv from "./ArrowDiv";
import BlinkingCircle from "./BlinkingCircle";

import { 
          View, 
          Text, 
          Image, 
          ScrollView, 
          StyleSheet, 
          Dimensions, 
          TouchableOpacity,
          FlatList,
       } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const LiveUpdate = () => {
  const live_updates_data = [
    { id: 1, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Online' },
    { id: 2, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Offline' },
    { id: 3, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    { id: 4, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    { id: 5, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    { id: 6, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    { id: 7, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    { id: 8, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
];
  const live_updates_width = live_updates_data.length === 1 ? screenWidth : screenWidth - 45;
  
  const renderItem = ({ item }) => (
    <View style={[styles.liveUpdateCardContainer,{ width: live_updates_width }]}>
          <LinearGradient
            colors={['#220f0e', '#b0afb0', '#220f0e']}
            start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
            style={styles.liveUpdateGradient}
          >
            <View style={styles.liveUpdateCard}>
              <View style={styles.liveUpdateHeading}>
                <ArrowDiv />
                <Text style={styles.headingText}>
                          
                              Train accident LIVE Update: Death toll from Andhra Train Tragedy revises to 13
                </Text>
              </View>
              <View style={styles.liveUpdateImg}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.updateImage} 
                />
              </View>
              <View style={styles.liveUpdateSingleHeading}>
                <Text style={styles.liveUpdateTimeStamp}>
                  <BlinkingCircle /> 
                  17:30 PM Oct 30, 2023
                </Text>
                <TouchableOpacity onPress={() => alert('Navigating to live updates')}>
                    <Text style={styles.liveUpdateSubHeading}>Train movement resumes after trial run; safety commissioner starts probe</Text>
                </TouchableOpacity>
                <Text style={styles.liveUpdateTimeStamp}>
                  <BlinkingCircle /> 
                  17:30 PM Oct 30, 2023
                </Text>
                <TouchableOpacity onPress={() => alert('Navigating to live updates')}>
                    <Text style={styles.liveUpdateSubHeading}>Train movement resumes after trial run; safety commissioner starts probe</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
  );
  return (
    <FlatList
      data={live_updates_data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      pagingEnabled
      snapToInterval={live_updates_width + 10} // Adjust 10 to match the margin/padding
      //snapToAlignment="center"
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  liveUpdateCardContainer: {
    position: 'relative',
    margin: 5,
  },
  liveUpdateGradient: {
    borderRadius: 15,
    padding: 1,
  },
  liveUpdateCard: {
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#130b0b',
    borderRadius: 15,
    padding: 10,
  },
  liveUpdateHeading: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  liveUpdateImg: {
    marginBottom: 10,
  },
  updateImage: {
    height: 200,
    width: '100%',
    borderRadius: 2,
    resizeMode: 'cover',
  },
  liveUpdateSingleHeading: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(247, 247, 247, 0.243)',
    paddingLeft: 15,
  },
  liveUpdateTimeStamp: {
    fontSize: 12,
    color: '#888',
    marginBottom: 1,
  },
  liveUpdateSubHeading: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 10,
      color: '#fff',
  },
});

export default LiveUpdate;
