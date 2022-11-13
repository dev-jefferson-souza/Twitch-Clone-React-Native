import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import  EyeIcon  from '../../assets/eye.png'
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export  const Login = () => {

  return (
    <View style={styles.container}>
      <View style={styles.goBack}>
        <MaterialIcons
                  name="arrow-back"
                  size={26}
                  color={"#000"}
              />
        <Text style={styles.title}>Log In</Text>
      </View>
      <View>
        <View style={styles.formView}>
          <Text style={styles.formSubtitle}>Username</Text>
          <TextInput 
           selectionColor={'#9147ff'}
            style={styles.formInput}
          />
        </View>
        <View style={styles.formView}>
          <Text style={styles.formSubtitle}>Password</Text>
          <View style={styles.passwordInput}>
            <TextInput 
              selectionColor={'#9147ff'}
              secureTextEntry={true}
              style={styles.formInput}
            />   
            <Image 
            source={EyeIcon}
            style={styles.eyeIcon}
            />
          </View>
          <TouchableOpacity style={styles.troubleBtn}>
          <Text
            style={styles.troubleTxt}
          >
            Trouble logging in?
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.loginBtn}>
          <Text
            style={styles.loginTxt}
          >
            Log in
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  
}
