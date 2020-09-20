import React from 'react';
import styles from './styles';

import ProdutosBg from '../../assets/img/produtosBg.png';
import IconBack from '../../assets/img/previous.png';
import homeRun from '../../assets/img/home-run.png';
import {View, ImageBackground, ScrollView, Text} from 'react-native';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import Relogio from '../../assets/img/relogio.png';
import LoupeRoxa from '../../assets/img/loupeRoxa.png';

const Carrinho = () => {
  const [valorTotal, setValorTotal] = React.useState(0);
  const [itens, setItens] = React.useState(0);

  const produtos = [
    {
      id: 1,
      title: 'Mi Band 4',
      valor: 150,
    },
    {
      id: 2,
      title: 'Mi Band 5',
      valor: 350,
    },
    {
      id: 3,
      title: 'Mi Band 5',
      valor: 350,
    },
  ];

  const result = produtos.reduce((cont, arr) => {
    return cont + arr.valor;
  }, 0);

  const item = produtos.length;

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
          {produtos.map((produto) => {
            return (
              <Card
                key={produto.id}
                fristImg={Relogio}
                title={produto.title}
                subTitle={produto.valor}
                icon={LoupeRoxa}
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
