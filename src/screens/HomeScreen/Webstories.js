import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { 
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const Webstories = () => {
    const webstories = [
        { id: 1, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Online' },
        { id: 2, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Offline' },
        { id: 3, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
        { id: 4, image: 'https://images.odishatv.in/uploadimage/library/16_9/16_9_2/recent_photo_1688026932.jpg', status: 'Busy' },
    ];

    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.webStoriesContainer}
        >
            {webstories.map((item) => (
                <View key={item.id} style={styles.webStories}>
                    <LinearGradient
                        colors={['#21D4FD', '#B721FF', '#212cff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.gradientBorder}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.image }} style={styles.webStoriesImg} />
                        </View>
                    </LinearGradient>
                    <Text style={styles.webStoriesText}>{item.status}</Text>
                </View>
            ))}
            <View key='more' style={styles.webStories}>
                    <LinearGradient
                        colors={['#21D4FD', '#B721FF', '#212cff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.gradientBorder}
                    >
                        <View style={styles.imageContainer}>
                            <TouchableOpacity style={styles.moreWebStories} onPress={() => alert('More webstories')}>
                                <Text style={styles.moreWebStoriesText}>&gt;</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <Text style={styles.webStoriesText}>More</Text>
                </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    webStoriesContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    webStories: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 6,
    },
    gradientBorder: {
        padding: 2,  // Adjust the padding to create the desired border width
        borderRadius: 17,  // Adjust the border radius to match the inner image container
    },
    imageContainer: {
        height: 70,
        width: 70,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#0d0c0c',  // Add a background color if needed
    },
    webStoriesImg: {
        height: 68,
        width: 68,
        borderRadius: 15,
        overflow: 'hidden',
    },
    webStoriesText: {
        fontSize: 16,
        color: '#fff',
    },
    moreWebStories: {
        height: 70,
        width: 70,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c0b0b',  // Match the image container background color
    },
    moreWebStoriesText: {
        fontSize: 32,
        color: '#f3ebeb',
    },
});

export default Webstories;
