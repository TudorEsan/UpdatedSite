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
};

export default pageData;