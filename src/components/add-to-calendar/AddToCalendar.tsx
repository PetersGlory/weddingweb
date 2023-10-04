import styles from './add-to-calender.module.scss';
import type { FC } from 'react';
import { joinClasses } from '@/helpers/css  ';

const event = {
  description: 'Join John and wife as they celebrate their special day.',
  endDate: '20230715T160000Z',
  location: 'Location',
  name: 'Wife and John',
  startDate: '20230715T080000Z',
};

const AddToCalendar: FC = () => (
  <section className="container-fluid mt-2">
    <div className="d-flex justify-content-center">
      <div className="dropdown">
        <button
          aria-expanded="false"
          className={joinClasses([
            styles.button,
            'btn bgPrimary dropdown-toggle',
          ])}
          data-bs-toggle="dropdown"
          type="button"
        >
          Add to Calendar
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href={`https://www.google.com/calendar/event?action=TEMPLATE&text=${event.name}&dates=${event.startDate}/${event.endDate}&details=${event.description}&location=${event.location}&amp;sprop=&amp;sprop=name:`}
              target="_blank"
            >
              Google Calendar
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href={`http://calendar.yahoo.com/?v=60&view=m&type=20&title=${event.name}&st=${event.startDate}&et=${event.endDate}&desc=${event.description}&in_loc=${event.location}&uid=`}
              target="_blank"
            >
              Yahoo! Calendar
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href={`data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://adeola23.com%0ADTSTART:${event.startDate}%0ADTEND:${event.endDate}%0ASUMMARY:${event.name}%0ADESCRIPTION:${event.description}%0ALOCATION:${event.location}%0AEND:VEVENT%0AEND:VCALENDAR`}
            >
              iCal Calendar
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href={`data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://adeola23.com%0ADTSTART:${event.startDate}%0ADTEND:${event.endDate}%0ASUMMARY:${event.name}%0ADESCRIPTION:${event.description}%0ALOCATION:${event.location}%0AEND:VEVENT%0AEND:VCALENDAR`}
            >
              Outlook Calendar
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AddToCalendar;
