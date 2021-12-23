import { PageInterface } from "./types";

interface PageData {
    [pageName: string]: PageInterface
}

const pageData: PageData = {
  home: {
    pageTitle: "Tudor Esan | Hi!",
    description:
      "This is my personal website. You can find a quick description about me and what I do for this page",
    title: "Hello World!",
    subtitle: "Welcome to my Website!",
    image: "/Hero.svg",
  },
  contact: {
    pageTitle: "Tudor Esan | Contact",
    description:
      "Contact me through this form, or through the other methods mentioned on this page",
    title: "Contact",
    subtitle:
      "You can get in touch with me through this form or by sending me a whatsapp message or an email",
    image: "/Contact.svg",
    imageSize: {
        height: 347,
        width: 471
    }
  },
  myProjects: {
    pageTitle: "Tudor Esan | My Projects",
    description:
      "Here are some of my projects and extra curicular activities",
    title: "My Projcts",
    subtitle:
      "Here you can find some of my projects",
    image: "/Projects.svg",
    imageSize: {
        height: 347,
        width: 471
    }
  },
  aboutMe: {
    pageTitle: "Tudor Esan | More About Me",
    description:
      "At this page is you can find more about me and my hobbies",
    title: "More About Me",
    subtitle:
      "learn more about me and my hobbies",
    image: "/AboutMe.svg",
    imageSize: {
        height: 347,
        width: 471
    }
  }
};

export default pageData;