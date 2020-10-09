import React from 'react';
import {Text, Image, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {GlobalContext} from '../../GlobalContext';

import styles from './styles';
const CardCarrinho = (props) => {
  const {remove} = React.useContext(GlobalContext);

  var valorFormatado = props.subTitle.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  function handleDeleteItem() {
    console.log(props.id);
    remove(props.id);
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.viewImg}>
            <Image source={props.fristImg} style={styles.imgRelogio} />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.titleCard}>{props.title}</Text>
            <Text style={styles.subTitleCard}>R$ {valorFormatado}</Text>
          </View>
          <View style={styles.buttonCard}>
            <RectButton onPress={() => remove(props.id)}>
              <Image source={props.icon} style={styles.imgButtonCard} />
            </RectButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardCarrinho;
