import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Menu = (props) => {
  const {goBack} = useNavigation();
  const {navigate} = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  function handleNavigate() {
    navigate(props.nameNavigateSecondImg);
  }

  return (
    <View style={styles.groupMenu}>
      <RectButton style={styles.buttonIcon} onPress={handleNavigationBack}>
        <Image source={props.fristImg} />
      </RectButton>
      <RectButton style={styles.buttonIcon} onPress={handleNavigate}>
        <Image source={props.secondImg} />
      </RectButton>
    </View>
  );
};

export default Menu;
