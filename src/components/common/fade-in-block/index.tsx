"use client";

import { motion, MotionProps, Variants } from "motion/react";
import { FC, ReactNode } from "react";

interface FadeInBlockProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const FadeInBlock: FC<FadeInBlockProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
