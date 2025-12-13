export const navLinks = [
  {
    label: "Product",
    href: "#",
    hasDropdown: true,
    dropdown: {
      sections: [
        {
          title: "Core Features",
          links: [
            { label: "Envelope Budgeting", href: "/envelope-budgeting" },
            { label: "Powerful Automation", href: "/powerful-automation" },
            {
              label: "Seamless Bank Integration",
              href: "/seamless-bank-integration",
            },
            { label: "Insightful Reports", href: "/insightful-reports" },
            { label: "Supported Banks", href: "/supported-banks" },
          ],
        },
        {
          title: "Security & Reliability",
          links: [
            { label: "Data Protection", href: "/data-protection" },
            { label: "Uptime Monitoring", href: "/uptime-monitoring" },
            { label: "Compliance", href: "/compliance" },
          ],
        },
      ],
    },
  },
  {
    label: "Pricing",
    href: "/pricing",
    hasDropdown: false,
  },
  {
    label: "Resources",
    href: "#",
    hasDropdown: true,
    dropdown: {
      sections: [
        {
          links: [
            { label: "Blog", href: "/blog" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Webinars/Events", href: "/webinars-events" },
          ],
        },
      ],
    },
  },
  {
    label: "Company",
    href: "#",
    hasDropdown: true,
    dropdown: {
      sections: [
        {
          links: [
            { label: "About Us", href: "/about-us" },
            { label: "Career", href: "/career" },
            { label: "Contact", href: "/contact" },
          ],
        },
      ],
    },
  },
];
