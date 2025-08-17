// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-my-first-paper-as-a-first-co-author-on-multi-object-navigation-accepted-at-ieee-icra-2023",
          title: 'My first paper as a first co-author on Multi-Object Navigation accepted at IEEE...',
          description: "",
          section: "News",},{id: "news-attended-and-presented-our-work-on-multi-object-navigation-at-ieee-icra-2023-in-london-uk",
          title: 'Attended and presented our work on Multi-Object Navigation at IEEE ICRA 2023 in...',
          description: "",
          section: "News",},{id: "news-attended-and-presented-our-work-on-llm-based-task-planning-at-ieee-icra-2024",
          title: 'Attended and presented our work on LLM-based task planning at IEEE ICRA 2024....',
          description: "",
          section: "News",},{id: "news-defended-my-ms-thesis-navigating-the-multiverse-enhancing-robotic-assistance-through-multi-object-navigation-and-object-location-optimization",
          title: 'Defended my MS thesis Navigating the Multiverse: Enhancing Robotic Assistance through Multi-Object Navigation...',
          description: "",
          section: "News",},{id: "news-graduated-from-iiit-hyderabad-with-b-tech-ms-by-research-in-computer-science-and-engineering",
          title: 'Graduated from IIIT Hyderabad with B.Tech + MS by Research in Computer Science...',
          description: "",
          section: "News",},{id: "news-joined-google-india-as-a-software-engineer",
          title: 'Joined Google India as a Software Engineer.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%68%61%6E%61.%64%61%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/adata111", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ahana-d", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tkVT1m0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
