import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { testData } from "../../dummydata";
import { Link } from "react-router-dom";
import "./Target.css";

const data = testData;
const SDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color: "rgba(0,0,0,0.85)",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: "#000000",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "#E8FEFE",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "rgba(232,254,254,0.5)",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#319795",
    borderRadius: "0",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#319795" : "#000000"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color: "rgba(0,0,0)",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "rgba(49,151,149,0.5)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
}));

const columns = [
  {
    field: "user",
    headerName: "Investor Name",
    width: 200,
    renderCell: (params) => {
      return <div className="userListUser">{params.row.userName}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 330,
  },
  {
    field: "status",
    headerName: "Age",
    width: 100,
  },
  {
    field: "transaction",
    headerName: "Expecting Years",
    align: "center",
    width: 150,
  },
  {
    field: "actions",
    headerName: "Investor Expectation",
    align: "center",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListView">View</button>
          </Link>
        </>
      );
    },
  },
];

const Target = () => {
  return (
    <div className="insights">
      <div>
        <button className="logs">View Logs</button>
        <h3>Existing Users</h3>
      </div>
      <div className="target-links">
        <div>Offer grant</div>
        <div>Investment against equity</div>
        <div>Debt Financiing</div>
        <div>Deffered Investmen</div>
      </div>
      <div className="userList">
        <Box sx={{ height: 530, width: 1000 }}>
          <SDataGrid
            sx={{
              border: 2,
              borderColor: "#319795",
              color: "#000000",
              "& .MuiDataGrid-cell:hover": {
                color: "#319795",
              },
            }}
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default Target;
