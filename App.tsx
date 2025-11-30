import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Background } from './components/Background';
import { PricingCard } from './components/PricingCard';
import { COMPARISON_DATA } from './constants';
import { ArrowRight, Mic } from 'lucide-react';

const App: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // Cycle through features automatically
  useEffect(() => {
    const featureCount = COMPARISON_DATA[0].features.length;
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % featureCount);
    }, 2500); // Change feature every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Background />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Live Comparison Mode
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8"
          >
            Smart Sellers Choose <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Sudarshan AI</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Don't get trapped in expensive monthly subscriptions. Watch the live comparison below.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-start relative z-10 pt-4 pb-12"
        >
          {/* Render Cards - Note: Sudarshan is index 1 (middle) in data array */}
          {COMPARISON_DATA.map((product, index) => (
            <PricingCard 
              key={product.id} 
              product={product} 
              index={index} 
              activeFeatureIndex={activeFeatureIndex}
            />
          ))}
        </motion.div>

        {/* Mic Drop Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mt-20 lg:mt-32 max-w-5xl mx-auto"
        >
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-[2.5rem] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            
            <div className="relative bg-[#0F1623] rounded-[2rem] p-8 md:p-16 text-center overflow-hidden border border-white/5">
               {/* Background effects inside the card */}
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
               <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

               <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block"
               >
                 <Mic className="w-16 h-16 text-white mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeWidth={1.5} />
               </motion.div>
               
               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-extrabold tracking-tight">MIC DROP:</span> Sudarshan is built FOR India's grassroots, <br className="hidden md:block"/> not transplanted Silicon Valley.
               </h2>
               
               <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                 We understand the local ecosystem, languages, and compliance needs better than anyone else. Stop overpaying for features you can't use.
               </p>

               <motion.a
                  href="https://www.jotform.com/app/253245390492459"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all flex items-center gap-3 mx-auto text-lg w-fit"
               >
                  Get Started for ₹89 <ArrowRight className="w-5 h-5" />
               </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/5 pt-12 text-center pb-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sudarshan. All rights reserved. Built with ❤️ for India.
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;