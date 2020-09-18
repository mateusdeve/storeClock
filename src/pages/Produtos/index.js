import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';

import ProdutosBg from '../../assets/img/produtosBg.png';
import IconBack from '../../assets/img/previous.png';
import supermarket from '../../assets/img/supermarket.png';

import Relogio from '../../assets/img/relogio.png';
import Proximo from '../../assets/img/proximo.png';

import Menu from '../../components/Menu';
import Card from '../../components/Card';

import styles from './styles';

function Produtos() {
  return (
    <View style={styles.container}>
      <ImageBackground source={ProdutosBg} style={styles.content}>
        <Menu
          fristImg={IconBack}
          secondImg={supermarket}
          nameNavigateSecondImg="Carrinho"
        />
        <ScrollView style={{minHeight: 630}}>
          <Card
            fristImg={Relogio}
            title="Mi Band 4"
            subTitle="R$ 150,00"
            icon={Proximo}
          />
          <Card
            fristImg={Relogio}
            title="Mi Band 5"
            subTitle="R$ 350,00"
            icon={Proximo}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Produtos;
