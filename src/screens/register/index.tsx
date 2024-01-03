import React, {memo, useState} from 'react';
import styles from './styles';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Logo from '../../components/loginComponent/Logo';
import Header from '../../components/loginComponent/HeaderLogin';
import Button from '../../components/loginComponent/ButtonLogin';
import TextInput from '../../components/loginComponent/TextInput';
import BackButton from '../../components/loginComponent/BackButton';
import {theme} from '../../theme/theme';
import {Navigation} from '../../config/typesNavigation';
import {ViewBackGround, TextInputCtrl} from '../../components';
import ButtonLogin from '../../components/loginComponent/ButtonLogin';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';
// import {
//     emailValidator,
//     passwordValidator,
//     nameValidator,
// } from '../core/utils';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [valueDSN, setValueDSN] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(true);
  // const _onSignUpPressed = () => {
  //     const nameError = nameValidator(name.value);
  //     const emailError = emailValidator(email.value);
  //     const passwordError = passwordValidator(password.value);

  //     if (emailError || passwordError || nameError) {
  //         setName({ ...name, error: nameError });
  //         setEmail({ ...email, error: emailError });
  //         setPassword({ ...password, error: passwordError });
  //         return;
  //     }

  //     navigation.navigate('Dashboard');
  // };

  return (
    //   <Key

    <ViewBackGround>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{flex: 1}}>
        {/* <BackButton goBack={() => navigation.navigate('LoginScreen')} /> */}
        <View style={styles.ViewWrapLogo}>
          <Logo />
        </View>
        <TouchableOpacity style={styles.ViewSetting}>
          <SvgXml
            xml={`${svgs.SvgSetting}`}
            width={30}
            height={30}
            fill={'white'}
          />
        </TouchableOpacity>
        <Header>Create Account</Header>
        <View style={{marginHorizontal: 12, marginTop: 20}}>
          {/* <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={!!name.error}
          errorText={name.error}
        /> */}
          <View>
            <Text style={styles.TxtEmail}> Tài khoản</Text>
            <TextInputCtrl
              placeholder={''}
              style={styles.ViewTextInput}
              onChangeText={(text: string) => setName(text)}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.TxtEmail}>Mật khẩu</Text>
            <TextInputCtrl
              placeholder={''}
              style={styles.ViewTextInput}
              onChangeText={(text: string) => setPassword(text)}
              IconRight={
                <TouchableOpacity
                  onPress={() => setIsShow(!isShow)}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 12,
                  }}>
                  {isShow ? (
                    <SvgXml
                      xml={`${svgs.SvgEye}`}
                      width={25}
                      height={25}
                      fill={'white'}
                    />
                  ) : (
                    <SvgXml
                      xml={`${svgs.SvgEyeHide}`}
                      width={25}
                      height={25}
                      fill={'white'}
                    />
                  )}
                </TouchableOpacity>
              }
              secureTextEntry={isShow}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.TxtEmail}> DSN</Text>
            <TextInputCtrl
              placeholder={''}
              style={styles.ViewTextInput}
              onChangeText={(text: string) => setValueDSN(text)}
            />
          </View>
          {/* <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        /> */}

          {/* <Button mode="contained" style={styles.button}>
          Sign
        </Button> */}
          <View style={{marginHorizontal: 6}}>
            <ButtonLogin
              mode="contained"
              onPress={() => {}}
              style={{height: 50, marginTop: 50}}>
              Sign Up
            </ButtonLogin>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ViewBackGround>
  );
};

// const styles = StyleSheet.create({
//   label: {
//     color: theme.colors.secondary,
//   },
//   button: {
//     marginTop: 24,
//   },
//   row: {
//     flexDirection: 'row',
//     marginTop: 4,
//   },
//   link: {
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//   },
// });

export default memo(RegisterScreen);
