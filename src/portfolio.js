import emoji from "react-easy-emoji";
import IITLogo from "./assets/images/IITLogo.png";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Aman-Codes",
  title: "Hi, I'm Aman",
  subTitle: emoji(
    "Full Stack Developer 🚀 || Mathematics and Computing Sophomore @ IIT (ISM) Dhanbad 🎓 || Open Source enthusiast  "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1g22fmTKTxg_K4NLp9tGwq3sHFFoFY3CK/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aman-Codes",
  linkedin: "https://www.linkedin.com/in/aman-dwivedi/",
  gmail: "aman.dwivedi5@gmail.com",
  gitlab: "https://gitlab.com/Aman-Codes",
  facebook: "https://www.facebook.com/AmanCodes",
  medium: "https://aman-codes.medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

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

  /* For icons: https://simpleicons.org/ */

  // softwareSkills: [
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "html-5",
  //     fontAwesomeClassname: "fab fa-html5"
  //   },
  //   {
  //     skillName: "css3",
  //     fontAwesomeClassname: "fab fa-css3-alt"
  //   },
  //   {
  //     skillName: "sass",
  //     fontAwesomeClassname: "fab fa-sass"
  //   },
  //   {
  //     skillName: "sql-database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   {
  //     skillName: "firebase",
  //     fontAwesomeClassname: "fas fa-fire"
  //   },
  //   {
  //     skillName: "python",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "php",
  //     fontAwesomeClassname: "fab fa-php"
  //   },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   }
  // ],
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
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT (ISM) Dhanbad",
      logo: IITLogo,
      subHeader: "Integrated Master of Technology in Mathematics and Computing",
      duration: "July 2019 - Present",
      desc: "CGPA: 8.91"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/fossologyLogo1.png").default,
      projectName: "FOSSology",
      projectDesc:
        "FOSSology is an open source license compliance software system and toolkit.",
      footerLink: [
        {
          name: "Website",
          url: "https://www.fossology.org/"
        },
        {
          name: "GitHub",
          url: "https://github.com/fossology/fossology"
        }
      ]
    },
    {
      image: require("./assets/images/thanosLogo.png").default,
      projectName: "Thanos",
      projectDesc:
        "Highly available Prometheus setup with long term storage capabilities. A CNCF Incubating project.",
      footerLink: [
        {
          name: "Website",
          url: "https://thanos.io/"
        },
        {
          name: "GitHub",
          url: "https://github.com/thanos-io/thanos"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
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
        // {
        //   name: "Award Letter",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url:
        //     "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Codebyte",
      subtitle:
        "Ranked 1st out of 100+ teams in Codebyte, website development competition at IIT (ISM) Dhanbad",
      image: require("./assets/images/codebyteLogo.jpg").default,
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url:
        //     "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "aman.dwivedi5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
