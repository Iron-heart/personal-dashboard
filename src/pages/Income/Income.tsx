import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Income() {
  const [incomeData, setIncomeData] = useState<any>([]);

  type IRow = {
    id: number;
    _id: string;
    name: string;
    amount: number;
    date?: string;
  };

  type ICol = {
    field: string;
    headerName: string;
    width?: number;
  };

  const columns: ICol[] = [
    { field: "_id", headerName: "Id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "date", headerName: "Date", width: 220 },
  ];

  useEffect(() => {
    axios
      .get<IRow[]>("http://localhost:5000/income")
      .then((r) =>
        r.data.map((item, i) => {
          return {
            id: i + 1,
            name: item.name,
            date: item.date ? new Date(item.date).toDateString() : "",
            amount: item.amount,
            _id: item._id,
          };
        })
      )
      .then((data) => setIncomeData(data));
  }, []);
  return (
    <>
      <Typography variant="h5">Income Data</Typography>
      <div style={{ height: 500, width: "100%", marginTop: "10px" }}>
        <DataGrid rows={incomeData} columns={columns} />
      </div>
    </>
  );
}
