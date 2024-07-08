import { StyleSheet, Dimensions, } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
export const createStyles = (theme) => {
  return StyleSheet.create({
    homeContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#130b0b',
    },
    
    liveUpdateContainer: {
    },
    liveLargeBox: {
        position: 'relative',
        borderLeftWidth: 1,
        borderLeftColor: '#ededed',
        paddingVertical: 10,
        paddingLeft: 15,
        marginBottom: 10,
    },
    liveUpdateHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    liveUpdateLabel: {
        backgroundColor: '#f05127',
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 11,
        padding: 3,
        lineHeight: 14,
        marginRight: 6,
    },
    liveUpdateImage: {
        width: '100%',
        height: 200,
        marginTop: 10,
    },
    liveLargeBoxItem: {
        position: 'relative',
        paddingTop: 35,
    },
    liveUpdateTimeStamp: {
        fontSize: 12,
        color: '#888',
    },
    liveUpdateSubHeading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
        color: theme.textColor,
    },
    moreLiveUpdates: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    moreLiveUpdatesText: {
        color: '#7b1c18',
        textTransform: 'capitalize',
        fontSize: 12,
        fontWeight: '600',
    },
  });
};