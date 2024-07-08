import React, { useRef, useState, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { 
          StyleSheet, 
          View, 
          Text, 
          Image, 
          FlatList, 
          Dimensions, 
          ActivityIndicator 
        } from 'react-native';

const { height } = Dimensions.get('window');
const BOX_HEIGHT = height * 0.6;

const initialData = [
  {
    id: '1',
    author: 'sujit',
    date: '12/05/2024',
    imageUrl: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/667d40be37f96-----273644873-16x9.png',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis voluptatem minus fugit aliquam. Quia eligendi ipsa sit exercitationem esse?.........Read more',
  },
  {
    id: '2',
    author: 'john',
    date: '10/06/2024',
    imageUrl: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit eligendi ullam? Recusandae pariatur at eveniet?.........Read more',
  },
  {
    id: '3',
    author: 'jane',
    date: '05/07/2024',
    imageUrl: 'https://placekitten.com/801/400',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, officia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempore. Nam adipisci quas officia consequuntur maiores?.........Read more',
  },
  {
    id: '4',
    author: 'alice',
    date: '20/08/2024',
    imageUrl: 'https://placekitten.com/802/400',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum tempore, minima amet deserunt quibusdam. Quibusdam maxime facilis?.........Read more',
  },
];

const ArticleDetail = () => {
  const flatListRef = useRef(null);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const fetchMoreData = useCallback(() => {
    if (loading) return;

    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const moreData = [
        {
          id: '5',
          author: 'sujit',
          date: '12/05/2025',
          imageUrl: 'https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/667d40be37f96-----273644873-16x9.png?size=948:533',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis voluptatem minus fugit aliquam. Quia eligendi ipsa sit exercitationem esse?.........Read more',
        },
        {
          id: '6',
          author: 'john',
          date: '10/06/2025',
          imageUrl: 'https://placekitten.com/800/400',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, pariatur',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit eligendi ullam? Recusandae pariatur at eveniet?.........Read more',
        },
        {
          id: '7',
          author: 'jane',
          date: '05/07/2025',
          imageUrl: 'https://placekitten.com/801/400',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, officia',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempore. Nam adipisci quas officia consequuntur maiores?.........Read more',
        },
        {
          id: '8',
          author: 'alice',
          date: '20/08/2025',
          imageUrl: 'https://placekitten.com/802/400',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum tempore, minima amet deserunt quibusdam. Quibusdam maxime facilis?.........Read more',
        },
      ];
      setData(prevData => [...prevData, ...moreData]);
      setLoading(false);
    }, 2000);
  }, [loading]);

  const handleScroll = useCallback((event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const slideOffset = BOX_HEIGHT * 2; // Offset for 2 slides

    // Check if user has scrolled up by 2 items
    if (scrollOffset - currentOffset >= slideOffset) {
      fetchMoreData();
    }
    setScrollOffset(currentOffset);
  }, [scrollOffset, fetchMoreData]);

  const renderItem = ({ item }) => (
    <LinearGradient
      colors={['#220f0e', '#b0afb0', '#220f0e']}
      start={{ x: 0.0, y: 0.5 }} end={{ x: 1.0, y: 0.5 }}
      style={styles.liveUpdateGradient}
    >
      <View style={styles.box}>
        <Image source={{ uri: item.imageUrl }} style={styles.img} />
        <Text style={styles.author}>author: {item.author} <Text style={styles.date}>{item.date}</Text></Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.social}>
          <View style={styles.singleIcon}></View>
          <View style={styles.singleIcon}></View>
          <View style={styles.singleIcon}></View>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={BOX_HEIGHT}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16} // Adjust throttle to control how often the scroll event fires
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130b0b',
  },
  liveUpdateGradient: {
    borderRadius: 15,
    padding: 0.2, // Further reduced padding for an even thinner border
    marginTop: 4,
  },
  box: {
    height: BOX_HEIGHT,
    width: '100%',
    backgroundColor: '#130b0b',
    marginBottom: 1,
    marginTop: 1,
    position: 'relative',
    borderWidth: 1, // Kept border width thin
    borderColor: 'transparent',
    borderRadius: 15,
    padding: 10,
  },
  img: {
    height: 200,
    width: '100%',
    borderRadius: 2,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  author: {
    marginTop: -25,
    paddingTop: 28,
    fontSize: 12,
    color: '#8f8d8d',
    textTransform: 'capitalize',
    backgroundColor: '#130b0b',
    height: 40,
  },
  date: {
    marginLeft: 5,
    fontSize: 12,
    color: '#8f8d8d',
    textTransform: 'capitalize',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    color: '#8f8d8d',
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    color: '#7c7c7c',
    fontWeight: '500',
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  singleIcon: {
    margin: 10,
    height: 40,
    width: 40,
    backgroundColor: '#dedede',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#616161',
  },
  loading: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ArticleDetail;
