interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  currentUni: boolean;
}

const education: Education[] = [
  {
    title: "Studium Softwareentwicklung B.Sc.",
    startDate: "2022-03-05",
    endDate: "",
    school: "IU Internationale Hochschule",
    location: "Fernstudium",
    description:
      "Studium Softwareentwicklung B.Sc. an der IU Internationale Hochschule.",
    currentUni: true,
  },
  {
    title: "Fachhoschulreife",
    startDate: "2019-08-01",
    endDate: "2021-06-30",
    school: "Abendgymnasium Köln",
    location: "Köln",
    description: "Erwerb der Fachhochschulreife am Abendgymnasium Köln.",
    currentUni: false,
  },
  {
    title: "Fachoberschulreife",
    startDate: "2008-08-01",
    endDate: "2014-06-30",
    school: "Johann-Bendel-Realschule",
    location: "Köln",
    description:
      "Erwerb der Fachoberschulreife an der Johann-Bendel-Realschule.",
    currentUni: false,
  },
];

export default education;
