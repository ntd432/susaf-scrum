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
        ],
      },
    ],
  },
];
