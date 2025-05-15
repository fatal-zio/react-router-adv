import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'e1', title: 'Some event' },
  { id: 'e2', title: 'Another event' },
  {
    id: 'e3',
    title: 'Yet another',
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      {DUMMY_EVENTS.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}
    </>
  );
}

export default EventsPage;
