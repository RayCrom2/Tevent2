import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


function App() {
  let items = ["NY ", "SF", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item:string) => {
    console.log(item);
  }

  return <div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <Alert>
      Hi <span>World</span>
    </Alert>
    <Button onClick= {() => console.log("clicked")}>
      Login
    </Button> */}
    </div>;
}

export default App;