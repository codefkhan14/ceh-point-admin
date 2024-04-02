import React from "react";
import { revenueData } from "../../dummydata";
import { grossData } from "../../dummydata";
import { expenseData } from "../../dummydata";
import { userData } from "../../dummydata";
import { totalExpenseData } from "../../dummydata";
import "./Overview.css";
import Revenue from "../../Components/Charts/Revenue/Revenue";
import Gross from "../../Components/Charts/Gross/Gross";
import Expense from "../../Components/Charts/Expense/Expense";
import User from "../../Components/Charts/User/User";
import TotalExpense from "../../Components/Charts/totalExpense/totalExpense";
import Pie from "../../Components/Charts/Pie/Pie";

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="overview-section-heading">
        <h2>Investor expectations overview</h2>
        <button>View Logs</button>
      </div>
      <div className="overview-charts">
        <div className="overview-chart">
          <Revenue
            data={revenueData}
            title="Revenue Projections from Different Streams"
            grid
            dataKey="Active Users"
          />
        </div>
        <div className="overview-chart">
          <Gross
            data={grossData}
            title="GMV (Gross merchandise value)"
            grid
            dataKey="Active Users"
          />
        </div>
        <div className="overview-chart">
          <Expense data={expenseData} title="Revenue/ Expense/ P&L" grid />
        </div>
        <div className="overview-chart">
          <User data={userData} title="User Acquisition Progression" grid />
        </div>
        <div className="overview-chart">
          <TotalExpense data={totalExpenseData} grid />
        </div>
        <div className="overview-chart">
          <Pie title="User Acquisition Progression" grid />
        </div>
      </div>
    </div>
  );
};

export default Overview;
