import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function LottieAvatar() {
  return (
    <motion.div
      className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-slate-700/50 ml-2 flex items-center justify-center dark:bg-slate-800/50 backdrop-blur-sm"
      whileHover={{ scale: 1.1 }}
      animate={{
        rotate: [0, 5, -5, 0],
        y: [0, -5, 0]
      }}
      transition={{
        rotate: { duration: 2, repeat: Infinity },
        y: { duration: 3, repeat: Infinity }
      }}
    >
      <Code2 className="w-5 h-5 text-primary" />
      <div className="absolute inset-0 bg-slate-500/10 hover:bg-slate-500/20 transition-colors" />
    </motion.div>
  );
}       