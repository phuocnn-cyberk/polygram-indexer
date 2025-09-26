"use client";

import { motion, MotionProps, Variants } from "motion/react";
import React, { FC, ReactNode } from "react";

interface FadeInProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const characterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

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

const hasStringChild = (children: ReactNode): boolean => {
  let hasString = false;
  React.Children.forEach(children, (child) => {
    if (typeof child === "string" && child.trim() !== "") {
      hasString = true;
    }
  });
  return hasString;
};

const renderAnimatedChildren = (children: ReactNode) => {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") {
      const words = child.split(" ");
      return words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              variants={characterVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {i < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ));
    }
    return child;
  });
};

export const FadeIn: FC<FadeInProps> = ({ children, className, ...props }) => {
  if (hasStringChild(children)) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        {...props}
      >
        {renderAnimatedChildren(children)}
      </motion.div>
    );
  }

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
