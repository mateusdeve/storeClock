import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [produtos, setProdutos] = React.useState([]);
  const [totalValue, setTotalValue] = React.useState();

  React.useEffect(() => {
    let value = 0;
    produtos.map((item) => (value = value + item.valor));
    setTotalValue(value);
  }, [produtos, totalValue]);

  function add(produto) {
    const newProduto = produtos;
    const newProdutoJson = newProduto[0];
    if (newProdutoJson != undefined) {
      if (produto.title === newProdutoJson.title) {
        console.log('teste');
      }
    }
    newProduto.push(produto);
    setProdutos([...newProduto]);
    console.log(produtos);
  }

  function remove(index) {
    let newProduto = produtos.filter((item) => item.id !== index);
    setProdutos([...newProduto]);
  }

  return (
    <GlobalContext.Provider value={{produtos, totalValue, add, remove}}>
      {children}
    </GlobalContext.Provider>
  );
};
