import { StyleSheet, Platform } from "react-native";
import { Dimensions } from 'react-native'

const halfWindowsWidth = Dimensions.get('window').width / 1

export const styles = StyleSheet.create({
        navbar:{
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        backgroundColor:'#fff',
        width: halfWindowsWidth,
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: -24},
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    iconTextUsing: {
        color: '#9147ff',
        fontSize: 10,
        fontWeight: '400',
        marginTop: 8
    },
    iconText: {
        marginTop: 8,
        color: '#000',
        fontSize: 10,
        fontWeight: '400',
    },
})