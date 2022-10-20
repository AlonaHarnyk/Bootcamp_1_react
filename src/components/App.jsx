import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage/HomePage";
import { EventsPage } from "pages/EventsPage/EventsPage";
import { EventSubPage } from "pages/EventSubPage/EventSubPage";
import { EventDetailsPage } from "pages/EventDetailsPage/EventDetailsPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />}>
            <Route path=":eventId" element={<EventSubPage />} />
          </Route>
          <Route
            path="events/:eventId/details"
            element={<EventDetailsPage />}
          />
        </Route>
      </Routes>
    </>
  );
};
