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
  const produtos = [
    {
      id: 1,
      image: Relogio,
      title: 'Mi Band 4',
      valor: 150,
      icone: Proximo,
      itens: 1,
    },
    {
      id: 2,
      image: Relogio,
      title: 'Mi Band 5',
      valor: 350,
      icone: Proximo,
      itens: 1,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={ProdutosBg} style={styles.content}>
        <Menu
          fristImg={IconBack}
          secondImg={supermarket}
          nameNavigateSecondImg="Carrinho"
        />
        <ScrollView style={{minHeight: 630}}>
          {produtos.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              fristImg={item.image}
              title={item.title}
              subTitle={item.valor}
              icon={item.icone}
              itens={item.itens}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Produtos;
