import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';

import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../GlobalContext';
import supermarket from '../../assets/img/supermarket.png';

const Menu = (props) => {
  const global = React.useContext(GlobalContext);
  const [item, setItem] = React.useState(0);

  const result = global.produtos;
  React.useEffect(() => {
    setItem(result.length);
  }, [result]);

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
      {props.secondImg === supermarket ? (
        <RectButton style={styles.buttonIconCarrinho} onPress={handleNavigate}>
          <Text>{Object.keys(global.produtos).length}</Text>
          <Image source={props.secondImg} />
        </RectButton>
      ) : (
        <RectButton style={styles.buttonIcon} onPress={handleNavigate}>
          <Image source={props.secondImg} />
        </RectButton>
      )}
    </View>
  );
};

export default Menu;
