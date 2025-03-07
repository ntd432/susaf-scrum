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
        //url: "/sprint",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Sprint Planning",
            url: "/sprint",
          },
          {
            title: "Sprint Retrospective",
            url: "/retrospective",
          },
        ],
      },
      {
        title: "Settings",
        url: "/pages/settings",
        icon: Icons.Alphabet,
        items: [], 
      },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
<<<<<<< Updated upstream
=======
      {
        title: "Forms",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Tables",
            url: "/tables",
          },
        ],
      },
      {
        title: "Sustainability Hub",
        url: "/sustainability",
        icon: Icons.Alphabet,
        items: [
            {
                title: "Product Manual",
            url: "/sustainability/manual",
          },
          {
            title: "Sustainability Knowledge Update",
            url: "/sustainability/knowledge",
          },
      {
            title: "FAQ",
            url: "/faq/new",
          },
        ],
      },
>>>>>>> Stashed changes
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
