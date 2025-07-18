interface Language {
  name: string;
  level: string;
  description: string;
  show: boolean;
}

const languages: Language[] = [
  {
    name: "Deutsch",
    level: "Muttersprachler",
    description: "",
    show: true,
  },
  {
    name: "Englisch",
    level: "B1",
    description: "",
    show: true,
  },
];

export default languages;
