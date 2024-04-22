// components/HamburgerIcon.js
import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="rgba(255, 255, 255, 1)"
    strokeLinecap="round"
    {...props}
  />
);

export const HamburguerIcon = ({ isOpen, onClick }) => (
  <motion.div layout onClick={onClick} className="lg:hidden" >
     <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        initial="closed"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        initial="closed"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
      />
      <Path
        initial="closed"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </motion.div>
);