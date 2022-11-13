
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

export const Navbar = () => {
    
  return (
    
    <View style={[styles.navbar, styles.shadowProp, styles.elevation]}>
        <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.iconBox}>
                <Entypo
                    name='heart'
                    size={24}
                    color={'#9147ff'}
                />
                <Text style={styles.iconTextUsing}>Following</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.iconBox}>
                <Ionicons
                    name="ios-compass-outline"
                    size={28}
                    color="black"
                />
                <Text style={styles.iconText}>Discover</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.iconBox}>
                <FontAwesome5
                    style={{marginBottom: 2, marginTop: 8, transform: [{ rotate: '90deg' }]}}
                    name="clone"
                    size={20}
                    color="black"
                />
                <Text style={styles.iconText}>Browse</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.iconBox}>
                <EvilIcons
                    style={{marginBottom: 0, marginTop: 4}}
                    name="search"
                    size={34}
                    color="black"
                />
                <Text style={styles.iconText}>Search</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}
