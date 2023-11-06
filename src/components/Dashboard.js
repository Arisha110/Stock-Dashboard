import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { mockCompanyDetails } from '../constants/mock'
import Header from './Header'
import Details from './Details'
import Overview from './Overview'
import Chart from './Chart'
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from '../api/stock-api'

const Dashboard = () => {
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);
  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-9 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand 
    bg-gray-900 text-gray-300'>
        
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex flex-col justify-start items-start">

           <Header name={stockDetails.name}></Header>
    </div>
    <div className="md:col-span-2 row-span-4 sm:row-span-5">
        <Chart></Chart>
    </div>
    <div>
        <Overview 
        symbol={stockDetails.ticker}
        price={quote.pc} 
        currency={stockDetails.currency} 
        change={quote.d} 
        changePercent={quote.dp}></Overview>
    </div>
    <div className="row-span-3 xl:row-span-3 ">
        <Details details={stockDetails}></Details>
    </div>

    </div>
  )
}

export default Dashboard