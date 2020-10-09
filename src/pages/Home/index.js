import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import styles from './styles';

import BgImage from '../../../src/assets/img/inicio.png';
import Logo from '../../../src/assets/img/StartBuy.png';

import {RectButton} from 'react-native-gesture-handler';

function Home({navigation}) {
  function handleNavigationProdutos() {
    navigation.navigate('Produtos');
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={BgImage}
        style={styles.content}>
        <View style={styles.viewLogo}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Vamos as Compras?</Text>
          <RectButton style={styles.button} onPress={handleNavigationProdutos}>
            <Text style={styles.buttonText}>Vamos Lá</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Home;
