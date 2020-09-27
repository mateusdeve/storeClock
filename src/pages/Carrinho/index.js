import React from 'react';
import styles from './styles';

import ProdutosBg from '../../assets/img/produtosBg.png';
import IconBack from '../../assets/img/previous.png';
import homeRun from '../../assets/img/home-run.png';
import {View, ImageBackground, ScrollView, Text} from 'react-native';
import Menu from '../../components/Menu';
import CardCarrinho from '../../components/CardCarrinho';
import Relogio from '../../assets/img/relogio.png';
import Cancel from '../../assets/img/cancel.png';

import {GlobalContext} from '../../GlobalContext';

const Carrinho = () => {
  const global = React.useContext(GlobalContext);

  const [valorTotal, setValorTotal] = React.useState(0);
  const [itens, setItens] = React.useState(0);

  const result = global.produtos.reduce((cont, arr) => {
    return cont + arr.valor;
  }, 0);

  const item = global.produtos.length;

  React.useEffect(() => {
    setValorTotal(result);
    setItens(item);
  }, [result, item]);

  return (
    <View style={styles.container}>
      <ImageBackground source={ProdutosBg} style={styles.content}>
        <Menu
          fristImg={IconBack}
          secondImg={homeRun}
          nameNavigateSecondImg="Home"
        />
        <ScrollView style={{minHeight: 630}}>
          {global.produtos === '' ? <Text>Carrinho Vazio</Text> : null}
          {global.produtos.map((produto, index) => {
            return (
              <CardCarrinho
                key={index}
                fristImg={Relogio}
                title={produto.title}
                subTitle={produto.valor}
                icon={Cancel}
              />
            );
          })}
          <View style={styles.groupTotal}>
            <Text style={styles.totalText}>Total: R$ {valorTotal}</Text>
            <Text style={styles.totalText}>Itens: {itens}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Carrinho;
