const baseURL = "demo.once-ui.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "light",
  brand: "moss",
  accent: "aqua",
  neutral: "gray",
  border: "rounded",
  solid: "color",
  solidStyle: "plastic",
  surface: "filled",
  transition: "all",
  scaling: "1"
}

// default metadata
const meta = {
  title: "Beth Shieh Portfolio",
  description:
    "Beth Shieh's Personal Portfolio",
};

// default open graph data
const og = {
  title: "Beth Shieh Portfolio",
  description: "Beth Shieh's Personal Portfolio",
  type: "website",
  image: "../app/favicon.ico"
};

// default schema data
// const schema = {
//   logo: "",
//   type: "Organization",
//   name: "One UI",
//   description: "Once UI is an open-source design system and component library for Next.js.",
//   email: "",
// };

// social links
const social = {
  linkedin: "https://www.linkedin.com/in/bethshieh",
};

export { baseURL, style, meta, og, schema, social };
