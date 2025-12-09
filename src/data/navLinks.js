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
    href: "/#pricing",
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
            { label: "About Us", href: "#" },
            { label: "Case Studies", href: "#" },
            { label: "Documentation", href: "#" },
            { label: "Webinars/Events", href: "#" },
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
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
          ],
        },
      ],
    },
  },
];
