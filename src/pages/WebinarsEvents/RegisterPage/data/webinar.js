import user1 from "../../../../assets/images/reviews/user-1.png";
import user2 from "../../../../assets/images/reviews/user-2.png";

export const webinar = {
  id: 1,
  label: "Webinar",
  title: "Mastering Cashflow Forecasting With Finably",
  description:
    "A live, practical walkthrough of how to forecast runway, model scenarios, and set alerts that prevent surprises.",
  dateTime: "Wed, Oct 16 · 10:00-10:45 AM (PT)",
  platform: "Live on Zoom",
  recordingAvailable: true,
  whatYoullLearn: [
    "How to build a cashflow forecast from connected accounts",
    "Scenario planning: hiring, delayed invoices, new funding",
    "Runway projections and early-warning alerts",
  ],
  agenda: [
    { time: "00:00", title: "Welcome & intro" },
    { time: "05:00", title: "Live demo: forecast & scenarios" },
    { time: "30:00", title: "Q&A" },
    { time: "45:00", title: "Wrap-up & resources" },
  ],
  speakers: [
    {
      id: 1,
      name: "James Taylor",
      role: "Product Lead, Finably",
      avatar: user1,
    },
    {
      id: 2,
      name: "Dana Wu",
      role: "Head of Finance Ops",
      avatar: user2,
    },
  ],
};
