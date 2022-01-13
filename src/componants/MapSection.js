import React, { Component, useEffect, useState } from "react";
import Chart from "react-google-charts";

const pieOptions = {
  title: "Portfolio",
  pieHole: 0.4,
};

const MapSection = (props) => {
  const [portFolio, setPortFolio] = useState({
    mf: "",
    etf: "",
  });

  useEffect(() => {
    let mfTotal = 0;
    let mfCount = 0;
    let etfTotal = 0;
    let etfCount = 0;
    props.data.map((item) => {
      if (item.type == "mf") {
        mfTotal = mfTotal + parseFloat(item.portfolioValue);
        mfCount = mfCount + 1;
      } else {
        etfTotal = etfTotal + parseFloat(item.portfolioValue);
        etfCount = etfCount + 1;
      }
    });

    let tempMf = mfTotal / mfCount;
    let tempEtf = etfTotal / etfCount;

    setPortFolio({
      mf: tempMf,
      etf: tempEtf,
    });
  }, []);

  return (
    <div className="col-md-4">
      <div className="whiteBg" style={{ padding: "0px" }}>
        <Chart
          width={"350px"}
          height={"250px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["type", "percent portfolio"],
            ["MF", portFolio.mf],
            ["ETF’s", portFolio.etf],
          ]}
          options={pieOptions}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    </div>
  );
};

export default MapSection;
