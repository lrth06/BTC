import React, { useEffect, useState } from "react";
import axios from "axios";
function BTC() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState(0);

  function fetchCurrentPrice() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
      .then((res) => {
        setData(res.data.bpi.USD.rate_float);
        console.log(res.data.bpi);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async function convertToBTC() {
    fetchCurrentPrice();

    setValue((1 / data) * amount);
    console.log(value);
  }
  useEffect(() => {
    fetchCurrentPrice();
  });

  function changeAmount(e) {
    setValue(null);
    setAmount(e.target.value);
  }

  function handleClick() {
    convertToBTC();
    console.log({ data, value });
  }

  return (
    <div>
      <p>Current BTC Value in USD: {data}</p>
      <p>
        Current BTC value of ${amount} USD: {value}
      </p>
      <input value={amount} onChange={changeAmount}></input>
      <button onClick={handleClick}>Convert!</button>
    </div>
  );
}

export default BTC;
