import { Button, Modal, Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState, ChangeEvent, useCallback } from "react";
import { getIncomeData, postIncomeData } from "../../services/income.service";
import { ICol, IRow, IRowData } from "../../types/Income";

export default function Income() {
  const [incomeData, setIncomeData] = useState<IRow[]>([]);
  const [open, setOpen] = useState(false);
  const [createIncomeData, setCreateIncomeData] = useState({
    name: "",
    amount: "",
  });

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateIncomeData({
      ...createIncomeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setCreateIncomeData({
      name: "",
      amount: "",
    });
  };

  const normalizeData = (data: IRowData[]): IRow[] => {
    return data.map((item, i) => {
      return {
        id: i + 1,
        name: item.name,
        date: item.date ? new Date(item.date).toDateString() : "",
        amount: item.amount,
        _id: item._id,
      };
    });
  };

  const fetchData = useCallback(() => {
    return getIncomeData()
      .then((response) => {
        return normalizeData(response.data);
      })
      .then((data) => setIncomeData(data));
  }, [])

  const handleSubmit = () => {
    const { name, amount } = createIncomeData;

    const data = {
      name,
      amount: Number(amount),
    };

    postIncomeData(data).then(() => {
      fetchData();
      handleClose();
    });
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    border: "2px solid #1976d2",
    boxShadow: 24,
    p: 4,
  };

  const columns: ICol[] = [
    { field: "_id", headerName: "Id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "date", headerName: "Date", width: 220 },
  ];

  useEffect(() => {

    fetchData();
  }, [fetchData]);

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mb={2}
      >
        <Typography variant="h5">Income Data</Typography>
        <Button onClick={handleOpen} variant="outlined">
          New
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Income
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "25ch",
                },
                display: "flex",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                onChange={handleTextFieldChange}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                value={createIncomeData.name}
                name="name"
              />
              <TextField
                onChange={handleTextFieldChange}
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                value={createIncomeData.amount}
                name="amount"
              />
            </Box>
            <Button onClick={handleSubmit} variant="contained">
              Gönder
            </Button>
          </Box>
        </Modal>
      </Box>

      <div style={{ height: 500, width: "100%" }}>
        {incomeData && <DataGrid onRowDoubleClick={(e) => console.log(e.row)} checkboxSelection autoHeight rows={incomeData} columns={columns} />}
      </div>
    </>
  );
}
