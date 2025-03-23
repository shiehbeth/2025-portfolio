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
}

// default metadata
const meta = {
  title: "Beth Shieh Portfolio",
  description:
    "Beth Shieh's Personal Portfolio",
};

// default open graph data
const og = {
  title: "Once UI for Next.js",
  description: "We let designers code and developers design.",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "One UI",
  description: "Once UI is an open-source design system and component library for Next.js.",
  email: "",
};

// social links
const social = {
  twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, style, meta, og, schema, social };
