import React from 'react';
import { motion } from 'motion/react';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function ShinyText({ text, className = '', speed = 3 }: ShinyTextProps) {
  return (
    <motion.span
      initial={{ backgroundPosition: '-100% 0' }}
      animate={{ backgroundPosition: '200% 0' }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: 'linear',
      }}
      style={{
        backgroundImage: 'linear-gradient(100deg, #8B5CF6 0%, #8B5CF6 35%, #64CEFB 50%, #8B5CF6 65%, #8B5CF6 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
}
