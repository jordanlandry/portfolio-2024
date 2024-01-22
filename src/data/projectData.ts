type ProjectLinks = { github?: string; youtube?: string; demo?: string };
type OneRequired<T, K extends keyof T = keyof T> = {
  [P in K]-?: Required<Pick<T, P>> & Partial<Omit<T, P>>;
}[K];

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  url: string;
  tags: string[];
} & OneRequired<ProjectLinks>;

export const projectData: ProjectType[] = [
  {
    id: "1",
    title: "Sports Ball Tracker",
    description:
      "Mobile app to track sports ball movement using computer vision. Has 20,000,000 downloads on the Google Play Store and Apple App Store.",
    images: ["/images/1.jpg"],
    url: "https://www.google.com",
    github: "https://www.google.com",
    tags: ["React Native", "Expo", "TypeScript", "OpenCV", "Python", "Flask"],
  },
];

const other = [
  {
    id: "2",
    title: "Chess Engine",
    description:
      "Chess engine that uses the minimax algorithm with alpha-beta pruning. Has a GUI that allows the user to play against the engine.",
    images: ["/images/2.jpg"],
    url: "https://www.google.com",
    github: "https://www.google.com",
    tags: ["TypeScript", "React", "Figma"],
  },
  {
    id: "3",
    title: "Rubik's Cube Solver",
    description:
      "Chess engine that uses the minimax algorithm with alpha-beta pruning. Has a GUI that allows the user to play against the engine.",
    images: ["/images/2.jpg"],
    url: "https://www.google.com",
    github: "https://www.google.com",
    tags: ["TypeScript", "Three.js"],
  },
  {
    id: "4",
    title: "Minecraft In C++",
    description:
      "Chess engine that uses the minimax algorithm with alpha-beta pruning. Has a GUI that allows the user to play against the engine.",
    images: ["/images/2.jpg"],
    url: "https://www.google.com",
    github: "https://www.google.com",
    tags: ["C++", "OpenGL"],
  },
  {
    id: "5",
    title: "Perfect Guitar Hero Bot",
    description:
      "Chess engine that uses the minimax algorithm with alpha-beta pruning. Has a GUI that allows the user to play against the engine.",
    images: ["/images/2.jpg"],
    url: "https://www.google.com",
    github: "https://www.google.com",
    tags: ["C++", "Cheat Engine"],
  },
  {
    id: "6",
    title: "Golf Without Your Friends",
    description:
      "Chess engine that uses the minimax algorithm with alpha-beta pruning. Has a GUI that allows the user to play against the engine.",
    images: ["/images/2.jpg"],
    url: "https://www.google.com",
    github: "https://www.google.com",
    tags: ["C#", "Unity", "Blender", "Game Design"],
  },
];
