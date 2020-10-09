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
    newProduto.push(produto);
    setProdutos([...newProduto]);
  }

  function remove(index) {
    let newProduto = produtos.filter((item) => item.id !== index);
    console.log(newProduto);
    setProdutos([...newProduto]);
  }

  return (
    <GlobalContext.Provider value={{produtos, totalValue, add, remove}}>
      {children}
    </GlobalContext.Provider>
  );
};
