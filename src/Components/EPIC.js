import React, { useEffect, useState } from "react";
import axios from "axios";
function EPIC() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    await axios
      .get(
        " https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=WIZoo7gfCeoddbxzmFT4KwBSh3MIzIGYqN42G2dC "
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  function handleClick() {
    setLoading(true);
    fetchData();
    console.log({ data });
  }

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <button onClick={handleClick}>Fetch!</button>
      {data && (
        <div>
          <p>Data Returned:</p>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  );
}

export default EPIC;
