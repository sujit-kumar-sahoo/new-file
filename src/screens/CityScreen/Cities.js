import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GradientText from '../../components/GradientText';

const Cities = () => {
    const topics = [
        { title: 'Bhubaneswar', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPK28K9_AxD2h7pkU_yqHI78iizqwORwtIVYvLK=w1080-h624-n-k-no' },
        { title: 'Cuttack', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMbOrfpSz_QbfBWl1mMuNpKawoKYs6zDzKNpvnV=w1080-h624-n-k-no' },
        { title: 'Puri', imageUrl: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTuNDAzoHT58h3GitnwX4EvUrdfyIKCAaMlwkI9nkewIMz7JgjlX2lfV6GJYxe4_HaMxBovxSrrNMmGnnkwg99nnS0q7kSNl6V6llLECA' },
        { title: 'Sambalpur', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPW-BtzG0C2v-8RGv0L0YdsqcbiHqGSBXpBJl0-=w1080-h624-n-k-no' }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.categoryContainer}>
                <View style={styles.heading}>
                    <GradientText text="TOP CITIES" style={styles.headingTitle} fontSize="24" xAxisStart="22%" />
                    <TouchableOpacity style={styles.headingButton}>
                        <Text style={styles.headingButtonText}>{/*SEE ALL*/}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topics}>
                    {topics.map((topic, index) => (
                        <View key={index} style={styles.topic}>
                            <Image source={{ uri: topic.imageUrl }} style={styles.topicImage} />
                            <Text style={styles.topicTitle}>{topic.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.heading}>
                    <GradientText text="OTHER CITIES" style={styles.headingTitle} fontSize="24" xAxisStart="30%" />
                    <TouchableOpacity style={styles.headingButton}>
                        <Text style={styles.headingButtonText}>{/*SEE ALL*/}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topics}>
                    {topics.map((topic, index) => (
                        <View key={index} style={styles.topic}>
                            <View style={styles.topicCircle}>
                                <Text style={styles.topicCircleText}>{topic.title.charAt(0)}</Text>
                            </View>
                            <Text style={styles.topicTitle}>{topic.title}</Text>
                        </View>
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
        width: '70%',
    },
    headingButton: {
        width: '30%',
        alignItems: 'flex-end',
    },
    headingButtonText: {
        color: '#ff6f61',
        textDecorationLine: 'underline',
    },
    topics: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    topic: {
        width: '30%',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topicImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    topicCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ff6f61',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    topicCircleText: {
        color: '#fff',
        fontSize: 32,
    },
    topicTitle: {
        color: '#f5f5f5',
        fontSize: 14,
    },
});

export default Cities;
