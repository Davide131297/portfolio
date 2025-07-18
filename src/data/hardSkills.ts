interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "React",
    description:
      "Die Bibliothek meiner Wahl für moderne und interaktive Benutzeroberflächen",
    icon: "react",
  },
  {
    name: "NextJs",
    description: "Mein Favorit für die Entwicklung von Webanwendungen",
    icon: "nextjs_icon_dark",
  },
  {
    name: "NodeJs",
    description: "Ich benutze NodeJs gerne für die Backend-Entwicklung",
    icon: "nodejs",
  },
  {
    name: "TypeScript",
    description:
      "Ich habe TypeScript seit 2024 für die Entwicklung von Webanwendungen verwendet",
    icon: "typescript",
  },
];

export default hardSkills;
