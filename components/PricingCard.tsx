import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus, Zap, Crown } from 'lucide-react';
import { ProductData } from '../constants';

interface PricingCardProps {
  product: ProductData;
  index: number;
  activeFeatureIndex: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ product, index, activeFeatureIndex }) => {
  const isSudarshan = product.id === 'sudarshan';
  
  // Refs for auto-scrolling if needed, though usually fixed height
  const activeRef = useRef<HTMLDivElement>(null);

  // Aqua Aurora Neon Fusion Gradients
  const mainGradient = "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600";
  const badgeGradient = "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500";
  const borderGradient = "bg-[conic-gradient(from_0deg,transparent_0deg,transparent_80deg,#06b6d4_180deg,transparent_280deg,transparent_360deg)]"; // Cyan focused

  return (
    // IMPORTANT: Removed 'overflow-hidden' from this main container to allow the Badge to pop out
    <div className={`relative flex flex-col rounded-3xl transition-all duration-500 ${
        isSudarshan 
          ? 'z-20 mt-8 mb-8 lg:my-0 lg:scale-110 lg:-translate-y-4 shadow-2xl shadow-cyan-500/20' 
          : 'z-10 bg-slate-900/40 border border-slate-800 shadow-xl hover:bg-slate-800/60'
      }`}>
      
      {/* Background Effects Container (Has overflow-hidden) */}
      {isSudarshan && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          {/* Animated Gradient Border Layer */}
          <div className="absolute inset-0 p-[2px]">
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-[-100%] ${borderGradient} opacity-100`}
             />
             <div className="absolute inset-[2px] bg-[#0F1623] rounded-[22px] z-0" />
          </div>

          {/* Abstract Glossy Blobs (Aqua Aurora) */}
          <div className="absolute inset-0 z-0">
             <motion.div 
               animate={{ 
                 x: [0, 30, 0], 
                 y: [0, -30, 0],
                 scale: [1, 1.2, 1],
                 opacity: [0.2, 0.4, 0.2]
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px] mix-blend-screen"
             />
             <motion.div 
               animate={{ 
                 x: [0, -30, 0], 
                 y: [0, 30, 0],
                 scale: [1, 1.3, 1],
                 opacity: [0.2, 0.3, 0.2]
               }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-1/2 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] mix-blend-screen"
             />
             <motion.div 
               animate={{ 
                 scale: [1, 1.1, 1],
                 opacity: [0.1, 0.2, 0.1]
               }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute -bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] mix-blend-screen"
             />
          </div>

          {/* Outer Glow inside container */}
          <motion.div
            animate={{
              scale: [0.98, 1.02, 0.98],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute inset-0 -z-10 ${mainGradient} rounded-3xl blur-3xl`}
          />
        </div>
      )}

      {/* "Best Choice" Badge - Positioned relative to the main container, sits OUTSIDE due to negative top */}
      {isSudarshan && (
          <div className="absolute -top-6 left-0 right-0 flex justify-center z-40">
            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`${badgeGradient} text-white px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-cyan-500/40 flex items-center gap-2 ring-4 ring-[#0B0F19]`}
            >
              <Crown className="w-4 h-4 fill-current" />
              Best Choice
            </motion.div>
          </div>
      )}

      {/* Main Card Content */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
        }}
        className={`relative flex flex-col h-full p-6 lg:p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 overflow-hidden ${isSudarshan ? 'bg-slate-900/80' : 'bg-transparent'}`}
      >
        {/* Glass Sheen Overlay for Sudarshan */}
        {isSudarshan && (
           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
        )}

        {/* Header Section */}
        <div className="mb-8 text-center relative z-10 pt-4">
          <h3 className={`text-lg font-bold mb-3 tracking-wide ${isSudarshan ? 'text-white' : 'text-slate-400'}`}>
            {product.name}
          </h3>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className={`text-4xl lg:text-5xl font-extrabold ${
              isSudarshan 
                ? 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-100 via-white to-purple-200 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                : 'text-slate-200'
            }`}>
              {product.price}
            </span>
            <span className="text-sm text-slate-500 font-medium mb-1">
              {product.pricePeriod}
            </span>
          </div>
          <p className={`text-sm leading-relaxed min-h-[40px] ${isSudarshan ? 'text-cyan-100/80' : 'text-slate-500'}`}>
            {product.description}
          </p>
        </div>

        {/* Action Button */}
        {isSudarshan ? (
          <motion.a
            href="https://www.jotform.com/app/253245390492459"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all mb-8 relative z-10 overflow-hidden group inline-flex items-center justify-center ${mainGradient} text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 border border-white/20`}
          >
            <span className="relative z-10">{product.buttonText}</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </motion.a>
        ) : (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all mb-8 relative z-10 overflow-hidden group bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <span className="relative z-10">{product.buttonText}</span>
          </motion.button>
        )}

        {/* Divider */}
        <div className={`h-px w-full mb-8 ${isSudarshan ? 'bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent' : 'bg-slate-800'}`} />

        {/* Features List */}
        <div className="flex flex-col gap-1 lg:gap-2 flex-grow relative z-10">
          {product.features.map((feature, idx) => {
             const isActive = idx === activeFeatureIndex;
             const isHighlightedFeature = isSudarshan && feature.highlight;
             
             return (
              <motion.div 
                key={idx} 
                ref={isActive ? activeRef : null}
                initial={false}
                animate={{
                  backgroundColor: isActive 
                    ? (isSudarshan ? "rgba(6, 182, 212, 0.25)" : "rgba(255, 255, 255, 0.08)")
                    : "rgba(0,0,0,0)",
                  scale: isActive ? (isSudarshan ? 1.08 : 1.02) : 1,
                  boxShadow: isActive && isSudarshan 
                    ? "0 0 50px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.3), 0 0 10px rgba(255, 255, 255, 0.5)" 
                    : "none",
                  borderColor: isActive && isSudarshan ? "rgba(103, 232, 249, 1)" : "transparent",
                }}
                className={`relative flex items-center justify-between group rounded-xl px-3 py-3 transition-all duration-300 border border-transparent overflow-hidden ${
                   isActive ? 'z-10' : 'z-0'
                }`}
              >
                 {/* Specific Highlight Animation for key features (e.g. Entry Price) - Pulse Effect */}
                 {isHighlightedFeature && (
                   <motion.div 
                     className="absolute inset-0 bg-cyan-400/20 z-0"
                     animate={{ 
                       opacity: [0.1, 0.4, 0.1],
                       scale: [1, 1.02, 1] 
                     }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   />
                 )}
                 
                 {/* Border glow for highlights */}
                 {isHighlightedFeature && (
                   <div className="absolute inset-0 border border-cyan-500/30 rounded-xl" />
                 )}

                 {/* Active scan line effect */}
                 {isActive && isSudarshan && (
                   <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-300 shadow-[0_0_15px_#22d3ee]"
                      layoutId="activeFeatureBar"
                   />
                 )}

                 <div className="flex flex-col pr-2 relative z-10">
                   {/* Label */}
                   <span className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 transition-colors duration-300 ${
                     isActive ? 'text-cyan-200' : (isHighlightedFeature ? 'text-cyan-200' : 'text-slate-600')
                   }`}>
                     {feature.label}
                   </span>
                   
                   {/* Value Text */}
                   <span className={`text-sm font-medium transition-colors duration-300 ${
                       isActive 
                         ? 'text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]' 
                         : (feature.isPositive 
                             ? (isSudarshan ? 'text-cyan-50' : 'text-slate-200')
                             : 'text-slate-500')
                   }`}>
                       {feature.value}
                   </span>
                 </div>
                 
                 <div className="flex-shrink-0 relative z-10">
                    {/* Icon Container */}
                    <div className={`p-1.5 rounded-full transition-all duration-300 ${
                       isActive && isSudarshan 
                         ? 'bg-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.9)] scale-110 ring-2 ring-cyan-200' 
                         : (feature.isPositive && isSudarshan
                             ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                             : (feature.isPositive 
                                 ? 'bg-green-900/30 text-green-500' 
                                 : (feature.isNegative 
                                     ? 'bg-red-500/10 text-red-500' 
                                     : 'bg-slate-800 text-slate-500')))
                    }`}>
                        {feature.isPositive ? (
                           <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        ) : feature.isNegative ? (
                           <X className="w-3.5 h-3.5" strokeWidth={3} />
                        ) : (
                           <Minus className="w-3.5 h-3.5" />
                        )}
                    </div>
                 </div>
              </motion.div>
             );
          })}
        </div>
        
        {isSudarshan && (
            <div className="mt-8 pt-6 border-t border-cyan-500/20 relative z-10">
               <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider animate-pulse">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Everything included</span>
               </div>
            </div>
        )}
      </motion.div>
    </div>
  );
};