import React, { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import database from "./firebase";
import Logo from "../../Assets/excel.png";
import "./Excel.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
const Excel = () => {
  const [combinedSalesData, setCombinedSalesData] = useState({});
  const [growthPercentageData, setGrowthPercentageData] = useState({});
  const [revenueModel, setRevenueModel] = useState({});
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const handleFile = (e) => {
    if (selectCategory === "") {
      console.log("please select category");
    } else {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const dataJson = XLSX.utils.sheet_to_json(worksheet);
        console.log(dataJson);

        if (selectCategory === "Sales") {
          const combinedSalesData = {
            "Year 1": dataJson[0]?.["Year 1"],
            "Year 2": dataJson[0]?.["Year 2"],
            "Year 3": dataJson[0]?.["Year 3"],
            "Year 4": dataJson[0]?.["Year 4"],
          };
          setCombinedSalesData(combinedSalesData);

          // Extracting data for growth percentages
          const growthPercentageData = {
            "Year 1": dataJson[1]?.["Year 1"],
            "Year 2": dataJson[1]?.["Year 2"],
            "Year 3": dataJson[1]?.["Year 3"],
            "Year 4": dataJson[1]?.["Year 4"],
          };
          setGrowthPercentageData(growthPercentageData);
        }
        if (selectCategory === "Cost Sheet") {
          setData(dataJson);
        }
        if (selectCategory === "Revenue Model") {
          const RevenueModel = {
            PerformanceSelling: {
              sales: {
                Y1Q1: dataJson[0]?.["Y1 Q1"],
                Y1Q2: dataJson[0]?.["Y1 Q2"],
                Y1Q3: dataJson[0]?.["Y1 Q3"],
                Y1Q4: dataJson[0]?.["Y1 Q4"],
                YEAR1: dataJson[0]?.["Year 1"],

                Y2Q1: dataJson[0]?.["Y2 Q1"],
                Y2Q2: dataJson[0]?.["Y2 Q2"],
                Y2Q3: dataJson[0]?.["Y2 Q3"],
                Y2Q4: dataJson[0]?.["Y2 Q4"],
                YEAR2: dataJson[0]?.["Year 2"],

                Y3Q1: dataJson[0]?.["Y3 Q1"],
                Y3Q2: dataJson[0]?.["Y3 Q2"],
                Y3Q3: dataJson[0]?.["Y3 Q3"],
                Y3Q4: dataJson[0]?.["Y3 Q4"],
                YEAR3: dataJson[0]?.["Year 3"],

                Y4Q1: dataJson[0]?.["Y4 Q1"],
                Y4Q2: dataJson[0]?.["Y4 Q2"],
                Y4Q3: dataJson[0]?.["Y4 Q3"],
                Y4Q4: dataJson[0]?.["Y4 Q4"],
                YEAR4: dataJson[0]?.["Year 4"],
              },
              revenue: {
                Y1Q1: dataJson[1]?.["Y1 Q1"],
                Y1Q2: dataJson[1]?.["Y1 Q2"],
                Y1Q3: dataJson[1]?.["Y1 Q3"],
                Y1Q4: dataJson[1]?.["Y1 Q4"],
                YEAR1: dataJson[1]?.["Year 1"],

                Y2Q1: dataJson[1]?.["Y2 Q1"],
                Y2Q2: dataJson[1]?.["Y2 Q2"],
                Y2Q3: dataJson[1]?.["Y2 Q3"],
                Y2Q4: dataJson[1]?.["Y2 Q4"],
                YEAR2: dataJson[1]?.["Year 2"],

                Y3Q1: dataJson[1]?.["Y3 Q1"],
                Y3Q2: dataJson[1]?.["Y3 Q2"],
                Y3Q3: dataJson[1]?.["Y3 Q3"],
                Y3Q4: dataJson[1]?.["Y3 Q4"],
                YEAR3: dataJson[1]?.["Year 3"],

                Y4Q1: dataJson[1]?.["Y4 Q1"],
                Y4Q2: dataJson[1]?.["Y4 Q2"],
                Y4Q3: dataJson[1]?.["Y4 Q3"],
                Y4Q4: dataJson[1]?.["Y4 Q4"],
                YEAR4: dataJson[1]?.["Year 4"],
              },
            },
            LogisticPartners: {
              sales: {
                Y1Q1: dataJson[3]?.["Y1 Q1"],
                Y1Q2: dataJson[3]?.["Y1 Q2"],
                Y1Q3: dataJson[3]?.["Y1 Q3"],
                Y1Q4: dataJson[3]?.["Y1 Q4"],
                YEAR1: dataJson[3]?.["Year 1"],

                Y2Q1: dataJson[3]?.["Y2 Q1"],
                Y2Q2: dataJson[3]?.["Y2 Q2"],
                Y2Q3: dataJson[3]?.["Y2 Q3"],
                Y2Q4: dataJson[3]?.["Y2 Q4"],
                YEAR2: dataJson[3]?.["Year 2"],

                Y3Q1: dataJson[3]?.["Y3 Q1"],
                Y3Q2: dataJson[3]?.["Y3 Q2"],
                Y3Q3: dataJson[3]?.["Y3 Q3"],
                Y3Q4: dataJson[3]?.["Y3 Q4"],
                YEAR3: dataJson[3]?.["Year 3"],

                Y4Q1: dataJson[3]?.["Y4 Q1"],
                Y4Q2: dataJson[3]?.["Y4 Q2"],
                Y4Q3: dataJson[3]?.["Y4 Q3"],
                Y4Q4: dataJson[3]?.["Y4 Q4"],
                YEAR4: dataJson[3]?.["Year 4"],
              },
              revenue: {
                Y1Q1: dataJson[4]?.["Y1 Q1"],
                Y1Q2: dataJson[4]?.["Y1 Q2"],
                Y1Q3: dataJson[4]?.["Y1 Q3"],
                Y1Q4: dataJson[4]?.["Y1 Q4"],
                YEAR1: dataJson[4]?.["Year 1"],

                Y2Q1: dataJson[4]?.["Y2 Q1"],
                Y2Q2: dataJson[4]?.["Y2 Q2"],
                Y2Q3: dataJson[4]?.["Y2 Q3"],
                Y2Q4: dataJson[4]?.["Y2 Q4"],
                YEAR2: dataJson[4]?.["Year 2"],

                Y3Q1: dataJson[4]?.["Y3 Q1"],
                Y3Q2: dataJson[4]?.["Y3 Q2"],
                Y3Q3: dataJson[4]?.["Y3 Q3"],
                Y3Q4: dataJson[4]?.["Y3 Q4"],
                YEAR3: dataJson[4]?.["Year 3"],

                Y4Q1: dataJson[4]?.["Y4 Q1"],
                Y4Q2: dataJson[4]?.["Y4 Q2"],
                Y4Q3: dataJson[4]?.["Y4 Q3"],
                Y4Q4: dataJson[4]?.["Y4 Q4"],
                YEAR4: dataJson[4]?.["Year 4"],
              },
            },
            FintechPartners: {
              AvgCommision: {
                Y1Q1: dataJson[6]?.["Y1 Q1"],
                Y1Q2: dataJson[6]?.["Y1 Q2"],
                Y1Q3: dataJson[6]?.["Y1 Q3"],
                Y1Q4: dataJson[6]?.["Y1 Q4"],
                YEAR1: dataJson[6]?.["Year 1"],
                Y2Q1: dataJson[6]?.["Y2 Q1"],
                Y2Q2: dataJson[6]?.["Y2 Q2"],
                Y2Q3: dataJson[6]?.["Y2 Q3"],
                Y2Q4: dataJson[6]?.["Y2 Q4"],
                YEAR2: dataJson[6]?.["Year 2"],
                Y3Q1: dataJson[6]?.["Y3 Q1"],
                Y3Q2: dataJson[6]?.["Y3 Q2"],
                Y3Q3: dataJson[6]?.["Y3 Q3"],
                Y3Q4: dataJson[6]?.["Y3 Q4"],
                YEAR3: dataJson[6]?.["Year 3"],
                Y4Q1: dataJson[6]?.["Y4 Q1"],
                Y4Q2: dataJson[6]?.["Y4 Q2"],
                Y4Q3: dataJson[6]?.["Y4 Q3"],
                Y4Q4: dataJson[6]?.["Y4 Q4"],
                YEAR4: dataJson[6]?.["Year 4"],
              },
              revenue: {
                Y1Q1: dataJson[7]?.["Y1 Q1"],
                Y1Q2: dataJson[7]?.["Y1 Q2"],
                Y1Q3: dataJson[7]?.["Y1 Q3"],
                Y1Q4: dataJson[7]?.["Y1 Q4"],
                YEAR1: dataJson[7]?.["Year 1"],
                Y2Q1: dataJson[7]?.["Y2 Q1"],
                Y2Q2: dataJson[7]?.["Y2 Q2"],
                Y2Q3: dataJson[7]?.["Y2 Q3"],
                Y2Q4: dataJson[7]?.["Y2 Q4"],
                YEAR2: dataJson[7]?.["Year 2"],
                Y3Q1: dataJson[7]?.["Y3 Q1"],
                Y3Q2: dataJson[7]?.["Y3 Q2"],
                Y3Q3: dataJson[7]?.["Y3 Q3"],
                Y3Q4: dataJson[7]?.["Y3 Q4"],
                YEAR3: dataJson[7]?.["Year 3"],
                Y4Q1: dataJson[7]?.["Y4 Q1"],
                Y4Q2: dataJson[7]?.["Y4 Q2"],
                Y4Q3: dataJson[7]?.["Y4 Q3"],
                Y4Q4: dataJson[7]?.["Y4 Q4"],
                YEAR4: dataJson[7]?.["Year 4"],
              },
            },
            ADSubscription: {
              AvgCommision: {
                Y1Q1: dataJson[9]?.["Y1 Q1"],
                Y1Q2: dataJson[9]?.["Y1 Q2"],
                Y1Q3: dataJson[9]?.["Y1 Q3"],
                Y1Q4: dataJson[9]?.["Y1 Q4"],
                YEAR1: dataJson[9]?.["Year 1"],
                Y2Q1: dataJson[9]?.["Y2 Q1"],
                Y2Q2: dataJson[9]?.["Y2 Q2"],
                Y2Q3: dataJson[9]?.["Y2 Q3"],
                Y2Q4: dataJson[9]?.["Y2 Q4"],
                YEAR2: dataJson[9]?.["Year 2"],
                Y3Q1: dataJson[9]?.["Y3 Q1"],
                Y3Q2: dataJson[9]?.["Y3 Q2"],
                Y3Q3: dataJson[9]?.["Y3 Q3"],
                Y3Q4: dataJson[9]?.["Y3 Q4"],
                YEAR3: dataJson[9]?.["Year 3"],
                Y4Q1: dataJson[9]?.["Y4 Q1"],
                Y4Q2: dataJson[9]?.["Y4 Q2"],
                Y4Q3: dataJson[9]?.["Y4 Q3"],
                Y4Q4: dataJson[9]?.["Y4 Q4"],
                YEAR4: dataJson[9]?.["Year 4"],
              },
              revenue: {
                Y1Q1: dataJson[10]?.["Y1 Q1"],
                Y1Q2: dataJson[10]?.["Y1 Q2"],
                Y1Q3: dataJson[10]?.["Y1 Q3"],
                Y1Q4: dataJson[10]?.["Y1 Q4"],
                YEAR1: dataJson[10]?.["Year 1"],
                Y2Q1: dataJson[10]?.["Y2 Q1"],
                Y2Q2: dataJson[10]?.["Y2 Q2"],
                Y2Q3: dataJson[10]?.["Y2 Q3"],
                Y2Q4: dataJson[10]?.["Y2 Q4"],
                YEAR2: dataJson[10]?.["Year 2"],
                Y3Q1: dataJson[10]?.["Y3 Q1"],
                Y3Q2: dataJson[10]?.["Y3 Q2"],
                Y3Q3: dataJson[10]?.["Y3 Q3"],
                Y3Q4: dataJson[10]?.["Y3 Q4"],
                YEAR3: dataJson[10]?.["Year 3"],
                Y4Q1: dataJson[10]?.["Y4 Q1"],
                Y4Q2: dataJson[10]?.["Y4 Q2"],
                Y4Q3: dataJson[10]?.["Y4 Q3"],
                Y4Q4: dataJson[10]?.["Y4 Q4"],
                YEAR4: dataJson[10]?.["Year 4"],
              },
            },
            YOYBasics: {
              revenue: {
                Y1Q1: dataJson[11]?.["Y1 Q1"],
                Y1Q2: dataJson[11]?.["Y1 Q2"],
                Y1Q3: dataJson[11]?.["Y1 Q3"],
                Y1Q4: dataJson[11]?.["Y1 Q4"],
                YEAR1: dataJson[11]?.["Year 1"],
                Y2Q1: dataJson[11]?.["Y2 Q1"],
                Y2Q2: dataJson[11]?.["Y2 Q2"],
                Y2Q3: dataJson[11]?.["Y2 Q3"],
                Y2Q4: dataJson[11]?.["Y2 Q4"],
                YEAR2: dataJson[11]?.["Year 2"],
                Y3Q1: dataJson[11]?.["Y3 Q1"],
                Y3Q2: dataJson[11]?.["Y3 Q2"],
                Y3Q3: dataJson[11]?.["Y3 Q3"],
                Y3Q4: dataJson[11]?.["Y3 Q4"],
                YEAR3: dataJson[11]?.["Year 3"],
                Y4Q1: dataJson[11]?.["Y4 Q1"],
                Y4Q2: dataJson[11]?.["Y4 Q2"],
                Y4Q3: dataJson[11]?.["Y4 Q3"],
                Y4Q4: dataJson[11]?.["Y4 Q4"],
                YEAR4: dataJson[11]?.["Year 4"],
              },
            },
          };
          console.log(RevenueModel);
          setRevenueModel(RevenueModel);
        }
        if (selectCategory === "Annual Statement") {
          setData(dataJson);
        }
        if (selectCategory === "Gross Merchandises Value") {
          setData(dataJson);
        }
        if (selectCategory === "User Aquisitions progression") {
          setData(dataJson);
        }
      };

      reader.readAsBinaryString(file);
      setFileName(file.name);
    }
  };
  const handleFileSubmit = async (e) => {
    e.preventDefault();

    if (selectCategory === "Sales") {
      if (combinedSalesData && growthPercentageData) {
        const excelDataRef = ref(database, "excelData/Sales");
        try {
          await set(excelDataRef, {
            combinedsalesLAKH: combinedSalesData,
            growthPERCENT: growthPercentageData,
          });
          console.log("Data uploaded to Firebase!");
        } catch (error) {
          console.error("Error uploading data:", error);
        }
      } else {
        console.error("No data to upload.");
      }
    }
    if (selectCategory === "Cost Sheet") {
      if (data) {
        // const excelDataRef = ref(database, "Cost Sheet");
        const excelDataRef = ref(database, "excelData/Cost Sheet");
        try {
          await set(excelDataRef, data);
          console.log("Data uploaded to Firebase!");
        } catch (error) {
          console.error("Error uploading data:", error);
        }
      } else {
        console.error("No data to upload.");
      }
    }
    if (selectCategory === "Revenue Model") {
      if (revenueModel) {
        const excelDataRef = ref(database, "excelData/Revenue Model");
        try {
          await set(excelDataRef, {
            RevenueModel: revenueModel,
          });
          console.log("Data uploaded to Firebase!");
        } catch (error) {
          console.error("Error uploading data:", error);
        }
      } else {
        console.error("No data to upload.");
      }
    }
    if (selectCategory === "Annual Statement") {
      if (data) {
        // const excelDataRef = ref(database, "Cost Sheet");
        const excelDataRef = ref(database, "excelData/Annual Statement");
        try {
          await set(excelDataRef, data);
          console.log("Data uploaded to Firebase!");
        } catch (error) {
          console.error("Error uploading data:", error);
        }
      } else {
        console.error("No data to upload.");
      }
    }
    if (selectCategory === "Gross Merchandises Value") {
      if (data) {
        const excelDataRef = ref(database, "excelData/TGMV");
        try {
          await set(excelDataRef, data);
          console.log("Data uploaded to Firebase!");
        } catch (error) {
          console.error("Error uploading data:", error);
        }
      } else {
        console.error("No data to upload.");
      }
    }
    if (selectCategory === "User Aquisitions progression") {
      if (data) {
        const excelDataRef = ref(database, "excelData/UAP");
        try {
          await set(excelDataRef, data);
          console.log("Data uploaded to Firebase!");
        } catch (error) {
          console.error("Error uploading data:", error);
        }
      } else {
        console.error("No data to upload.");
      }
    }
  };

  // const downloadExcel = () => {
  //   const filePath = "./costSheet";
  //   fetch(filePath)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       saveAs(blob, "costSheet.xlsx");
  //     })
  //     .catch((error) => {
  //       console.error("Error downloading the file:", error);
  //     });
  // };
  const cateogry = [
    {
      name: "Revenue Model",
    },
    {
      name: "Sales",
    },
    {
      name: "Cost Sheet",
    },
    {
      name: "Annual Statement",
    },
    {
      name: "Gross Merchandises Value",
    },
    {
      name: "User Aquisitions progression",
    },
  ];

  return (
    <div className="excel-file-upload">
      <div>
        <button className="logs">View Logs</button>
        <h3>Update Excel</h3>
      </div>

      <div className="excel-file-upload-section">
        <div className="excel-file-upload-option"></div>
        <select
          name="category"
          value={selectCategory}
          onChange={(e) => {
            setSelectCategory(e.target.value);
          }}
        >
          <option disabled value="">
            Select Category
          </option>
          {cateogry.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <form onSubmit={handleFileSubmit}>
          <div className="excel-file-upload-panel">
            <img src={Logo} alt="loading..." />
            <label htmlFor="file-input">Upload Excel file</label>
            <input
              id="file-input"
              type="file"
              onChange={handleFile}
              accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              required
            />
            {fileName && <p>{fileName}</p>}
          </div>
          <div className="excel-file-upload-btn">
            <button type="submit" className="manualBtn">
              Enter manually
            </button>
            <button className="uploadBtn">Upload</button>
          </div>
        </form>
        {/* <button onClick={downloadExcel}>Download</button> */}
      </div>
    </div>
  );
};

export default Excel;
