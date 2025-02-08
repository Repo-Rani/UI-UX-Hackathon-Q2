"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderHero from "@/components/hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer/Footer";

const Loader = ({ isVisible }: any) => {
  const text = "Foodtuck";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-45"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: "100vh", opacity: 1 }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {["🍕", "🍔", "🍩", "🍟", "🍦"][i % 5]}
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center relative z-10">
        <motion.div
          className="text-5xl font-bold font-pacifico"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {displayText.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={index < 4 ? "text-white" : "text-[#FF9F0D]"} 
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="inline-block ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        <motion.div
          className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden relative"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? "100%" : 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.div
            className="h-full bg-[#FF9F0D] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.div
            className="absolute -right-4 -top-2 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            🍴
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 text-white text-lg font-cookie"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Whipping up something delicious...
        </motion.div>

        <motion.div
          className="mt-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <motion.div
            className="text-6xl"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🍕
          </motion.div>
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          >
            ☁️
          </motion.div>
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
          >
            ☁️
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaderVisible(false), 500);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          anchorPlacement: "top-bottom",
        });
      }, []);

  return (
    <div>
      <AnimatePresence>
        {isLoaderVisible && <Loader isVisible={isLoading} />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <div className='bg-[#0D0D0D] w-full max-w-[1920px] xlg:h-[8000px] h-[7950px]'>
            <HeaderHero />
            <div className="absolute xlg:top-[7800px] top-[7060px] xsm:top-[7200px]  md:top-[6000px] sm:top-[7900px]">
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
}