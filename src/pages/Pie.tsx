import { Box } from "@mui/material";
import MainHeader from "../components/MainHeader"
import PieChart from "../components/PieChart";

const Pie = () => {

    return (
      <Box m="20px">
        <MainHeader title="Pie Chart" subtitle="Simple Pie Chart" />
        <Box height="75vh">
          <PieChart />
        </Box>
      </Box>
    )
  }
  
  export default Pie
  