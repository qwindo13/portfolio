import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className, transparent, highlight, disableAnimation = false, endIcon = null}) => {

    const defaultClass = 'px-4 py-3 font-roboto-mono font-semibold text-dark text-base bg-white rounded-xl  w-fit flex items-center select-none items-center h-fit max-h-full whitespace-nowrap ';
    const transparentClass = '!bg-transparent text-white border border-white border-opacity-10';
    const highlightClass = highlight ? 'highlighted-button text-black' : ''; // Apply 'highlighted-button' class if highlight prop is true

    return (
        <motion.button
            onClick={onClick}
            className={`${defaultClass} ${className} ${transparent ? transparentClass : ''} ${highlightClass}`}
            whileTap={!disableAnimation ? { scale: 0.95 } : undefined}
            type="button"
            layout
        >
            {children}
            {endIcon && <motion.span layout className="ml-2 flex ">{endIcon}</motion.span>}
        </motion.button>
    );
};

export default Button;
