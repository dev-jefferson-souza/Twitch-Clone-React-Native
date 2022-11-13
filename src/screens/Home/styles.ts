import { StyleSheet, Platform } from "react-native";
import { Dimensions } from 'react-native'

const halfWindowsWidth = Dimensions.get('window').width / 1

export const styles = StyleSheet.create({
    body: {
        backgroundColor:'#f7f7f7',
        height: '100%',
    },
    container: {
        backgroundColor:'#f7f7f7',
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'ios' ? 64 : 50 ,
        paddingHorizontal: 0,
    },
    scrollScreen:{
        width: halfWindowsWidth,
        marginBottom: 62,
        paddingHorizontal: 16,
    },
    title: {
        marginTop: 8,
        fontSize: 38,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 18,
    },
    boxContent:{
        marginTop: 17,
        marginBottom: 17
    },
    scrollFollowed:{
        maxHeight: 188,
    },
    followedCard:{
        maxWidth: 104,
        marginRight: 8,
        marginBottom: 17
    },
    followedImage: {
        width: 94,
        height: 130
    },
    followedText:{
        fontSize: 14,
        fontWeight: '700',
        maxWidth:100,
        marginTop: 6,
    },
    countBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    countText: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.69,
        marginLeft: 4
    },
    channelsRecCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 120,
        //backgroundColor:'red'
    },
    videoThumb:{
        width: 120,
        height: 70,
        marginRight: 20
    },
    countBoxLive: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -18,
        marginLeft: 4
    },
    countTextLive: {
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 4
    },
    liveInfo:{
        height: 100,
        flexDirection: 'column',
        minWidth: '55%',
        
    },
    alignNameIcon:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallIcon:{
        height: 18,
        width: 18,
        borderRadius: 100,
        marginRight: 6
    },
    creatorName: {
        fontWeight: '600',
        fontSize: 16
    },
    liveName: {
        maxWidth: '70%',
        marginTop: 4 ,
        fontWeight: '500',
        fontSize: 12,
    },
    gameName: {
        maxWidth: '70%',
        marginTop: 4 ,
        fontWeight: '500',
        fontSize: 12,
    },
    liveLanguage: {
        fontSize: 12,
        backgroundColor: '#dedede',
        maxWidth: 75,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 50,
        textAlign: 'left',
        marginTop: 8 
    },
    liveOptions: {
        maxHeight: 50,
        width: 4,
        fontWeight: '900',   
    },
    verticalDots:{
        marginTop: 0
    },
    favoriteBox:{
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 42,
        marginBottom: 20,
    },
    favoriteInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    favoriteIcon: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginRight: 8,
    },
    favoriteName:{
        fontWeight: '700',
        fontSize: 16
    },
    favoriteQuantity:{
        opacity: 0.8,
        fontWeight: '400',
        fontSize: 13
    }
})