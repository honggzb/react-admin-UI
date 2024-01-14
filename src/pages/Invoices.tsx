import { Box, useTheme, Typography} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tokens } from "../theme.js";
import { mockDataInvoices } from '../data/mockData.js';
import MainHeader from "../components/MainHeader.js"

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {field: "id", headerName: "ID", flex: 0.5 },
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
    {field: "email", headerName: "Email", flex: 1 },
    {field: "phone", headerName: "Phone", flex: 1},
    {field: "cost", headerName: "Address", flex: 1, 
     renderCell: (params) => ( <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>)},
    {field: "date", headerName: "Date", flex: 1},
  ];

  return (
    <Box m="20px">
      <MainHeader title="INVOICES" subtitle="List of Invoice Balances." />
      <Box m="40px 0 0 0" height="75vh" 
           sx={{ 
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none", },
            "& .name-column--cell": { color: colors.greenAccent[300] },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
          }}>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  )

}
  
export default Invoices;
  