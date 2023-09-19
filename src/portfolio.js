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
    "https://drive.google.com/file/d/1yXKFN0aZe0QIWYdF-PQOPnPBSdxPopE0/view?usp=share_link",
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
      desc: "CGPA: 8.93"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Salesforce",
      companylogo: require("./assets/images/salesforce.png").default,
      date: "June 2023 - July 2023",
      desc: "Eliminated developer's need to switch between local IDEs and dedicated notebooks by providing a seamless cloud based coding environment within the browser.",
      overrideColor: "#0D9DDA",
      // descBullets: [
      //   "Developed frontend in React",
      //   "Connected with Node.js backend",
      //   "Addded SSL certificate and deployed on AWS"
      // ]
    },
    {
      role: "Software Engineer Intern",
      company: "ChaosNative (Harness)",
      companylogo: require("./assets/images/chaosNativeLogo.jpg").default,
      date: "Jan 2022 - June 2022",
      desc: "Prepared 100+ test cases to perform API testing using Cypress and reported several critical security vulnerabilities. Built a GitHub action pipeline to run automated tests for every PR.",
      overrideColor: "#ee2767",
      // descBullets: [
      //   "Developed frontend in React",
      //   "Connected with Node.js backend",
      //   "Addded SSL certificate and deployed on AWS"
      // ]
    },
    {
      role: "Linux Foundation Externship Mentee",
      company: "LitmusChaos",
      companylogo: require("./assets/images/lfx.png").default,
      date: "Sept 2021 - Nov 2021",
      desc: "Developed an E2E dashboard with CI/CD pipeline details and enhanced the Litmus E2E website. Created a Go server to fetch GitHub pipeline run logs.",
    },
    {
      role: "Google Summer of Code",
      company: "Fossology",
      companylogo: require("./assets/images/gsocLogo.png").default,
      date: "June 2021 - Aug 2021",
      desc: "Migrated UI from PHP to React while ensuring a highly scalable, flexible and maintainable code architecture. Upgraded the existing API and integrated it with the new frontend code.",
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
      // subtitle: "LFX Mentee Fall 2021",
      projectDesc:
        "A Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way.",
      footerLink: [
        {
          name: "Website",
          url: "https://litmuschaos.github.io/litmus-e2e/dashboard"
        },
        {
          name: "GitHub",
          url: "https://github.com/pulls?q=is%3Apr+is%3Amerged+org%3Alitmuschaos+author%3AAman-Codes+sort%3Aupdated-desc"
        }
      ]
    },
    {
      image: require("./assets/images/fossologyLogo1.png").default,
      projectName: "FOSSology",
      // subtitle: "GSoC 2021",
      projectDesc:
        "FOSSology is an open source license compliance software system and toolkit. As a toolkit you can run license, copyright and export control scans from the command line.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.fossology.org/"
        },
        {
          name: "GitHub",
          url: "https://github.com/pulls?q=is%3Apr+is%3Amerged+org%3Afossology+author%3AAman-Codes+sort%3Aupdated-desc"
        }
      ]
    },
    {
      image: require("./assets/images/thanosLogo.png").default,
      projectName: "Thanos",
      // subtitle: "Contributor",
      projectDesc:
        "Thanos is a highly available metric system with unlimited storage capacity, which can be added seamlessly on top of existing Prometheus deployments.",
      footerLink: [
        {
          name: "Website",
          url: "https://thanos.io/"
        },
        {
          name: "GitHub",
          url: "https://github.com/pulls?q=is%3Apr+is%3Amerged+org%3Athanos-io+author%3AAman-Codes+sort%3Aupdated-desc+"
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
      title: "Winner at WebCrawler Techfest",
      subtitle:
        "1st prize in WebCrawler competition during Techfest, an international hackathon conducted by IIT Bombay.",
      image: require("./assets/images/techfestLogo.png").default,
      footerLink: []
    },
    {
      title: "2nd Runner up at Hackfest",
      subtitle:
        "2nd runner up in Hackfest 2022, a 36-hour hackathon organized by IIT (ISM) Dhanbad",
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
      title: "Winner at Codebyte",
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
      url: "https://www.cncf.io/blog/2022/08/11/my-experience-contributing-to-litmuschaos-as-a-student/",
      title: "LFX Mentorship with LitmusChaos",
      description: "Starting my journey with Litmus Chaos (a CNCF incubating project) to contribute and learn about chaos engineering and cloud native technologies."
    },
    {
      url: "https://aman-codes.medium.com/google-summer-of-code-2021-with-fossology-ef14bfb8bad2",
      title: "GSoC 2021 with FOSSology",
      description:
        "An amazing experience, numerous lines of code, implementation from scratch, a lot of debugging, and above all a great learning opportunity describes my GSoC journey."
    },
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
