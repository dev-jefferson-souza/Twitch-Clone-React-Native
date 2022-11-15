import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData  } from 'react-native';
import  EyeIcon  from '../../assets/eye.png'
import { Feather } from '@expo/vector-icons'; 
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export  const Login = ({navigation}) => {

  //Usuário que será logado
  const preUser = ({
    name: 'FredHSQ',
    password: 'reactnative'
  })

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //Fazendo as informações serem alteradas assim que usúario digita algo.
  const onChangeName = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserName(value);
  }

  const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    const value = e.nativeEvent.text;
    setUserPassword(value);
  }

  const signin = () => {
    if(userName === preUser.name && userPassword === preUser.password){
      navigation.reset({
        index: 0,
        routes: [{name: "Home"}]
      })
    } else{
      alert("Usuário ou senha inválida. Tente novamente!")
    }
  }
  
  //Alterando icone e exibindo a senha
  const [eyeIcon, setEyeIcon] = useState("eye")
  const [showPassword, setShowPassword] = useState(true);
  const showHide = () => {
    setShowPassword(!showPassword)
    if(eyeIcon === "eye"){
      setEyeIcon("eye-off")
    } else{
      setEyeIcon("eye")
    }
  }


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
            value={userName}
            onChange={onChangeName}

            selectionColor={'#9147ff'}
            style={styles.formInput}
            
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View style={styles.formView}>
          <Text style={styles.formSubtitle}>Password</Text>
          <View style={styles.passwordInput}>
            <TextInput 
              value={userPassword}
              onChange={onChangePassword}

              selectionColor={'#9147ff'}
              style={styles.formInput}

              autoCorrect={false}
              autoCapitalize='none'
              returnKeyType='done'
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={{alignItems:"center"}}
              onPress={() => showHide()}
            >
            <Feather
              style={styles.eyeIcon}
              name= {eyeIcon}
              size={20}
              color="black"
            />
            </TouchableOpacity> 
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
            style={styles.loginBtn}
            onPress={() => signin()}
          >
            
          <Text
            style={styles.loginTxt}
          >
            Log in
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
  
}
