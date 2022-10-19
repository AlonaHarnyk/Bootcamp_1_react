import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage/HomePage";
import { EventsPage } from "pages/EventsPage/EventsPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage/>} />
        </Route>
      </Routes>
    </>
  );
};
