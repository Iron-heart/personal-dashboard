import { Routes, Route } from "react-router-dom";
import Income from "../../pages/Income/Income";
import Drafts from "../../pages/Drafts/Drafts";

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element="Home" />
      <Route path="/income" element={<Income />} />
      <Route path="/drafts" element={<Drafts />} />
      <Route path="/expenses" element="expenses" />
      <Route path="/logs" element="logs" />
    </Routes>
  );
}
