import React, { useState, useEffect } from 'react';
import './stockbar.css';

function StockBar() {
  const [stockData, setStockData] = useState([
    { symbol: "TOST", price: "0", change: "0%", color: "white" },
    { symbol: "GOOG", price: "0", change: "0%", color: "white" },
    { symbol: "OKLO", price: "0", change: "0%", color: "white" },
    { symbol: "NVDA", price: "0", change: "0%", color: "white" },
  ]);

  const portfolioPic = '428a9b4a7e55b187ef';
  const main1 = 'd0025d1477344b';

  const extractStockInfo = ({ meta, values }) => {
    const stockName = meta.symbol;
    const { open, close } = values[0];
    return { stockName, openingPrice: parseFloat(open), closingPrice: parseFloat(close) };
  };

  const calculatePercentage = ({ openingPrice, closingPrice }) => {
    return ((closingPrice - openingPrice) / openingPrice) * 100;
  };

  const getStockData = async (symbol) => {
    try {
      const cachedData = localStorage.getItem(`stockData_${symbol}`);
      if (cachedData) {
        const { stockInfo, timestamp } = JSON.parse(cachedData);
        const lastFetchTime = new Date(timestamp).getTime();
        const currentTime = new Date().getTime();
        if (currentTime - lastFetchTime < 60000) {
          return stockInfo;
        }
      }

      const url = `https://api.twelvedata.com/time_series?apikey=${main1 + portfolioPic}&interval=1day&symbol=${symbol}&outputsize=1`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const stockInfo = extractStockInfo(data);

      localStorage.setItem(`stockData_${symbol}`, JSON.stringify({
        stockInfo,
        timestamp: new Date().toISOString()
      }));

      return stockInfo;
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
      return null;
    }
  };

  const updateStockData = async () => {
    const symbols = ["TOST", "GOOG", "OKLO", "NVDA"];
    const percentages = [];
    
    const newStockData = await Promise.all(
      symbols.map(async (symbol) => {
        const info = await getStockData(symbol);
        if (!info) return null;

        const percentage = calculatePercentage(info);
        percentages.push(percentage);

        return {
          symbol: info.stockName,
          price: info.closingPrice.toFixed(2),
          change: `${percentage.toFixed(3)}%`,
          color: percentage < 0 ? 'red' : percentage > 0 ? 'green' : 'yellow'
        };
      })
    );
    setStockData(newStockData.filter(Boolean));
  };


  return (
    <div className="stockBar">
      <section id="moving">
        <div id="infoBox" className="label-box2">
          Stocks I am <br /> Currently <br /> Invested In:
          <br />
        </div>
        {stockData.map((stock, index) => (
          <div
            key={stock.symbol}
            id={`box${index + 1}`}
            className={`label-box${index + 1}`}
          >
            {stock.symbol}
            <br />
            <span style={{ fontWeight: 'bold' }}>{stock.price}</span>
            <br />
            <span style={{ color: stock.color }}>{stock.change}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default StockBar;