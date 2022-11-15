import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        minHeight: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 200,
    },
    boxRight: {
        flexDirection: 'row',
        alignItems:'center'
    },
    navIcons: {
        width: 20,
        height: 20,
        marginRight: 24,
        opacity: 1,
        marginLeft: 6
    },
    createBtn: {
        flexDirection:'row',
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems:'center',
        backgroundColor:'#dedede',
        borderRadius: 20,
        marginLeft: 8
    },
    createIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    createText: {
        fontSize: 14,
        fontWeight: '400'
    }
})
