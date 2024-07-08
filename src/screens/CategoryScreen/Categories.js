import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Text as SvgText, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import GradientText from '../../components/GradientText';


const Categories = () => {
    const topics = [
        { title: 'Lifestyle', imageUrl: 'https://www.credihealth.com/media/j6mepa9c9b4fyrcycvveiimhtn7w/healthy-young-woman-warming-up-outdoors-workout-before-training' },
        { title: 'Travel', imageUrl: 'https://www.bsr.org/images/heroes/bsr-travel-hero..jpg' },
        { title: 'Sports', imageUrl: 'https://img.jagranjosh.com/images/2024/January/2112024/indian-sports.webp' },
        { title: 'Cuisine', imageUrl: 'https://facts.net/wp-content/uploads/2022/07/food-world-map-730x487.jpeg' }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.categoryContainer}>
                <View style={styles.heading}>
                    <GradientText text="POPULAR CATEGORIES" style={styles.headingTitle} fontSize="22" xAxisStart="40%" />
                    <TouchableOpacity style={styles.headingButtonContainer}>
                        <Text style={styles.headingButton}>{/*SEE ALL*/}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topics}>
                    {topics.map((topic, index) => (
                        <LinearGradient
                            key={index}
                            colors={['#56CCF2', '#2F80ED']}
                            style={styles.topicBorder}
                        >
                            <View style={styles.topic}>
                                <Image source={{ uri: topic.imageUrl }} style={styles.topicImage} />
                                <Text style={styles.topicTitle}>{topic.title}</Text>
                            </View>
                        </LinearGradient>
                    ))}
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.heading}>
                    <GradientText text="OTHER CATEGORIES" style={styles.headingTitle} fontSize="22" xAxisStart="35%" />
                    <TouchableOpacity style={styles.headingButtonContainer}>
                        <Text style={styles.headingButton}>{/*SEE ALL*/}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topics}>
                    {topics.map((topic, index) => (
                        <LinearGradient
                            key={index}
                            colors={['#56CCF2', '#2F80ED']}
                            style={styles.topicBorder}
                        >
                            <View style={styles.topic}>
                                <Image source={{ uri: topic.imageUrl }} style={styles.topicImage} />
                                <Text style={styles.topicTitle}>{topic.title}</Text>
                            </View>
                        </LinearGradient>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#130b0b',
    },
    categoryContainer: {
        padding: 20,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        paddingBottom: 10,
    },
    headingTitle: {
        height: 40, // Ensure the SVG container has enough height
        width: '70%', // Adjust width as necessary
        textAlign: 'left', // Align text to the left
    },
    headingButtonContainer: {
        width: '30%', // Adjust width as necessary
        alignItems: 'flex-end', // Align button to the right
    },
    headingButton: {
        color: '#ff6f61',
        textDecorationLine: 'underline',
    },
    topics: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    topicBorder: {
        borderRadius: 10,
        marginBottom: 10,
        padding: 1, // This is the border thickness
        width: '30%',
    },
    topic: {
        backgroundColor: '#180b09',
        borderRadius: 9, // To make the inner box fit within the gradient border
        padding: 10,
        alignItems: 'center',
        shadowColor: '#fbf5f5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    topicImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginBottom: 5, // Reduce the space between the image and the text
        resizeMode: 'cover',
    },
    topicTitle: {
        color: '#f5f5f5',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Categories;
