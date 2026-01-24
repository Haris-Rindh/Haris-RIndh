import { useState, useEffect } from 'react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Full Stack Developer", "MERN Stack Specialist", "UI/UX Enthusiast", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
      <ThreeBackground />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="reveal reveal-down inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/30 backdrop-blur-md border border-white/10 shadow-lg text-sm font-medium text-slate-200 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Open to Remote Opportunities
        </div>

        <h1 className="reveal reveal-up text-6xl sm:text-7xl lg:text-9xl font-extrabold font-display leading-tight mb-6 tracking-tight">
            <span className="shine-text">Haris Rindh</span>
        </h1>

        <div className="reveal reveal-up h-16 sm:h-20 mb-8 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 animate-gradient">
                {text}
            </span>
            <span className="cursor h-8 sm:h-12 ml-1"></span>
        </div>

        <p className="reveal reveal-up text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Transforming complex problems into elegant, scalable web solutions. 
            I build the digital future, one line of code at a time.
        </p>

        <div className="reveal reveal-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 min-w-[160px] hover:scale-105 active:scale-95">
                View Portfolio <i className="fas fa-arrow-right text-sm"></i>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-slate-800/80 backdrop-blur text-white font-semibold border border-slate-700 hover:border-slate-600 hover:bg-slate-700 transition-all flex items-center justify-center min-w-[160px] hover:scale-105 active:scale-95">
                Contact Me
            </a>
        </div>

        <div className="reveal reveal-up flex items-center justify-center space-x-8">
            <a href="https://github.com/Haris-Rindh" target="_blank" className="text-slate-400 hover:text-white transition-colors text-3xl transform hover:scale-110 duration-200"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/harisrindh" target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors text-3xl transform hover:scale-110 duration-200"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:haris.rindh.pk@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors text-3xl transform hover:scale-110 duration-200"><i className="fas fa-envelope"></i></a>
            <a href="https://www.fiverr.com/haris_rindh" target="_blank" className="text-slate-400 hover:text-green-500 transition-colors text-3xl transform hover:scale-110 duration-200"><i className="fas fa-briefcase"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;