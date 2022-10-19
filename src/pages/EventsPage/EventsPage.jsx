import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchEvents } from "../../servises/eventsApi";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    events && (
      <>
        <ul>
          {events.map(({ name, id }) => (
            <li key={id}>
              <Link to={id}>{name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    )
  );
};
