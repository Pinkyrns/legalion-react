// // components/Loading.js
// import React from 'react';
// import './Loading.css';

// const Loading = () => {
//   return (
//     <div className="loading-container">
//       <div className="loading-spinner"></div>
//       <div className="loading-text">Legalion</div>
//     </div>
//   );
// };

// export default Loading;
import { motion } from 'framer-motion';
import './Loading.css';

const LoadingAnimation = () => {
  return (
    <motion.div 
      className="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-spinner">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="spinner-circle"
        >
          <div className="spinner-inner">
          </div>
        </motion.div>
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="loading-text"
      >
        Legalion
      </motion.h1>
    </motion.div>
  );
};

export default LoadingAnimation;