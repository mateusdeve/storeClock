import React from 'react';
import {Text, Image, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';
const Card = (props) => {
  const {navigate} = useNavigation();

  function handleNavigation() {
    navigate('Detalhes', {
      id: props.id,
      title: props.title,
      subTitle: props.subTitle,
    });
  }

  var valorFormatado = props.subTitle.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
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
            <RectButton onPress={handleNavigation}>
              <Image source={props.icon} style={styles.imgButtonCard} />
            </RectButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default Card;
