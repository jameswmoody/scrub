import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

// Colors
const PRIMARY_COLOR = '#6344FF';
const SECONDARY_COLOR = '#12EDE1';
const PRIMARY_BACKGROUND_COLOR = '#EAEAEA';
const PRIMARY_FONT_COLOR = '#5B5B5B';
const SECONDARY_FONT_COLOR = '#919191';
const FB_COLOR = '#6586CE';
const WHITE = '#FFFFFF';
const BLACK = '#000000';

// Effects
const SHADOW_EFFECT = {
    shadowRadius: 20,
    shadowColor: BLACK
};

const styles = StyleSheet.create({
    // Alignment
    alignRightText: {
        alignSelf: 'stretch',
        textAlign: 'right'
    },
    // Element Styling
    main: {
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
    },
    container: {
        flex: 1,
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 18,
        padding: 20,
        width: deviceWidth * .3,
        backgroundColor: SECONDARY_COLOR
    },
    buttonText: {
        color: WHITE,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    horizontalLine: {
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        width: 20
    },
    header1: {
        paddingTop: 20,
        fontSize: 28,
        color: PRIMARY_FONT_COLOR ,
        fontWeight: 'bold'
    },
    header2: {
        fontSize: 18,
        color: PRIMARY_FONT_COLOR ,
        fontWeight: 'bold'
    },
    header3: {
        padding: 10,
        color: SECONDARY_FONT_COLOR,
        fontSize: 12
    },
    paragraph: {
        padding: 20,
        paddingTop: 10,
        color: SECONDARY_FONT_COLOR,
        fontSize: 16
    },
    italic: {
        fontStyle: 'italic'
    },
    // Navigation
    iconMenu: {
        height: 12
    },
    // Login
    login: {
        backgroundColor: PRIMARY_COLOR
    },
    fbLoginText: {
        fontSize: 16,
        color: WHITE
    },
    fbLoginButton: {
        width: deviceWidth * .6,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: FB_COLOR
    },
    // Explore
    card: {
        backgroundColor: WHITE,
        alignItems: 'center',
        height: deviceHeight * .7,
        width: deviceWidth * .8,
        width: '100%',
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardShadow: {
        shadowOpacity: 0.05,
        ...SHADOW_EFFECT
    },
    cardImage: {
        height: deviceHeight * .35,
        width: deviceWidth * .88
    },
    infoPill: {
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: -14,
        padding: 4,
        backgroundColor: PRIMARY_COLOR
    },
    infoPillText: {
        color: WHITE,
        paddingLeft: 10,
        paddingRight: 10
    },
    matchButton: {
        height: 80,
        width: 80,
        margin: 20,
        marginTop: 10,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        shadowOpacity: 0.15,
        ...SHADOW_EFFECT
    },
    likeIcon: {
        fontSize: 40,
        color: SECONDARY_COLOR
    },
    dislikeIcon: {
        fontSize: 40,
        color: '#dc3545'
    },
    noCards: {
        zIndex: -1,
        height: deviceHeight/2
    },
    // Profile
    profile: {
        backgroundColor: WHITE,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -80,
        borderRadius: 15,
        width: deviceWidth * .8,
        shadowOpacity: 0.3,
        ...SHADOW_EFFECT
    },
    profileImg: {
        width: deviceWidth,
        height: deviceHeight*.6
    },
    textInput: {
        width: deviceWidth,
        padding: 15,
        backgroundColor: WHITE,
        height: 100
    },
    // Edit
    img: {
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 10,
        backgroundColor: WHITE,
    },
    imgRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 15,
    },
    textInput: {
        width: deviceWidth,
        padding: 15,
        backgroundColor: WHITE,
        height: 100
    },
    inner: {
        paddingBottom: 100,
        flex: 1,
        justifyContent: "flex-end",
    }
})

module.exports = styles;
