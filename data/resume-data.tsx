import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rexan Wong",
  initials: "RW",
  location: "Hong Kong, HKT",
  locationLink: "https://www.google.com/maps/place/HongKong",
  about:
    "16 year old high schooler and solopreneur building internet startups.  5x Web3 hackathon winner.",
  summary:
    "My summary",
  avatarUrl: "https://avatars.githubusercontent.com/u/96183717?v=4",
  personalWebsiteUrl: "https://rexanwong.me",
  contact: {
    email: "rexanwong@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RexanWONG",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/rexan_wong",
        icon: XIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rexanwong/",
        icon: LinkedInIcon,
      },
    ],
  },
} as const;
