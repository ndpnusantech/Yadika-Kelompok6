import "./boxDetail.css";
import React from "react";
import LineCharts from "./lineChart";
import PieeCharts from "./pieChart";

const BoxDetail = () => {
  return (
    <div className="main-box">
      <div className="title">
        <h2>Dashboard</h2>
      </div>
      <div className="p-3">
        <div className="card">
          <div className="produk">
            <p>Produk</p>
            <p>200</p>
          </div>

          <div className="expired">
            <p>expired</p>
            <p>10</p>
          </div>

          <div className="user">
            <p>user</p>
            <p>425</p>
          </div>

          <div className="income">
            <p>income</p>
            <p>1000000</p>
          </div>
        </div>
        <div style={{ marginTop: "150px" }}>
          <div className="PieeCharts">
            <PieeCharts />
          </div>
          <div className="LineChart">
            <LineCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDetail;
