import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ThirdwebLogo } from "@/public";

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
  work: [
    {
      company: "Thirdweb",
      link: "https://thirdweb.com",
      badges: ["Remote"],
      title: "Thirdweb Ambassador",
      logo: ThirdwebLogo,
      start: "2023",
      end: "Present",
      description:
        "A Thirdweb Ambassador is someone that Thirdweb, the leading blockchain infrastrcure company, has selected to be ambassadors for Thirdweb.  As a Thirdweb ambassador, I share knowledge on new groundbreaking web3 tools, represent Thirdweb in networking events, create content for Thirdweb, and get rewarded with benefits exclusive to ambassadors",
    },
    {
      company: "City University of Hong Kong",
      link: "https://www.ee.cityu.edu.hk/prospective_students/Gifted_Education_Fund",
      badges: [],
      title: "Speaker and Mentor for the CityU-EE Gifted Education Programme on Cryptography, Blockchain, and Fintech",
      logo: ThirdwebLogo,
      start: "5/2023",
      end: "12/2023",
      description:
        "The “Coding, Cryptography and FinTech (CCF) Skills Education for Gifted Students” programm is a programm aimed for the most gifted high school students around Hong Kong, teaching them about coding, cryptography, and fintech.  As a speaker and a mentor, I hosted workshops and lectures for the program to teach the students about these topics",
    },
    {
      company: "IEEE Blockchain Hong Kong",
      link: "https://www.artatechfin.com/",
      badges: [],
      title: "Mentor and Volunteer",
      logo: ThirdwebLogo,
      start: "7/2022",
      end: "8/2022",
      description:
        "The IEEE Hong Kong Blockchain Local Group is the official blockchain group for Hong Kong under the Institute of Electrical and Electronics Engineers (IEEE)'s Hong Kong Section.   The IEEE HK Blockchain Local Group hosted a Web3 hackathon, targeted towards university students, to build Web3 applications and compete for prizes up to $100K HKD.  Over 100 teams joined, from 5 different universities across Hong Kong.  As a mentor, I was in charge of giving guidances and tips to the teams participating about the hackathon, as well as host mini workshops and create technical Youtube tutorials about blockchain development.  In addition, as a volunteer, I was in charge of setting up the venue and more, ensuring that the hackathon day in person was a smooth experience, as well as build the website for the hackathon",
    },
    {
      company: "Arta Tech Fin Corporation Limited",
      link: "https://www.artatechfin.com/",
      badges: ["Internship", "Hybrid"],
      title: "Summer Intern",
      logo: ThirdwebLogo,
      start: "7/2022",
      end: "8/2022",
      description:
        "During the summer of 2022, I interned at Arta Tech Fin as a blockchain research intern. My responsibilities included conducting research on blockchain technologies and their potential applications in the financial industry.  At Arta Tech Fin, I had the chance to work with experienced professionals in the financial industry and learn about the latest trends and developments in blockchain technology. I gained valuable insights into how blockchain can be used to solve problems and improve processes in the financial sector, and was able to contribute to the company's research efforts.",
    },
    {
      company: "CryptoBLK Limited",
      link: "https://www.cryptoblk.io/",
      badges: ["Internship", "Hybrid"],
      title: "Summer Intern",
      logo: ThirdwebLogo,
      start: "6/2022",
      end: "8/2022",
      description:
        "At Cryptoblk, I had the opportunity to work with a talented team of developers and learn about the latest technologies and trends in the blockchain industry. I gained valuable experience in smart contract development and blockchain application development, and was able to contribute to a variety of projects that helped to improve the company's products and services.  I also worked with the business development team and IEEE HK Blockchain to host the Web3 Dev Hackathon 2022",
    },
  ]
} as const;
