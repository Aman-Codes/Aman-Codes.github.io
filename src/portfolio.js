import emoji from "react-easy-emoji";
import IITLogo from "./assets/images/IITLogo.png";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Aman-Codes",
  title: "Hi, I'm Aman",
  subTitle: emoji(
    "Full Stack Developer 🚀 || Open Source enthusiast 👨‍💻 || IIT (ISM) Dhanbad 🎓"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1He90_UMV4l_xRjx9iAb6grWA5RYmBVL6/view?usp=share_link",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Aman-Codes",
  linkedin: "https://www.linkedin.com/in/aman-dwivedi/",
  gmail: "aman.dwivedi5@gmail.com",
  gitlab: "https://gitlab.com/Aman-Codes",
  facebook: "https://www.facebook.com/AmanCodes",
  medium: "https://aman-codes.medium.com/",
  twitter: "https://twitter.com/AD_Aman_Codes",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Active open-source contributor"),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Solve real world problems to make our day to day life easier by creating utility tools"
    )
  ],
  languages: [
    {
      skillName: "Javascript",
      image: "javascript.png"
    },
    {
      skillName: "Typescript",
      image: "typescript.png"
    },
    {
      skillName: "Go",
      image: "go.png"
    },
    {
      skillName: "C++",
      image: "cpp.png"
    },
    {
      skillName: "Python",
      image: "python.png"
    },
    {
      skillName: "PHP",
      image: "php.png"
    }
  ],

  frameworks: [
    {
      skillName: "React",
      image: "react.png"
    },
    {
      skillName: "Node.js",
      image: "nodejs.png"
    },
    {
      skillName: "jQuery",
      image: "jquery.png"
    }
  ],

  databases: [
    {
      skillName: "MongoDB",
      image: "download.png"
    },
    {
      skillName: "MySQL",
      image: "mysql.png"
    },
    {
      skillName: "PostgreSQL",
      image: "postgresql.png"
    },
    {
      skillName: "Firebase",
      image: "firebase.png"
    }
  ],

  others: [
    {
      skillName: "AWS",
      image: "aws1.png"
    },
    {
      skillName: "Git",
      image: "git.png"
    },
    {
      skillName: "Postman",
      image: "postman.png"
    },
    {
      skillName: "Linux",
      image: "linux.png"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "IIT (ISM) Dhanbad",
      logo: IITLogo,
      subHeader: "Integrated Master of Technology in Mathematics and Computing",
      duration: "July 2019 - Present",
      desc: "CGPA: 8.77"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Developer",
      company: "ConsultBae",
      companylogo: require("./assets/images/consultbaeLogo.jpg").default,
      date: "November 2020 – December 2020",
      desc: "Developed a fully responsive and mobile-friendly website for a job consultancy startup that matches the right talent with the organization",
      descBullets: [
        "Developed frontend in React",
        "Connected with Node.js backend",
        "Addded SSL certificate and deployed on AWS"
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Open Source Contributions",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/litmusLogo.png").default,
      projectName: "Litmus Chaos",
      subtitle: "LFX Mentee Fall 2021",
      projectDesc:
        "A Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way.",
      footerLink: [
        {
          name: "Website",
          url: "https://litmuschaos.github.io/litmus-e2e/dashboard"
        },
        {
          name: "GitHub",
          url: "https://github.com/pulls?q=is%3Apr+org%3Alitmuschaos+author%3AAman-Codes+sort%3Aupdated-desc+is%3Aclosed"
        }
      ]
    },
    {
      image: require("./assets/images/fossologyLogo1.png").default,
      projectName: "FOSSology",
      subtitle: "GSoC 2021",
      projectDesc:
        "FOSSology is an open source license compliance software system and toolkit. As a toolkit you can run license, copyright and export control scans from the command line.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.fossology.org/"
        },
        {
          name: "GitHub",
          url: "https://github.com/pulls?q=is%3Apr+org%3Afossology+author%3AAman-Codes+sort%3Aupdated-desc+is%3Aclosed"
        }
      ]
    },
    {
      image: require("./assets/images/thanosLogo.png").default,
      projectName: "Thanos",
      subtitle: "Contributor",
      projectDesc:
        "Thanos is a highly available metric system with unlimited storage capacity, which can be added seamlessly on top of existing Prometheus deployments.",
      footerLink: [
        {
          name: "Website",
          url: "https://thanos.io/"
        },
        {
          name: "GitHub",
          url: "https://github.com/thanos-io/thanos/pulls?q=is%3Apr+author%3AAman-Codes+is%3Aclosed"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Winner WebCrawler Techfest",
      subtitle:
        "1st prize in WebCrawler competition during Techfest, an international hackathon conducted by IIT Bombay.",
      image: require("./assets/images/techfestLogo.png").default,
      footerLink: []
    },
    {
      title: "Hackfest Finalist",
      subtitle:
        "4th position in Hackfest, a 36-hour hackathon organized by IIT (ISM) Dhanbad, and got recognized as 2nd best project by Ula",
      image: require("./assets/images/hackfestLogo.jpg").default,
      footerLink: [
        // {
        //   name: "Certification",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
      ]
    },
    {
      title: "Codebyte",
      subtitle:
        "Ranked 1st out of 100+ teams in Codebyte, website development competition at IIT (ISM) Dhanbad",
      image: require("./assets/images/codebyteLogo.jpg").default,
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some of my blogs where I have penned down my open-source journey",

  blogs: [
    {
      url: "https://aman-codes.medium.com/my-pre-gsoc-journey-247d061159df",
      title: "My pre-GSoC journey",
      description:
        "My pre-GSoC journey in a nutshell: It’s more difficult to reach from level 0 to level 1 than from level 1 to level 10."
    },
    {
      url: "https://aman-codes.medium.com/google-summer-of-code-2021-with-fossology-ef14bfb8bad2",
      title: "GSoC 2021 with FOSSology",
      description:
        "An amazing experience, numerous lines of code, implementation from scratch, a lot of debugging, and above all a great learning opportunity describes my GSoC journey."
    },
    {
      url: "https://aman-codes.medium.com/kick-start-of-my-lfx-mentorship-with-litmus-chaos-eeb089a10951",
      title: "LFX Mentorship with Litmus Chaos",
      description:
        "Starting my journey with Litmus Chaos (a CNCF sandbox project) to contribute and learn about chaos engineering and cloud native technologies."
    }
  ],
  display: true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "aman.dwivedi5@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
};
