import { Box } from "@mui/material";
import MainHeader from "../components/MainHeader"
import LineChart from "../components/LineChart";

const Line = () => {

    return (
      <Box m="20px">
        <MainHeader title="Line Chart" subtitle="Simple Line Chart" />
        <Box height="75vh">
          <LineChart />
        </Box>
      </Box>
    )
  }
  
  export default Line
  