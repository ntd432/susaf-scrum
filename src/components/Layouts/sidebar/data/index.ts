import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Product Backlog",
            url: "/",
          },
        ],
      },
      {
        title: "Sprint",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Sprint Planning",
            url: "/forms/form-elements",
          },
          {
            title: "Sprint Retrospective",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Retrospective",
        icon: Icons.ChevronUp,
        url: "/retrospective",
        items: [],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "Knowledge Hub",
        icon: Icons.PieChart,
        items: [
          {
            title: "User Manual",
            url: "/ui-elements/alerts",
          },
          {
            title: "FAQs",
            url: "/ui-elements/buttons",
          },
          {
            title: "Resources",
            url: "/ui-elements/buttons",
          },
        ],
      },
    ],
  },
];
