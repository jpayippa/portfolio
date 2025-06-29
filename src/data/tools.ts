// File: src/data/tools.ts

import {
  FaGit,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiAmazon,
  SiGooglecloud,
  SiFirebase,
  SiMysql,
  SiNodemon,
  SiNginx,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export const Tools = [
  { icon: FaGithub, label: "GitHub" },
  { icon: FaDocker, label: "Docker", color: "text-blue-500" },
  { icon: SiAmazon, label: "AWS", color: "text-orange-500" },
  { icon: SiGooglecloud, label: "GCP", color: "text-blue-500" },
  { icon: SiFirebase, label: "Firebase", color: "text-yellow-500" },
  { icon: SiMysql, label: "MySQL", color: "text-blue-400" },
  { icon: DiVisualstudio, label: "VS Code", color: "text-blue-500" },
  { icon: SiNodemon, label: "Nodemon", color: "text-blue-500" },
  { icon: SiNginx, label: "Nginx", color: "text-blue-500" },
  { icon: FaGit, label: "Git", color: "text-orange-600" },
];
