import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
