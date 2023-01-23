import Layout from "components/Layout/index.";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";

const NoneComponent = () => <div></div>;

export const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout><Home /></Layout>} />
      <Route path="/project" element={<NoneComponent />} />
      <Route path="/project/:id" element={<NoneComponent />} />
      <Route path="/developer" element={<NoneComponent />} />
      <Route path="/developer/:id" element={<NoneComponent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
