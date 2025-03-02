import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [chartData, setChartData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/companies")
      .then((response) => setCompanies(response.data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  const fetchCompanyData = (company) => {
    setSelectedCompany(company);
    if (!company) {
      setChartData(null);
      return;
    }
    axios
      .get(`http://localhost:3000/company/${encodeURIComponent(company)}`)
      .then((response) => {
        const data = response.data;
        setChartData({
          labels: data.map((d) => d.index_date),
          datasets: [
            {
              label: "Closing Index Value",
              data: data.map((d) => parseFloat(d.closing_index_value)),
              borderColor: "#007bff",
              backgroundColor: "rgba(255, 0, 166, 0.2)",
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 0, 166, 0.2)",
              tension: 0.3,
              fill: true,
            },
            {
              label: "High Index Value",
              data: data.map((d) => parseFloat(d.high_index_value)),
              borderColor: "#007bff",
              backgroundColor: "rgba(42, 61, 80, 0.2)",
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: "rgba(42, 61, 80, 0.2)",
              tension: 0.3,
              fill: true,
            },
            {
              label: "Low Index Value",
              data: data.map((d) => parseFloat(d.low_index_value)),
              borderColor: "#007bff",
              backgroundColor: "rgba(0, 123, 255, 0.2)",
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: "rgba(0, 123, 255, 0.2)",
              tension: 0.3,
              fill: true,
            },
            {
              label: "Open Index Value",
              data: data.map((d) => parseFloat(d.open_index_value)),
              borderColor: "#007bff",
              backgroundColor: "rgba(132, 6, 6, 0.2)",
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: "rgba(132, 6, 6, 0.2)",
              tension: 0.3,
              fill: true,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching company data:", error));
  };

  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <img src="/uptrend.svg" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
          <a className="navbar-brand fw-bold text-dark" href="#">
            Stocks Data
          </a>
          <div className="d-flex ms-auto">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Stocks Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success">Search</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container d-flex flex-column align-items-center mt-2">
        {/* Dropdown Card */}
        <div className="card shadow p-3 mb-4 bg-white rounded w-50">
          <label className="form-label fw-bold">Select a ompany:</label>
          <select
            className="form-select"
            value={selectedCompany}
            onChange={(e) => fetchCompanyData(e.target.value)}
          >
            <option value="">-- Select Company --</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* Chart Card */}
        {selectedCompany && (
          <div className="card shadow p-4 bg-light rounded w-75">
            <h4 className="text-center text-secondary mb-3">{selectedCompany} Stock Data</h4>
            {chartData ? (
              <Line key={selectedCompany} data={chartData} />
            ) : (
              <p className="text-center text-muted">Fetching data...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
