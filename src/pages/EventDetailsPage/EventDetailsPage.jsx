import { useFetchEvent } from "hooks/useFetchEvent";
import { useNavigate, useLocation } from "react-router-dom";

export const EventDetailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      {event && (
        <>
          <button
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            Go back
          </button>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300" />
          <p>Main genre: {event.classifications[0].genre.name}</p>
          <p>Main subgenre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
