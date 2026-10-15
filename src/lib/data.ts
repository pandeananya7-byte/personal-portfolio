import {
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Linkedin,
  Lightbulb,
  Star,
  Zap,
  Handshake,
  TrendingUp,
} from 'lucide-react';

export const RESUME_DATA = {
  name: 'Ananya Pande',
  title: 'Business Strategy | Growth | Product & Operations | Partnerships',
  summary: 'Business Strategy, Growth & Operations',
  heroHeadline: 'Building businesses. Figuring things out. Asking better questions.',
  heroCopy: "I'm a business operator who has worked across fintech, SaaS and early-stage startups, often at the intersection of growth, product, partnerships and operations. Much of my work has involved navigating ambiguity, building processes and turning ideas into something that works. Outside of work, I write, research and spend time thinking about people, power, institutions and the questions that shape our society.",
  contact: {
    email: 'pandeananya7@gmail.com',
    phone: '(+91) 9113067627',
    linkedin: 'linkedin.com/in/ananya-pande/',
  },
  metrics: [
    {
      value: '₹100Cr+',
      label: 'Annual Disbursal',
      description: 'Scaled annual lending disbursals 100x at BharatX.',
      icon: Zap,
    },
    {
      value: '40+',
      label: 'Partnerships',
      description: 'Built a partner ecosystem contributing $76K ARR in 2 months at Bitespeed.',
      icon: Handshake,
    },
    {
      value: '3x',
      label: 'Merchant Growth',
      description: 'Scaled merchant base 3x with <1% churn at BharatX.',
      icon: TrendingUp,
    },
  ],
  selectedWork: [
    {
      id: 'bharatx',
      company: 'BharatX',
      title: 'Scaling merchant lending through growth, partnerships and operations.',
      category: 'Fintech Growth & Ops',
      description: 'Led merchant acquisition, BNPL integrations, payment activation, and lending operations to scale disbursals 100x.',
      achievements: [
        'Scaled annual disbursal 100x to ₹100Cr with <1% churn.',
        'Reduced merchant activation time from 1.5 days to 30 minutes.',
        'Launched PG activation GTMs boosting conversions by 89%.',
      ],
      slug: '/work/bharatx',
    },
    {
      id: 'super-money',
      company: 'Super.money',
      title: 'Taking lending products from launch to scale.',
      category: 'Product Scaling & Ops',
      description: 'Orchestrated GTM for Pay in 3 and superPaylater, managing tech migration and credit operations post-acquisition.',
      achievements: [
        'Achieved ₹25Cr+ peak monthly GMV for superPay in 3 on Flipkart.',
        'Launched superPaylater, driving ₹49.5L GMV in its first month.',
        'Established CX operations and SOPs for the superPay suite.',
      ],
      slug: '/work/super-money',
    },
    {
      id: 'bitespeed',
      company: 'Bitespeed',
      title: 'Building a repeatable partnership-led growth engine.',
      category: 'SaaS Partnerships',
      description: 'Built the entire partnership motion from scratch, accelerating Shopify merchant growth through strategic alliances.',
      achievements: [
        'Onboarded 40+ agency partners adding $76K ARR in 2 months.',
        'Closed strategic product partnerships adding $150K in ARR.',
        'Launched community-led partnerships amplifying brand share-of-voice.',
      ],
      slug: '/work/bitespeed',
    },
    {
      id: 'hydradb',
      company: 'HydraDB',
      title: 'Building early-stage GTM and developer community initiatives.',
      category: 'Developer GTM',
      description: 'Experimented with market entry strategies and developer engagement for a specialized database ecosystem.',
      achievements: [
        'Executed GTM experimentation for early-stage market validation.',
        'Developed developer engagement and community strategy.',
        'Built ecosystem initiatives to drive early adoption.',
      ],
      slug: '/work/hydradb',
    },
  ],
  capabilities: [
    {
      title: 'Growth & Go-to-Market',
      description: 'Market entry, distribution strategy, customer acquisition, commercial experimentation and growth.',
    },
    {
      title: 'Business & Product Operations',
      description: 'Product launches, customer journeys, lending operations, risk processes and cross-functional execution.',
    },
    {
      title: 'Partnerships & Ecosystem Building',
      description: 'Strategic alliances, merchant networks, agency partnerships and community-led distribution.',
    },
    {
      title: 'Zero-to-One Problem Solving',
      description: 'Business discovery, opportunity validation, process design and translating strategy into execution.',
    },
  ],
  writing: {
    heading: 'Words have always been a way for me to make sense of the world.',
    intro: "I've been writing for as long as I can remember. Sometimes to understand a subject, sometimes to question an idea, and sometimes simply because a story demanded to be told. My writing moves between research, commentary, storytelling and more personal forms of expression.",
    categories: ['Essays & Opinion', 'Journalism & Articles', 'Research & Analysis', 'Interviews & Scripts', 'Fiction & Poetry', 'Work & Business'],
    articles: [
      {
        title: 'The Future of Credit in India',
        category: 'Work & Business',
        date: 'Oct 2024',
        excerpt: 'An analysis of how UPI and digital lending are reshaping consumer behavior.',
        readingTime: '6 min',
        slug: '/writing/future-of-credit',
      },
      {
        title: 'On Ambiguity and Startups',
        category: 'Essays & Opinion',
        date: 'Aug 2024',
        excerpt: 'Reflections on navigating the early-stage chaos and finding structure.',
        readingTime: '4 min',
        slug: '/writing/on-ambiguity',
      },
    ]
  },
  beyondWork: {
    intro: "Not everything I've worked on fits neatly into a job description. Some projects began with curiosity, others with a conviction that something needed to be done. These are some of the initiatives, communities and ideas that have shaped how I think.",
    initiatives: [
      {
        title: 'The Honest Critique',
        description: 'Independent media, interviews, research and conversations about geopolitics, national security and public affairs. Hosted 100+ expert interviews.',
        links: [{ label: 'Watch on YouTube', url: 'https://www.youtube.com/c/TheHonestCritique' }],
      },
      {
        title: 'Covid All India Relief',
        description: 'Volunteer-led pandemic relief initiative supporting over 15,000 people through distributed volunteer networks.',
        links: [{ label: 'View Initiative', url: 'https://www.instagram.com/cair_2020/' }],
      },
      {
        title: 'SHEROES x Google WomenWill',
        description: 'Mentorship and support for women-led startups on GTM strategy as part of the Google WomenWill program.',
      },
      {
        title: 'One Point Five Academy',
        description: 'Climate fellowship focused on sustainability innovation, climate technology, and GHG accounting.',
      },
    ],
    interests: {
      heading: 'Questions I Keep Coming Back To',
      themes: [
        {
          title: 'Climate & Sustainability',
          description: 'Exploring how technology and policy can address the climate crisis, focusing on scalable sustainability.',
        },
        {
          title: 'Feminism & Gender',
          description: 'Thinking about power structures, representation, and the evolution of gender roles in modern society.',
        },
        {
          title: 'Constitution, Democracy & Institutions',
          description: 'Understanding the legal and political foundations that shape our collective life and individual rights.',
        },
      ]
    }
  },
  about: {
    intro: "I've never been particularly interested in limiting myself to a single function. My professional journey has taken me through consumer businesses, fintech lending, SaaS, partnerships and early-stage ventures. Across these experiences, I've found myself most engaged by problems that require connecting different parts of a business, understanding what isn't working and building a practical way forward. I studied Media Studies, Economics and Political Sciences at Christ University, a combination that continues to influence how I approach business and the world beyond it. Alongside work, I've remained interested in writing, public affairs, social impact and the institutions that shape everyday life.",
  },
  experience: [
    {
      company: 'Super.money (Flipkart Group)',
      location: 'Bangalore, IN',
      role: 'Business & Growth',
      date: 'Mar 2024 - Present',
      description: [
        'Led BharatX tech migration & Smartcoin NBFC integration.',
        'Scaled Pay in 3 to ₹25Cr+ peak monthly GMV.',
        'Launched superPaylater, driving ₹49.5L GMV in month one.',
        'Established credit ops achieving 70% DPD0 recovery.',
      ],
    },
    {
      company: 'Bitespeed',
      location: 'Bangalore, IN',
      role: 'Founders Office - Partnerships',
      date: 'Dec 2024 - Mar 2025',
      description: [
        'Built the entire partnership motion from scratch.',
        'Onboarded 40+ agency partners contributing $76K ARR.',
        'Closed strategic product partnerships adding $150K ARR.',
      ],
    },
    {
      company: 'BharatX',
      location: 'Bangalore, IN',
      role: 'Merchant Success Lead',
      date: 'Apr 2023 - Jan 2024',
      description: [
        'Scaled merchant base 3x and annual disbursal 100x to ₹100Cr.',
        'Reduced merchant activation time from 1.5 days to 30 minutes.',
        'Maintained annual merchant churn at less than 1%.',
      ],
    },
  ],
  education: [
    {
      institution: 'Christ-Deemed to be university',
      degree: 'Bachelors in Media Studies, Economics and Political Sciences',
      date: '2020',
      location: 'Bangalore, IN',
    },
  ],
  testimonials: [
    {
      quote: "Ananya has been one of those few kids we hired early on as an intern at Naario and then brought along as full time team members. The reason was simple- she handled ambiguity well, she was committed beyond the 9-5 and is great at networking. She’s 100% a great value addition to any team she’s a part of, with her energy and team spirit.",
      name: "Anamika Pandey",
      role: "Founder & CEO, Naario",
      linkedinUrl: "https://www.linkedin.com/in/anamikapandey/"
    },
  ],
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/writing', label: 'Writing' },
  { href: '/beyond-work', label: 'Beyond Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];