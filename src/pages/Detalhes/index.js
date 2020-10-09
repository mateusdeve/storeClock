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

import {GlobalContext} from '../../GlobalContext';

const Detalhes = ({route}) => {
  const {add} = React.useContext(GlobalContext);
  const {title} = route.params;
  const {subTitle} = route.params;

  const produto = {
    id: route.params.id,
    title: route.params.title,
    valor: route.params.subTitle,
  };

  function handleAddArrayProdutos() {
    add(produto);
  }

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
            <Text style={styles.bodyTitulo}>{title}</Text>
            <Text style={styles.bodySubTitulo}>R$ {subTitle}</Text>
          </View>
          <View style={styles.viewImg}>
            <Image style={styles.imgRelogio} source={Relogio} />
          </View>
          <View style={styles.groupButtons}>
            <RectButton>
              <Image source={Home} />
            </RectButton>
            <RectButton
              onPress={handleAddArrayProdutos}
              style={styles.buttonAdd}>
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
