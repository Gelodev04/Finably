import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export const CalendarSection = ({ calendarRef, onDatesSet }) => {
  return (
    <div className="mb-8 w-full overflow-hidden border rounded-3xl max-w-7xl mx-auto">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        datesSet={onDatesSet}
        height="auto"
        contentHeight="auto"
        dayMaxEvents={false}
        moreLinkClick="popover"
        eventDisplay="list-item"
        eventTextColor="#064ea2"
        eventBackgroundColor="transparent"
        eventBorderColor="transparent"
      />
    </div>
  );
};
