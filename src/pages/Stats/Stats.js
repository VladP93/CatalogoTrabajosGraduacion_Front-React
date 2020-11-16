import React, { useState, useEffect } from "react";
import axios from "axios";

import URL from "../../Api";

import DonutChart from "../../components/Stats/DonutChart";
import PieChart from "../../components/Stats/PieChart";
import LineChart from "../../components/Stats/LineChart";

export default function Stats() {
  const [generalChartData, setGeneralChartData] = useState({});
  const [totalGeneral, setTotalGeneral] = useState(0);
  const [engineeringChartData, setEngineeringChartData] = useState({});
  const [totalEngineering, setTotalEngineering] = useState(0);
  const [businessChartData, setBusinessChartData] = useState({});
  const [totalBusiness, setTotalBusiness] = useState(0);
  const [humanityChartData, setHumanityChartData] = useState({});
  const [totalHumanity, setTotalHumanity] = useState(0);
  const [healthChartData, setHealthChartData] = useState({});
  const [totalHealth, setTotalHealth] = useState(0);
  const [facultyChartData, setFacultyChartData] = useState({});
  const [totalFaculty, setTotalFaculty] = useState(0);
  const url = URL.getUrl;

  useEffect(() => {
    axios.get(url + "Stats").then((res) => {
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
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setGeneralChartData(tempChartData);
      setTotalGeneral(total);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByEngineering").then((res) => {
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
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setEngineeringChartData(tempChartData);
      setTotalEngineering(total);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByBusinessSc").then((res) => {
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
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setBusinessChartData(tempChartData);
      setTotalBusiness(total);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByHumanitySc").then((res) => {
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
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setHumanityChartData(tempChartData);
      setTotalHumanity(total);
    });
  }, [url]);

  useEffect(() => {
    axios.get(url + "Stats/statsByHealthSc").then((res) => {
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
          data,
          backgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
          hoverBackgroundColor: ["#90b071", "#5d7efc", "#eedd7c"],
        },
      ];

      setHealthChartData(tempChartData);
      setTotalHealth(total);
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
          label: "Cantidad de trabajos",
          data,
          borderColor: "#5d7efc",
        },
      ];

      setFacultyChartData(tempChartData);
      setTotalFaculty(total);
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
            title={"Tipos de trabajos de graduación: " + totalGeneral}
          />
        </div>

        {/* PieCharts Line 1 */}
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={engineeringChartData}
            title={"Ingeniería y Arquitectura: " + totalEngineering}
          />
        </div>
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={businessChartData}
            title={"Ciencias empresariales: " + totalBusiness}
          />
        </div>
        {/* PieCharts Line 2 */}
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={humanityChartData}
            title={"Ciencias y Humanidades: " + totalHumanity}
          />
        </div>
        <div className="p-col-12 p-md-6 p-lg-6 chart-container">
          <PieChart
            chartData={healthChartData}
            title={"Ciencias de la Salud: " + totalHealth}
          />
        </div>
        {/* Main Chart 2 */}
        <div
          className="p-col-12 p-md-12 p-lg-12 chart-container"
          style={{ marginBottom: 50 }}
        >
          <LineChart
            chartData={facultyChartData}
            title={"Trabajos por facultad: " + totalFaculty}
          />
        </div>
      </div>
    </div>
  );
}
