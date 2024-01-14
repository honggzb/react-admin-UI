import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './pages/global/Topbar';
import { Route, Routes } from 'react-router-dom';
import Mysidebar from './pages/global/Sidebar';
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Invoices from './pages/Invoices';
import Contacts from './pages/Contacts';
import Bar from './pages/Bar';
import Form from './pages/Form';
import Line from './pages/Line';
import Pie from './pages/Pie';
import FAQ from './pages/FAQ';
import Calendar from './pages/Calendar';
import Geography from './pages/Geography';


function App() {

  const [theme, colorMode] = useMode();
  //const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Mysidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/geography" element={<Geography />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
