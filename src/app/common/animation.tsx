"use client";

import React from "react";
import { motion } from "motion/react";

export const LeftSlider = ({
  children,
  className = "",
  delay = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: 70, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const RightSlider = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -70, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const UpSlider = ({
  children,
  className = "",
  delay = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const Visibility = ({
  children,
  className = "",
  delay = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 5,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
