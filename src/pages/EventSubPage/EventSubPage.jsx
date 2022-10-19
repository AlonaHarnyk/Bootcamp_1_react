import { useFetchEvent } from "hooks/useFetchEvent";

export const EventSubPage = () => {
  const event = useFetchEvent();
  return (
    event && (
      <>
        <h2>{event.name}</h2>
        <img src={event.images[0].url} alt={event.name} width="400" />
      </>
    )
  );
};
