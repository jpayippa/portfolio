// File: src/components/ToolCard.tsx

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ToolCardProps {
  icon: IconType;
  label: string;
  color?: string;
}

export default function ToolCard({ icon: Icon, label, color }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg"
    >
      <Icon size={36} className={color || "text-white"} />
      <p className="mt-2 text-sm font-medium text-white text-center">{label}</p>
    </motion.div>
  );
}
