import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    // Alignment
    alignRightText: {
        alignSelf: 'stretch',
        textAlign: 'right'
    },
    // Element Styling
    main: {
        backgroundColor: '#eaeaea',
    },
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 18,
        padding: 20,
        width: deviceWidth * .3,
        backgroundColor: '#12ede1'
    },
    buttonText: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    horizontalLine: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        width: 20
    },
    header1: {
        paddingTop: 30,
        fontSize: 28,
        color: '#5b5b5b',
        fontWeight: 'bold'
    },
    header2: {
        fontSize: 18,
        color: '#5b5b5b',
        fontWeight: 'bold'
    },
    header3: {
        padding: 10,
        color: '#919191',
        fontSize: 12
    },
    paragraph: {
        padding: 20,
        paddingTop: 10,
        color: '#919191',
        fontSize: 16
    },
    italic: {
        fontStyle: 'italic'
    },
    // Navigation
    iconMenu: {
        height: 12
    },
    // Profile
    profile: {
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.3,
        shadowRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 0 },
        marginTop: -80,
        borderRadius: 15,
        width: deviceWidth * .8,
    },
    profileImg: {
        width: deviceWidth,
        height: deviceHeight*.6,
    },
    textInput: {
        width: deviceWidth,
        padding: 15,
        backgroundColor: '#fff',
        height: 100
    },
    // Edit
    img: {
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 10,
        backgroundColor: '#fff',
    },
    imgRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 15,
    },
    textInput: {
        width: deviceWidth,
        padding: 15,
        backgroundColor: '#fff',
        height: 100
    },
    inner: {
        paddingBottom: 100,
        flex: 1,
        justifyContent: "flex-end",
    }
})

module.exports = styles;
