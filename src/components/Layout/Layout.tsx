import { Routes, Route } from "react-router-dom";
import Income from "../../pages/Income/Income";

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element="Home" />
      <Route path="/income" element={<Income />} />
      <Route path="/expenses" element="expenses" />
      <Route path="/logs" element="logs" />
    </Routes>
  );
}
