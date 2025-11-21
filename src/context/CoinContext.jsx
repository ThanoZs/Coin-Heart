import React, { createContext, useState, useEffect } from "react";

// Create the context
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  // State
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  // Fetch coins from API
  const fetchAllCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllCoin(data); // Save data in state
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch coins when component mounts or currency changes
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  // Context value to provide
  const contextValue = {
    allCoin,
    currency,
    setCurrency,
    fetchAllCoin,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
