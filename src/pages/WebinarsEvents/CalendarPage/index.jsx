import { useState, useRef, useEffect } from "react";
import { Container, HeroSection, Button } from "../../../components/common";
import heroBg from "../../../assets/images/blog-bg.png";
import { CalendarNavigation, CalendarSection } from "./components";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WebinarCalendarPage = () => {
  const navigate = useNavigate();
  const calendarRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Sync currentDate with calendar on mount
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      setCurrentDate(calendarApi.getDate());
    }
  }, []);

  // Navigate to previous month
  const handlePrevMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev();
      // Get the view's current start date after navigation
      const view = calendarApi.view;
      setCurrentDate(view.currentStart);
    }
  };

  // Navigate to next month
  const handleNextMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next();
      // Get the view's current start date after navigation
      const view = calendarApi.view;
      setCurrentDate(view.currentStart);
    }
  };

  // Go to current month
  const handleCurrentMonth = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.today();
      // Get the view's current start date after navigation
      const view = calendarApi.view;
      setCurrentDate(view.currentStart);
    }
  };

  // Handle date change - use the view's current start to get the displayed month
  const handleDatesSet = (arg) => {
    // Use the view's currentStart which represents the start of the displayed period
    // For month view, this is the first day of the displayed month
    setCurrentDate(arg.view.currentStart);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroSection
        label="Resources"
        title="Webinars & Events"
        description="Join our upcoming sessions or watch recordings to get the most out of Finably."
        backgroundImage={heroBg}
      />

      {/* Events Calendar Section */}
      <Container>
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
              Events Calendar
            </h2>
            <p className="text-lg text-gray-600">
              See upcoming webinars at a glance and register in one click.
            </p>
          </div>

          <CalendarNavigation
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onCurrentMonth={handleCurrentMonth}
            currentDate={currentDate}
          />

          <CalendarSection
            calendarRef={calendarRef}
            onDatesSet={handleDatesSet}
          />
        </div>
      </Container>

      <div className="flex justify-center pb-8">
        <Button
          variant="primary"
          className="py-3 px-6"
          onClick={() => navigate("/webinars-events")}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft size={20} />
            Back To Webinars And Events
          </div>
        </Button>
      </div>
    </div>
  );
};
