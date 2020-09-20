import React from 'react';
import styles from './styles';
import {View, Text, ImageBackground, Image} from 'react-native';

import ProdutosBg from '../../assets/img/produtosBg.png';
import IconBack from '../../assets/img/previous.png';
import supermarket from '../../assets/img/supermarket.png';
import Relogio from '../../assets/img/relogio.png';

import Home from '../../assets/img/home.png';
import IconAdd from '../../assets/img/buttonAdd.png';
import Loupe from '../../assets/img/loupe.png';

import Menu from '../../components/Menu';
import {RectButton} from 'react-native-gesture-handler';

const Detalhes = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ProdutosBg} style={styles.content}>
        <Menu
          fristImg={IconBack}
          secondImg={supermarket}
          nameNavigateSecondImg="Carrinho"
        />
        <View style={styles.body}>
          <View style={styles.groupTitle}>
            <Text style={styles.bodyTitulo}>Mi Band 5</Text>
            <Text style={styles.bodySubTitulo}>Xiaomi</Text>
          </View>
          <View style={styles.viewImg}>
            <Image style={styles.imgRelogio} source={Relogio} />
          </View>
          <View style={styles.groupButtons}>
            <RectButton>
              <Image source={Home} />
            </RectButton>
            <RectButton style={styles.buttonAdd}>
              <Image source={IconAdd} />
            </RectButton>
            <RectButton>
              <Image source={Loupe} />
            </RectButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Detalhes;
