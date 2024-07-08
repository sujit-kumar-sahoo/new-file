// components/AutoSlider.js
import React, { useRef, useState, useEffect } from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const itemWidth = viewportWidth;

const AutoSlider = ({ data }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length;
        carouselRef.current.snapToItem(nextIndex);
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [data.length]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <Carousel
      ref={carouselRef}
      data={data}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: 200, // You can adjust the height as needed
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default AutoSlider;
