import { useState, useEffect } from "react";
import { fetchEventByName } from "servises/eventsApi";
import { useSearchParams, Link, useLocation, Outlet } from "react-router-dom";

export const SearchEventsPage = () => {
  const [events, setEvents] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("eventname");

  const location = useLocation();

  useEffect(() => {
    if (query === null || query === "") return;

    async function fetchEvents() {
      const data = await fetchEventByName(query);
      setEvents(data);
    }
    fetchEvents();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button>Search</button>
      </form>
      {events && (
        <>
          <ul>
            {events.map(({ name, id }) => (
              <li key={id}>
                <Link to={id} state={{ from: location }}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};
