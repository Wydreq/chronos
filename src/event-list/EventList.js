import { MOCKED_DATA } from './MockedList';
import './EventList.css';

export default function EventList() {
  return (
    <div className="fullContainer">
      <h2>Events list</h2>
      <div className="eventsContainer">
        {MOCKED_DATA.map((item) => {
          return (
            <div className="eventBlock">
              <div className="infoCont">
                <span>{item.name}</span>
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
