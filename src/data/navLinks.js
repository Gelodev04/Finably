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
            { label: "Powerful Automation", href: "#" },
            { label: "Seamless Bank Integration", href: "#" },
            { label: "Insightful Reports", href: "#" },
            { label: "Supported Banks", href: "#" },
          ],
        },
        {
          title: "Security & Reliability",
          links: [
            { label: "Data Protection", href: "#" },
            { label: "Uptime Monitoring", href: "#" },
            { label: "Compliance", href: "#" },
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
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
          ],
        },
      ],
    },
  },
];
