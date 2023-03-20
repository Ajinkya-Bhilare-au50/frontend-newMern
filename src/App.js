import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
