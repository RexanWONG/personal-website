import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon, YouTubeIcon } from "@/components/icons";
import { RexanWong, CityUniversityLogo, EthGlobalLogo, IEEELogo, ThirdwebLogo, Cosensys, DeveloperDao, Apple, Olympiad, Arta, Cryptoblk, HKIS, CAIS, VideoFast, TextBehindImage, Bulletpen } from "@/public";

export const RESUME_DATA = {
  name: "Rexan Wong",
  initials: "RW",
  location: "Hong Kong, HKT",    
  locationLink: "https://www.google.com/maps/place/HongKong",
  about: "I'm a 17 y/o high school student, entrepreneur, developer, & influencer from Hong Kong",
  aboutBulletPoints: [
    "15K followers on X/Twitter",
    "Created text-behind-image, a design tool with 300K users",  
    "Winner of international hackathons, eg. Apple Swift Student Challenge, ETHGlobal Online + more",   
    "Senior @ Hong Kong International School", 
  ],
  avatarUrl1: RexanWong,
  avatarUrl2: "https://avatars.githubusercontent.com/u/96183717?v=4",
  personalWebsiteUrl: "https://rexanwong.xyz",
  contact: {  
    email: null,
    social: [
      {
        name: "X",
        url: "https://twitter.com/rexan_wong",
        icon: XIcon,
      },
      {   
        name: "Instagram",
        url: "https://instagram.com/rexanwonger",
        icon: InstagramIcon,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@rexanwong/videos",
        icon: YouTubeIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rexanwong/",
        icon: LinkedInIcon,
      },
      {   
        name: "GitHub",
        url: "https://github.com/RexanWONG",
        icon: GitHubIcon,
      },   
    ],
  },
  skills: [
    "TypeScript",
    "React",
    "NextJS",
    "Vite",
    "NodeJS",
    "TailwindCSS",
    "ShadcnUI",
    "Remotion",
    "Supabase",
    "Vercel",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Thirdweb",
    "Swift",
  ],
  currentlyBuilding: [
    {
      name: 'Text Behind Image',
      link: 'https://textbehindimage.app',
      badges: ["Startup", "Design tool"],
      title: "Create text-behind-image designs easily",
      logo: TextBehindImage,
      date: "Since September 2024",
      description: "Creating stunning text-behind-image designs are difficult and there's not many easy-to-use tools online that helps you do that. So I built my own free tool, in 3 hours with AI tools such as cursor.sh, that helps you create these stunning text-behind-image designs easily on your images. Since launching, the tool has got 300K users, 3 million views on X/Twitter, #1 Product of the Day on Product Hunt, and notable shoutouts from people like Ryan Hoover, the founder of Product Hunt.",
      videoLink: "https://www.youtube.com/watch?v=5Oy23JO4qCI",
      projectDetailsLink: "https://textbehindimage.app",
    },
    {
      name: 'Bulletpen (bulletpen.ai)',
      link: 'https://bulletpen.ai',
      badges: ["Startup","Writing tool"],
      title: "Write great essays while you yap",
      logo: Bulletpen,
      date: "Since December 2024",
      description: "Writing is hard, and turning your ideas and thoughts into polished content is even harder. Most writing tools are either too basic or too complex, and none of them help you actually improve your writing in real-time. So I built Bulletpen, an AI app that transforms your spoken thoughts into well-structured, polished writing in real time. Since launching, it's grown to 2K active users and reached $1K MRR.",
      videoLink: "https://youtu.be/9MLg6TZolpc",
      projectDetailsLink: "https://bulletpen.ai",
    },
    {
      name: 'VideoFast (videofast.gg)',
      link: 'https://videofast.gg',
      badges: ["Startup", "Remotion", "Video editing tool"],
      title: "A super easy to use online video editor",
      logo: VideoFast,
      date: "Since Janurary 2024",
      description: "I've started building VideoFast since the beginning of 2024, while working on schoolwork at the same time.  From iterating and constantly improving the design and the usability of the video editor, it has evolved into the easiest video editor that you will ever use.  Currently, VideoFast has got the #2 Product of the Day on Product Hunt and has over 500 regular users using the editor.",
      videoLink: "https://www.youtube.com/watch?v=b1WPCgIV_0I&t=6s",
      projectDetailsLink: "https://videofast.gg",
    },
  ],
  awards: [
    {
      name: "Hong Kong Blockchain Olympiad",
      link: "https://www.hkbcol.org/",
      badges: ["Olympiad", "In Person", "100+ teams"],
      title: "Gold medalist award",
      logo: Olympiad,
      date: "8/2024",
      description: "The HKBCOL is a blockchain solution design competition where teams from all secondary schools from Hong Kong compete to pitch and present their blockchain solution to industry leading judges. I was awarded the gold medal (first place) for my project Proof of Workout Protocol and selected to represent Hong Kong at the International Blockchain Olympiad in the Netherlands.",
      videoLink: "https://www.youtube.com/watch?v=OYj3Vru7Y4g",
      projectDetailsLink: "https://github.com/rexanwong/proof-of-workout-protocol",
    },
    {
      name: "ETHGlobal Online",
      link: "https://x.com/ETHGlobal/status/1717944376528351327?s=20",
      badges: ["Hackathon", "Online", "500+ Teams"],
      title: "Top 10 Finalistis (Winning team) + Mantle Best UX Award",
      logo: EthGlobalLogo,
      date: "10/2023",
      description: "ETHOnline is a three week long online hackathon with over $200,000 USD in prizes as well as a series of curated summits, celebrating some of the most significant happenings & learnings from the past 12 months in web3.  The hackathon is focused on building Ethereum based applications with different bounties' tools and technologies.  I built Koinu, an npm library that allows developers to include a cross chain experience within their dapps.  This project was selected as a finalist project, along with 9 other finalist projects, out of 500 projects.  Being the only under-18 to win the competition, and competiting against the best and most hardcore developers in the Web3 space, out of 515 projects, I learnt a lot more about Web3 and blockchain development during the course of the hackathon and it encouraged me to build blockchain applications more : the fact that I could compete, as a 15 year old, at the time, against the top developers of the Web3 space, and win, I am looking forward to build more applications for everyday users of Web3",
      videoLink: " https://www.youtube.com/watch?v=uNC-Auuz1T4",
      projectDetailsLink: "https://ethglobal.com/showcase/koinu-x8ced",
    },
    {
      name: "Not Another Virtual Hackathon (NAVH) by Cosensys",
      link: "https://navhackathon.consensys.io/",
      badges: ["Hackathon", "Online", "70+ Projects"],
      title: "Winner of the IYKYK Linea Edition",
      logo: Cosensys,
      date: "9/2023",
      description: "Consensys, one of the biggest blockchain companies, hosted NAVH: Not Another Virtual Hackathon beginning July 6th, 2023, for technical and non-technical builders to bring their skills to the table. Builders from anywhere in the world can join to compete for over $115,500 in bounties, using Cosensys products to build something.  I built Proof of Workout Protocol : a dApp on Linea (a blockchain developed by leading blockchain company Cosensys) designed to motivate and reward physical fitness through a gamified system of quests and token-based incentive.  ",
      videoLink: "https://www.youtube.com/watch?v=OYj3Vru7Y4g",
      projectDetailsLink: "https://github.com/rexanwong/proof-of-workout-protocol",
    },
    {
      name: "Developer Dao & Mina Protocol Hackathon",
      link: "https://twitter.com/rexan_wong/status/1681156987143462912",
      badges: ["Hackathon", "Online", "40+ Projects"],
      title: "1st Place",
      logo: DeveloperDao,
      date: "6/2023",
      description: "Developer DAO, the biggest Web3 Developer Organisation, and Mina Protocol, a zero knowledge based blockchain with a market cap of $800 million USD, ran a week-long, remote hackathon with ~ $10,000 in prizes to be won in USDC, Mina Token and CODE.  The hackathon is focused on building zero-knowledge applications on Mina Protocol with SnarkyJS.   I built a privacy-focused decentralized zkApp that aims to enable anonymous and secure protests where participants can join and support various causes while preserving their privacy.  This hackathon was the most hardcore hackathon I've participated in : joining the hackathon, knowing very little about zero-knowledge (zk) technology, let alone building zk technology.  Throughout the process, I had to dive deep and learn all these new concepts while building my zkApp.  In the end, my project won first place in the hackathon, out of 40 other projects, and this victory provoked me to go further deeper into this tough concept of zero knowledge technology.",
      videoLink: "https://www.youtube.com/watch?v=UkD0pTwgjBg&t=481s", 
      projectDetailsLink: "https://github.com/rexanwong/zk-protest",
    },
    {
      name: "ETHGlobal Waterloo",
      link: "https://x.com/rexan_wong/status/1673074124833402880?s=20",
      badges: ["Hackathon", "In Person", "200+ teams"],
      title: "Best Use of Metamask SDK",
      logo: EthGlobalLogo,
      date: "6/2023",
      description: "ETHGlobal Waterloo is a 24hr long In person hackathon at Waterloo, CA, with over $200,000 USD in prizes as well as a series of curated summits, celebrating some of the most significant happenings & learnings from the past 12 months in web3.  The hackathon is focused on building Ethereum based applications with different bounties' tools and technologies.  The entire hackathon was an amazing learning process to me, especially for learning more about blockchain development - throughout the entire hackathon, I had many chances to talk face to face with top leaders and developers in the Web3 space - all these people, all the other teams, together in one big room in the town of Waterloo, building and sharing a passion together.  An even bigger impact personally was being able to travel all the way from where I live, Hong Kong, all the way to Waterloo, Ontario, Canada, and hack along with two University of Waterloo students, herby gaining exposure to university life and working as a development team.  We built a Video-sharing platform powered by ERC-6551 tokenbound-accounts, empowering the content creator economy through advertisers' staking in smart contracts.",
      videoLink: null, 
      projectDetailsLink: "https://ethglobal.com/showcase/videre-wk314",
    },
    {
      name: "Apple Swift Student Challenge",
      link: "https://twitter.com/rexan_wong/status/1656085283836940288",
      badges: ["Hackathon", "Online", "13500+ Submissions"],
      title: "WWDC23 Scholar",
      logo: Apple,
      date: "Q2 2023",
      description: "The Swift Student Challenge at WWDC (Worldwide Developers Conference) is an annual competition organized by Apple to celebrate the ingenuity and expertise of student developers using Swift.  Apple picks around 300 applications out of a pool of more than 10,000+ applicants to win, and I was one of the 300 applicants to win the challenge.   I built an iOS app/game that challenges users to find an image of a random word generated by the app in their photo album, then used machine learning models to verify that the image being selected matches the random word.",
      videoLink: null, 
      projectDetailsLink: "https://github.com/rexanwong/photorush",
    },
  ],
  notableShoutouts: [
    {
      name: "Ryan Hoover, founder of Product Hunt:",
      tweetLink: "https://twitter.com/rrhoover/status/1842977911617335783",
    },
    {
      name: "Steven Tey, former developer advocate at Vercel:",
      tweetLink: "https://twitter.com/steventey/status/1843026678580469916",
    },
  ],
  education: [
    {
      school: "Hong Kong International School",
      degree: "High school, currently a senior",
      start: "2020",
      end: "2025",
      activities: "I am a member of the Table Tennis Team and a leader of the Student Digital Leadership Team.  Academically, I have been in the honour roll every year at HKIS, given to students with a yearly GPA of 3.5-3.99.  I am also a teaching assistant for Advanced Computer Science Studio, the highest CS class in the school, helping the teacher prepare resources and provide help in class for students",
      logo: HKIS
    },
    {
      school: "Christian Alliance International School",
      degree: "Primary school",
      start: "2013",
      end: "2020",
      activities: "Acheived academic honours with distinction for every year since grade 4 to grade 7, given to students with a yearly grade over 90%.",
      logo: CAIS
    }, 
  ],
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
      logo: CityUniversityLogo, 
      start: "5/2023",
      end: "12/2023",
      description:
        "The Coding, Cryptography and FinTech (CCF) Skills Education for Gifted Students programm is a programm aimed for the most gifted high school students around Hong Kong, teaching them about coding, cryptography, and fintech.  As a speaker and a mentor, I hosted workshops and lectures for the program to teach the students about these topics",
    },
    {
      company: "IEEE Blockchain Hong Kong",
      link: "https://www.artatechfin.com/",
      badges: [],
      title: "Mentor and Volunteer",
      logo: IEEELogo,
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
      logo: Arta,
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
      logo: Cryptoblk,
      start: "6/2022",
      end: "8/2022",
      description:
        "At Cryptoblk, I had the opportunity to work with a talented team of developers and learn about the latest technologies and trends in the blockchain industry. I gained valuable experience in smart contract development and blockchain application development, and was able to contribute to a variety of projects that helped to improve the company's products and services.  I also worked with the business development team and IEEE HK Blockchain to host the Web3 Dev Hackathon 2022",
    },
  ],
  dataScience: [
    {
      projectName: "Sitting Posture Buddy",
      projectDescription: "An iOS app that tracks your sitting posture in real time and alerts you when your posture becomes bad (like a cooked spaghetti noodle)",
      badges: ["iOS", "CoreML", "CreateML", "UIKit"],
      projectLink: "https://github.com/RexanWONG/sitting-posture-buddy"

    },
    {
      projectName: "Traning a model to play Doom from pixels",
      projectDescription: "A deep neural network that is trained to collect objects in a 3D environment based on the game of Doom, using Sample Factory, an asynchronous implementation of the PPO algorithm.",
      badges: ["Python", "Reinforcement learning", "Sample Factory", "VizDoom"],
      projectLink: "https://huggingface.co/rexanwong/rl_course_vizdoom_health_gathering_supreme"
    },
    {
      projectName: "Kangaroo or Giraffe",
      projectDescription: "A deep CNN image classifier that detects between a kangaroo or a giraffe",
      badges: ["Python", "Tensorflow", "Keras"],
      projectLink: "https://github.com/RexanWONG/kangaroo-or-giraffe"
    },
    {
      projectName: "Analyzing referee decisions in the EPL",
      projectDescription: 'Analyzing and uncovering patterns related to yellow card decisions and understand the tendencies of different referees in the english premier league from 2017-2022',
      badges: ["Python", "Numpy", "Pandas"],
      projectLink: "https://github.com/RexanWONG/analysis_referee_decisions_in_english_premier_league/blob/main/analyzing_referee_decisions_in_epl_2017_2022.ipynb"

    },
  ],
  music: [
    {
      awardName: "Grade 8 Piano Performance (Pass)",
      year: "2024",
      description: "Issued by The Associated Board of the Royal Schools of Music",
    },
    {
      awardName: "Grade 7 Piano Performance (Distinction)",
      year: "2023",
      description: "Issued by The Associated Board of the Royal Schools of Music",
    },
  ],
} as const;
