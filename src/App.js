import { Routes, Route,} from "react-router-dom";

import Ticketform from "./components/ticketform";
import Pages from "./components/pages";
import Userticket from "./components/userticket";

// import Navbar from "./components/navbar";



function App() {
  return (
  <Routes>
    <Route path="/" element={<Pages/>} />
    <Route path="/ticket" element={<Ticketform/>} />
    <Route path="/view-ticket" element={<Userticket/>} />
  </Routes>
  );
}

export default App;
