import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Signal from '../../assets/icon-signal.png'
import Notification from '../../assets/icon-notification.png'
import Social from '../../assets/icon-social.png'

export const Header = () => {
  return (
    
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
      >
        <Image 
          style={styles.userImage}
          source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6e020d43-b9df-44a5-ae00-beb768bd9dfc-profile_image-300x300.png'}}
        />
      </TouchableOpacity>
      
      <View style={styles.boxRight}>
        <TouchableOpacity
          activeOpacity={0.7}
        >
          <Image
            style={styles.navIcons}
            source={Notification}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
        >
          <Image
            style={styles.navIcons}
            source={Social}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createBtn}
          activeOpacity={0.7}
        >
          <Image
            style={styles.createIcon}
            source={Signal}
          />
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
