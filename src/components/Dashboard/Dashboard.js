import { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import "antd/dist/antd.css";
import { Input } from "antd";

import Loading from "./Loading";

import { getLocaleDateTime } from "../../utils";
import {
  getAllTreatments,
  updateTreatment,
  addTreatment,
  deleteTreatment,
} from "../../api";

import TreatmentsTable from "./TreatmentsTable";
import AddTreatmentModal from "./AddTreatmentModal";

import "./Dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [treatments, setTreatments] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      getAllTreatments()
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => setLoading(false), 500);
          setTreatments(
            data
              .map((item) => ({
                ...item,
                key: item.treatment_number,
                date: moment(item.date),
              }))
              .filter(({ key, date, ...treatment }) => {
                return Object.values(treatment).some((value) => {
                  return `${value}`.match(searchInput);
                });
              })
          );
        })
        .catch((err) => console.log(err.message));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [searchInput]);

  const handleChange = (e) => setSearchInput(e.target.value);

  return (
    <div className="dashboard-container">
      <div className="search-count-container">
        <p>There are {treatments.length} treatments</p>
        <Input
          allowClear
          placeholder="Search here"
          value={searchInput}
          onChange={handleChange}
          style={{ width: 200 }}
        />
      </div>
      <div className="cars-table-container">
        <Loading className={`loading ${loading ? "" : "hide"}`} />
        <TreatmentsTable
          className={`treatments ${loading ? "hide" : ""}`}
          treatments={treatments}
          onUpdateTreatment={updateTreatment}
          onDeleteTreatment={deleteTreatment}
        />

        <div className={`buttons-container ${loading ? "hide" : ""}`}>
          <button
            className="footer-button"
            onClick={() => setIsAddModalVisible(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <AddTreatmentModal
          visible={isAddModalVisible}
          onAdd={addTreatment}
          onCancel={() => setIsAddModalVisible(false)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
