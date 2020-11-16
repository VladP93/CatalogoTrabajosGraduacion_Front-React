import React, { useState, useEffect } from "react";
import axios from "axios";

import URL from "../../Api";

import DonutChart from "../../components/Stats/DonutChart";
import PieChart from "../../components/Stats/PieChart";
import LineChart from "../../components/Stats/LineChart";

export default function Stats() {
  const [generalChartData, setGeneralChartData] = useState({});
  const [engineeringChartData, setEngineeringChartData] = useState({});
  const [businessChartData, setBusinessChartData] = useState({});
  const [humanityChartData, setHumanityChartData] = useState({});
  const [healthChartData, setHealthChartData] = useState({});
  const [facultyChartData, setFacultyChartData] = useState({});
  const url = URL.getUrl;

  useEffect(() => {
    axios.get(url + "Stats").then((res) => {
      var labels = [];
      var data = [];
      const tempChartData = {};
      res.data.forEach((d) => {
        labels.push(d.tipo);
        data.push(d.cantidad);
      });
      tempChartData.labels = labels;
      tempChartData.datasets = [
        {
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setGeneralChartData(tempChartData);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByEngineering").then((res) => {
      var labels = [];
      var data = [];
      const tempChartData = {};
      res.data.forEach((d) => {
        labels.push(d.tipo);
        data.push(d.cantidad);
      });
      tempChartData.labels = labels;
      tempChartData.datasets = [
        {
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setEngineeringChartData(tempChartData);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByBusinessSc").then((res) => {
      var labels = [];
      var data = [];
      const tempChartData = {};
      res.data.forEach((d) => {
        labels.push(d.tipo);
        data.push(d.cantidad);
      });
      tempChartData.labels = labels;
      tempChartData.datasets = [
        {
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setBusinessChartData(tempChartData);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByHumanitySc").then((res) => {
      var labels = [];
      var data = [];
      const tempChartData = {};
      res.data.forEach((d) => {
        labels.push(d.tipo);
        data.push(d.cantidad);
      });
      tempChartData.labels = labels;
      tempChartData.datasets = [
        {
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setHumanityChartData(tempChartData);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByHealthSc").then((res) => {
      var labels = [];
      var data = [];
      const tempChartData = {};
      res.data.forEach((d) => {
        labels.push(d.tipo);
        data.push(d.cantidad);
      });
      tempChartData.labels = labels;
      tempChartData.datasets = [
        {
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setHealthChartData(tempChartData);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByFaculty").then((res) => {
      var labels = [];
      var data = [];
      var total = 0;
      const tempChartData = {};
      res.data.forEach((d) => {
        labels.push(d.tipo);
        data.push(d.cantidad);
        total += d.cantidad;
      });
      tempChartData.labels = labels;
      tempChartData.datasets = [
        {
          label: "Cantidad de trabajos: " + total,
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setFacultyChartData(tempChartData);
    });
  }, [url]);

  return (
    <div className="container">
      <h1>Estadísticas</h1>
      <div className="p-grid" style={{ marginTop: -30 }}>
        {/* Main Chart */}
        <div className="p-col-12 p-md-12 p-lg-12 chart-container">
          <DonutChart
            chartData={generalChartData}
            title="Tipos de trabajos de graduación"
          />
        </div>

        {/* PieCharts Line 1 */}
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={engineeringChartData}
            title="Ingeniería y Arquitectura"
          />
        </div>
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={businessChartData}
            title="Ciencias empresariales"
          />
        </div>
        {/* PieCharts Line 2 */}
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={humanityChartData}
            title="Ciencias y Humanidades"
          />
        </div>
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart chartData={healthChartData} title="Ciencias de la Salud" />
        </div>
        {/* Main Chart 2 */}
        <div
          className="p-col-12 p-md-12 p-lg-12 chart-container"
          style={{ marginBottom: 50 }}
        >
          <LineChart
            chartData={facultyChartData}
            title="Trabajos por facultad"
          />
        </div>
      </div>
    </div>
  );
}
