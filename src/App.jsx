import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, Github, Linkedin, Download, 
  ExternalLink, Code, Database, Shield, Terminal, 
  Cpu, Globe, MapPin, Send, X, Sparkles, Loader2, 
  Bot, ScanEye, Briefcase, CheckCircle, Lightbulb,
  ChevronRight, ArrowRight, Zap, Play, Layers,
  Sun, Moon, Menu
} from 'lucide-react';

// --- DATA CONTEXT ---
const RESUME_DATA = {
  name: "Elangovan",
  fullName: "Elangovan P",
  role: "Certified Penetration Tester",
  about: "Passionate cybersecurity professional aiming to excel in Red Teaming and Penetration Testing. Focused on advancing offensive security expertise and proactively uncovering vulnerabilities to outpace evolving threats. Dedicated to continuous skill growth and driving high-impact security operations.",
  location: "Villupuram, Tamilnadu",
  email: "elangovan.cybersec@gmail.com",
  phone: "+91 96005 24365",
  experience: [
    {
      year: "08/2025 - 09/2025",
      title: "Cybersecurity Intern",
      company: "Redynox",
      type: "Internship",
      desc: "Strengthened understanding of network security and different types of cyber threats."
    },
    {
      year: "07/2025 - 08/2025",
      title: "AI & Cloud Intern",
      company: "IBM Through Edunet",
      type: "Internship",
      desc: "Worked on cloud-based solutions and AI projects, focusing on secure data handling and cloud deployments."
    },
    {
      year: "07/2025 - 08/2025",
      title: "Embedded Systems Intern",
      company: "CodeBind Technologies",
      type: "Internship",
      desc: "Developed embedded systems and IoT modules, optimized hardware-software integration."
    },
    {
      year: "05/2025 - 07/2025",
      title: "Cybersecurity Intern",
      company: "NullClass",
      type: "Internship",
      desc: "Practiced ethical hacking, vulnerability assessment, and reporting security improvements."
    },
    {
      year: "06/2024 - 09/2024",
      title: "IoT & Ethical Hacking Intern",
      company: "Internship Studio",
      type: "Internship",
      desc: "Secured IoT devices and networks, implemented ethical hacking techniques, and monitored sensor data."
    }
  ],
  education: [
    {
      title: "Bachelor of Engineering (CSE)",
      school: "Dhanalakshmi Srinivasan Engineering College",
      year: "2020 - Present",
      desc: "CGPA: 9.3 (Autonomous)"
    },
    {
      title: "Higher Secondary (HSC)",
      school: "St. Joseph's Matric. Hr. Sec. School",
      year: "2020 - 2022",
      desc: "Grade: 89%"
    },
    {
      title: "Secondary School (SSLC)",
      school: "St. Joseph's Matric. Hr. Sec. School",
      year: "2018 - 2020",
      desc: "Grade: 99%"
    }
  ],
  skills: [
    { name: "Java / Python", icon: Code, rating: 5 },
    { name: "Burp Suite", icon: Shield, rating: 5 },
    { name: "AWS / Cloud", icon: Globe, rating: 4 },
    { name: "SQL / MongoDB", icon: Database, rating: 4 },
    { name: "IoT Security", icon: Cpu, rating: 3 },
    { name: "Bash / Linux", icon: Terminal, rating: 4 }
  ],
  projects: [
    {
      title: "Nexora",
      client: "EdTech Security",
      image: "shield",
      desc: "Web app for penetration testing and secure coding practice with gamified features.",
      tags: ["React", "Security", "Gamification"]
    },
    {
      title: "SigHunter",
      client: "Threat Detection",
      image: "terminal",
      desc: "Telegram bot for automated threat detection of malicious files and links using real-time APIs.",
      tags: ["Python", "Telegram API", "Malware"]
    },
    {
      title: "AskEd",
      client: "AI Chatbot",
      image: "bot",
      desc: "AI chatbot using RAG (Retrieval-Augmented Generation) for college admission queries.",
      tags: ["AI", "RAG", "Automation"]
    },
    {
      title: "VitalSec",
      client: "IoT Security",
      image: "cpu",
      desc: "Secure ICU monitoring system with patient sensor data and real-time tracking.",
      tags: ["IoT", "Embedded", "Network Security"]
    }
  ]
};

const RESUME_CONTEXT = JSON.stringify(RESUME_DATA);

// --- ANIMATION HOOK ---
const useReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const Reveal = ({ children, className = "", delay = 0, animation = "fade-up" }) => {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' :
        animation === 'fade-up' ? 'opacity-0 translate-y-12' :
        animation === 'fade-right' ? 'opacity-0 -translate-x-12' :
        animation === 'scale-up' ? 'opacity-0 scale-90' :
        'opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- TYPEWRITER COMPONENT ---
const Typewriter = ({ words, className }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === words[index].length ? 2000 : 70, parseInt(Math.random() * 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className={className}>
      {words[index].substring(0, subIndex)}{blink ? "|" : " "}
    </span>
  );
};

// --- INTERACTIVE CONSTELLATION BACKGROUND ---
const ConstellationBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = [];
    const particleCount = 70; // Adjust for density
    const connectionDistance = 140;
    const mouseInteractionDistance = 200; // Distance to connect to mouse

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      // Teal colors
      const colorStr = isDark ? '0, 227, 194' : '15, 118, 110';

      particles.forEach((p, i) => {
        // Update position (automatic roaming)
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction: Connect to mouse
        const dxMouse = p.x - mouseRef.current.x;
        const dyMouse = p.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseInteractionDistance) {
            // Draw line to mouse
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${colorStr}, ${0.5 * (1 - distMouse / mouseInteractionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();

            // Gentle attraction to mouse
            const force = (mouseInteractionDistance - distMouse) / mouseInteractionDistance;
            const angle = Math.atan2(dyMouse, dxMouse);
            // Move slightly towards mouse
            p.x -= Math.cos(angle) * force * 0.5;
            p.y -= Math.sin(angle) * force * 0.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorStr}, 0.6)`;
        ctx.fill();

        // Connect lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${colorStr}, ${0.2 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};


const Portfolio = () => {
  // --- STATE ---
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm Elangovan's AI Twin. Ask me about his pentesting skills or projects!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef(null);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  // Mobile Menu State (Hover based)
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  // Gemini Features State
  const [draftContext, setDraftContext] = useState({ company: '', role: '' });
  const [contactMessage, setContactMessage] = useState('');
  const [isDrafting, setIsDrafting] = useState(false);
  const [projectInsights, setProjectInsights] = useState({});
  const [loadingProject, setLoadingProject] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobDesc, setJobDesc] = useState('');
  const [jobAnalysis, setJobAnalysis] = useState(null);
  const [isAnalyzingJob, setIsAnalyzingJob] = useState(false);
  const [activeSkillTip, setActiveSkillTip] = useState({ skill: '', tip: '' });
  const [loadingSkill, setLoadingSkill] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Contact Form State
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 300;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // --- API HELPER ---
  const callGemini = async (prompt, systemInstruction = "") => {
    const apiKey = "AIzaSyDSW_Pi5gNIeN0mqBGiJUKqVeWrshBLoTM"; // Runtime provided
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
          }),
        }
      );
      if (!response.ok) throw new Error('API Call failed');
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
    } catch (error) {
      console.error(error);
      return "System error: Unable to contact AI endpoints.";
    }
  };

  // --- HANDLERS ---
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuHovered(false); // Close mobile menu on click
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsGenerating(true);
    const response = await callGemini(userMsg, `You are Elangovan's AI assistant. Context: ${RESUME_CONTEXT}`);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsGenerating(false);
  };

  const handleMagicDraft = async () => {
    if (!draftContext.company) return alert("Please enter a company name.");
    setIsDrafting(true);

    const prompt = `Write a professional recruitment email FROM a hiring manager at "${draftContext.company}" TO "Elangovan".
    Role: ${draftContext.role || 'Cybersecurity Specialist'}.
    Context: Mention you found his portfolio impressive, specifically his CPT certification and internship at Redynox.
    Ask for his availability for an interview. Keep it concise (under 100 words).`;

    const draft = await callGemini(prompt);
    setContactMessage(draft);
    setIsDrafting(false);
  };

  const handleProjectScan = async (index, project) => {
    if (projectInsights[index]) return;
    setLoadingProject(index);
    const prompt = `Analyze this security project: ${project.title}. Desc: ${project.desc}. Stack: ${project.tags.join(', ')}. Give a 1-sentence technical complexity rating and why.`;
    const insight = await callGemini(prompt);
    setProjectInsights(prev => ({...prev, [index]: insight}));
    setLoadingProject(null);
  };

  const handleJobAnalysis = async () => {
    if (!jobDesc) return;
    setIsAnalyzingJob(true);
    const prompt = `Compare Elangovan's resume (Context) with this Job Description: "${jobDesc}". Give a % match and 3 missing skills if any. Keep it brief. Resume Context: ${RESUME_CONTEXT}`;
    const result = await callGemini(prompt);
    setJobAnalysis(result);
    setIsAnalyzingJob(false);
  };

  const handleSkillClick = async (skillName) => {
    if (loadingSkill) return;
    setLoadingSkill(skillName);
    const prompt = `Give a 1-sentence 'Pro Tip' for a pentester using ${skillName}.`;
    const tip = await callGemini(prompt);
    setActiveSkillTip({ skill: skillName, tip });
    setLoadingSkill('');
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingForm(true);

    const formData = new FormData(e.target);

    try {
        const response = await fetch("https://formsubmit.co/ajax/elangovan.cybersec@gmail.com", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setIsFormSubmitted(true);
            e.target.reset();
            setContactMessage('');
        } else {
             throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error("Form error:", error);
        alert("Something went wrong. Please try again or email directly.");
    } finally {
        setIsSubmittingForm(false);
    }
  };

  // --- STYLES FOR THEMES ---
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#0B0F14]' : 'bg-slate-50';
  const textColor = isDark ? 'text-slate-200' : 'text-slate-800';
  const muteColor = isDark ? 'text-[#C7D3DD]' : 'text-slate-600';
  const cardBg = isDark ? 'bg-[#1A2634]' : 'bg-white';
  const borderColor = isDark ? 'border-[#1A2634]' : 'border-slate-200';
  const navText = isDark ? 'text-[#C7D3DD]' : 'text-slate-600';
  const glassClass = isDark ? 'bg-[#1A2634]/90 backdrop-blur-md border-[#1A2634]' : 'bg-white/80 backdrop-blur-md border-slate-200';
  const inputBg = isDark ? 'bg-[#0B0F14]' : 'bg-slate-50';
  const inputBorder = isDark ? 'border-[#1A2634]' : 'border-slate-300';
  const inputPlaceholder = isDark ? 'placeholder-[#C7D3DD]/30' : 'placeholder-slate-400';

  // --- RENDER ---
  return (
    <div className={`min-h-screen ${bgColor} font-sans ${textColor} selection:bg-[#00E3C2] selection:text-[#0B0F14] overflow-x-hidden transition-colors duration-500`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; }

        :root {
          --teal: #00E3C2;
        }

        .glass-dark {
          background: rgba(26, 38, 52, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 227, 194, 0.1);
        }

        .glass-light {
           background: rgba(255, 255, 255, 0.7);
           backdrop-filter: blur(12px);
           border: 1px solid rgba(0, 0, 0, 0.05);
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${isDark ? '#0B0F14' : '#F8FAFC'}; }
        ::-webkit-scrollbar-thumb { background: #00E3C2; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #00b399; }
      `}</style>

      {/* CONSTELLATION BACKGROUND */}
      <ConstellationBackground theme={theme} />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 border-b ${isDark ? 'glass-dark border-[#1A2634]' : 'glass-light border-slate-200'}`}>
        <div className="container mx-auto px-5 sm:px-7 max-w-[80rem] flex justify-between items-center relative">
          <div onClick={() => scrollTo('home')} className="cursor-pointer group flex items-center gap-3">
             <div className={`w-10 h-10 ${isDark ? 'bg-[#00E3C2] text-[#0B0F14]' : 'bg-teal-600 text-white'} flex items-center justify-center font-bold text-lg rounded-sm shadow-[0_0_15px_rgba(0,227,194,0.3)] transform group-hover:rotate-45 transition-all duration-300`}>EP</div>
             <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-800'} tracking-widest hidden sm:block group-hover:text-[#00E3C2] transition-colors`}>ELANGOVAN</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex gap-8 text-sm font-medium ${navText}`}>
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`hover:text-[#00E3C2] transition-colors tracking-wide relative group ${activeSection === item.toLowerCase() ? 'text-[#00E3C2]' : ''}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00E3C2] transition-all duration-300 group-hover:w-full ${activeSection === item.toLowerCase() ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </nav>

            {/* Theme Toggle & CV (Moved to Header for Mobile too) */}
            <div className={`flex items-center gap-3 ${isDark ? '' : ''}`}>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${isDark ? 'bg-[#1A2634] text-yellow-400 hover:bg-[#253241]' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="/resume.pdf"
                download="Elangovan_Resume.pdf"
                className={`py-2 px-4 ${isDark ? 'bg-[#1A2634] text-[#00E3C2] border-[#00E3C2]/30' : 'bg-teal-600 text-white border-teal-600'} border rounded-sm hover:bg-[#00E3C2] hover:text-[#0B0F14] transition-all duration-300 flex items-center gap-2 text-xs font-bold shadow-lg group tracking-wider`}
              >
                CV <Download size={14} className="group-hover:translate-y-1 transition-transform"/>
              </a>
            </div>

            {/* Mobile Hamburger Menu (Hover-based) */}
            <div
              className="md:hidden relative"
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
            >
              <button className={`p-2 rounded-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>
                <Menu size={24} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full right-0 w-48 pt-2 transform transition-all duration-300 origin-top-right ${isMenuHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                <div className={`${isDark ? 'bg-[#0B0F14] border-[#1A2634]' : 'bg-white border-slate-200'} border rounded-xl shadow-2xl p-2 flex flex-col gap-1 backdrop-blur-xl`}>
                  {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollTo(item.toLowerCase())}
                      className={`text-left py-2 px-4 rounded-lg text-sm font-medium transition-colors ${isDark ? 'text-slate-300 hover:bg-[#1A2634] hover:text-[#00E3C2]' : 'text-slate-600 hover:bg-slate-100 hover:text-teal-600'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section id="home" className={`min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden ${isDark ? '' : 'bg-slate-50'}`}>
          {isDark && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E3C2]/10 rounded-full blur-[120px] pointer-events-none"></div>}

          <div className="container mx-auto px-5 sm:px-7 max-w-[80rem] relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="flex flex-col gap-8 max-w-2xl order-2 lg:order-1">
                <Reveal animation="fade-right">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm ${isDark ? 'bg-[#1A2634]/50 border-l-4 border-[#00E3C2] text-[#00E3C2]' : 'bg-white border-l-4 border-teal-600 text-teal-700 shadow-sm'} text-xs font-bold tracking-widest uppercase`}>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDark ? 'bg-[#00E3C2]' : 'bg-teal-600'} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-[#00E3C2]' : 'bg-teal-600'}`}></span>
                    </span>
                    System Status: Online
                  </div>
                </Reveal>

                <Reveal animation="fade-up" delay={100}>
                  <div className="space-y-2">
                    <p className={`text-2xl sm:text-3xl font-bold tracking-tight mb-0 ${isDark ? 'text-[#00E3C2]' : 'text-teal-600'}`}>
                      Hi, I'm
                    </p>

                    <h1 className={`text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-normal tracking-tighter ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600' : 'text-teal-900'} drop-shadow-sm pb-4`}>
                      Elangovan
                    </h1>

                    <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-[#00E3C2]' : 'text-teal-600'} h-[1.2em] tracking-wide mt-2 flex items-center gap-2`}>
                      <Typewriter className={isDark ? 'text-[#00E3C2]' : 'text-teal-600'} words={["Certified Penetration Tester", "Cybersecurity Researcher", "Cyber Enthusiast"]} />
                    </h2>
                  </div>
                </Reveal>

                <Reveal animation="fade-up" delay={200}>
                  <p className={`${muteColor} text-lg md:text-xl max-w-xl leading-relaxed border-l-2 ${isDark ? 'border-[#1A2634]' : 'border-slate-300'} pl-6 font-light`}>
                    {RESUME_DATA.about}
                  </p>
                </Reveal>

                <Reveal animation="fade-up" delay={300}>
                  <div className="flex flex-wrap gap-4 mt-4">
                     <button onClick={() => setShowJobModal(true)} className={`group px-7 py-4 ${isDark ? 'bg-[#1A2634] text-white border border-[#00E3C2]/20' : 'bg-white text-slate-800 border border-slate-300'} rounded-sm font-bold hover:border-[#00E3C2] transition-all flex items-center gap-3`}>
                        <Briefcase size={20} className="text-[#00E3C2]"/>
                        <span>Check Job Fit</span>
                     </button>
                     <button onClick={() => setIsChatOpen(true)} className={`px-7 py-4 ${isDark ? 'bg-[#00E3C2] text-[#0B0F14]' : 'bg-teal-600 text-white'} rounded-sm font-bold hover:bg-[#00c4a7] transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(0,227,194,0.2)]`}>
                        <Sparkles size={20} />
                        <span>Ask My AI Twin</span>
                     </button>
                  </div>
                </Reveal>

                <Reveal animation="fade-up" delay={400}>
                  <div className="flex gap-6 mt-6">
                     {[
                       { icon: Github, href: "https://github.com/Jarvis2024-hub" },
                       { icon: Linkedin, href: "https://www.linkedin.com/in/elangovan4641477/" },
                       { icon: Mail, href: `mailto:${RESUME_DATA.email}` }
                     ].map((social, i) => (
                       <a key={i} href={social.href} target="_blank" rel="noreferrer" className={`${muteColor} hover:text-[#00E3C2] transition-all hover:-translate-y-1 p-2 ${cardBg} rounded-sm hover:bg-opacity-80`}>
                         <social.icon size={20} />
                       </a>
                     ))}
                  </div>
                </Reveal>
              </div>

              <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                 <Reveal animation="scale-up" delay={200} className="relative z-10">
                    <div className={`relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full overflow-hidden border-2 ${isDark ? 'border-[#00E3C2]/30' : 'border-teal-600/30'} shadow-[0_0_30px_rgba(0,227,194,0.1)]`}>
                      <img src="/profile.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/1A2634/00E3C2?text=EP"; }} alt="Elangovan P" className="w-full h-full object-cover" />
                    </div>

                    <div className={`absolute top-12 -left-8 ${isDark ? 'bg-[#1A2634]/90' : 'bg-white/90'} backdrop-blur-md p-4 rounded-sm shadow-xl border-l-4 border-[#00E3C2] animate-float`}>
                      <Shield className="text-[#00E3C2] w-8 h-8 mb-2" />
                      <p className={`font-bold ${textColor} text-sm`}>Certified</p>
                      <p className={`text-xs ${isDark ? 'text-[#C7D3DD]' : 'text-slate-500'}`}>Penetration Tester</p>
                    </div>
                 </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className={`py-20 md:py-32 relative ${isDark ? '' : 'bg-white'}`}>
          {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-[#1A2634]/30 to-[#0B0F14] opacity-50 z-0 pointer-events-none"></div>}

          <div className="container mx-auto px-5 sm:px-7 max-w-[80rem] relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[#00E3C2] font-bold text-lg font-mono">01.</span>
                <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>About Me</h2>
                <div className={`h-px ${isDark ? 'bg-[#1A2634]' : 'bg-slate-200'} flex-1 ml-4`}></div>
              </div>
            </Reveal>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:max-w-4xl">
                <Reveal delay={200}>
                  <p className={`${muteColor} text-lg leading-relaxed`}>
                    {RESUME_DATA.about}
                  </p>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                  {[
                    { count: "05", label: "Internships" },
                    { count: "02", label: "CTF Wins" },
                    { count: "04", label: "Major Projects" },
                  ].map((item, i) => (
                    <Reveal key={i} delay={300 + (i * 100)} animation="fade-up">
                      <div className={`p-6 rounded-sm border ${borderColor} ${cardBg} ${isDark ? 'bg-[#1A2634]/50' : ''} hover:border-[#00E3C2] transition-all group`}>
                        <h3 className={`text-4xl font-bold mb-1 ${textColor} group-hover:text-[#00E3C2] transition-colors`}>{item.count}</h3>
                        <p className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-[#C7D3DD]' : 'text-slate-500'}`}>{item.label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={500}>
                  <div className="mt-12">
                    <h4 className={`text-lg font-bold ${textColor} mb-4 flex items-center gap-2`}>
                      <Globe size={20} className="text-[#00E3C2]"/> Languages
                    </h4>
                    <div className="flex gap-3">
                      {["English", "Tamil"].map((lang) => (
                        <span key={lang} className={`px-5 py-2 rounded-sm ${cardBg} border ${borderColor} ${muteColor} font-medium shadow-sm hover:border-[#00E3C2] hover:text-[#00E3C2] transition-all cursor-default`}>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className={`py-20 md:py-32 relative ${isDark ? '' : 'bg-slate-50'}`}>
           <div className="container mx-auto px-5 sm:px-7 max-w-[80rem]">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <span className="text-[#00E3C2] font-bold text-lg font-mono">02.</span>
                <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>Work History</h2>
                <div className={`h-px ${isDark ? 'bg-[#1A2634]' : 'bg-slate-200'} flex-1 ml-4`}></div>
              </div>
            </Reveal>

            <div className="space-y-6">
              {RESUME_DATA.experience.map((exp, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className={`group relative pl-8 border-l ${isDark ? 'border-[#1A2634]' : 'border-slate-200'} hover:border-[#00E3C2] transition-colors duration-500`}>
                    <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ${bgColor} border ${isDark ? 'border-[#C7D3DD]/30' : 'border-slate-400'} group-hover:border-[#00E3C2] group-hover:bg-[#00E3C2] transition-all`}></div>

                    <div className={`${cardBg} p-6 rounded-sm border ${borderColor} hover:border-[#00E3C2]/50 transition-all hover:shadow-md`}>
                       <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                          <h3 className={`text-xl font-bold ${textColor} group-hover:text-[#00E3C2] transition-colors`}>{exp.title}</h3>
                          <span className={`text-sm font-mono text-[#00E3C2] ${isDark ? 'bg-[#00E3C2]/10' : 'bg-teal-50'} px-3 py-1 rounded-sm w-fit`}>{exp.year}</span>
                       </div>
                       <div className="flex items-center gap-2 mb-4">
                         <Briefcase size={16} className={muteColor}/>
                         <span className={`font-semibold ${muteColor}`}>{exp.company}</span>
                         <span className={`${muteColor} text-sm`}>• {exp.type}</span>
                       </div>
                       <p className={`${muteColor} leading-relaxed opacity-80`}>{exp.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
          {/* Ambient Glow */}
          {isDark && <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00E3C2]/5 rounded-full blur-[120px]"></div>}

          <div className="container mx-auto px-5 sm:px-7 max-w-[80rem] relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-16 text-white">
                <span className="text-[#00E3C2] font-bold text-lg font-mono">03.</span>
                <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>Skills & Education</h2>
                <div className={`h-px ${isDark ? 'bg-[#1A2634]' : 'bg-slate-200'} flex-1 ml-4`}></div>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-12 gap-12">

              {/* Education Column */}
              <div className="lg:col-span-5 space-y-12">
                <Reveal animation="fade-right">
                   <h3 className={`text-xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
                     <Layers className="text-[#00E3C2]"/> Education Path
                   </h3>
                   <div className="space-y-8">
                    {RESUME_DATA.education.map((edu, idx) => (
                      <div key={idx} className={`relative pl-6 border-l ${isDark ? 'border-[#1A2634]' : 'border-slate-200'} group`}>
                        <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${isDark ? 'bg-[#1A2634]' : 'bg-slate-300'} group-hover:bg-[#00E3C2] transition-colors`}></div>
                        <h4 className={`text-lg font-bold ${textColor}`}>{edu.title}</h4>
                        <p className="text-[#00E3C2] text-sm mb-1 opacity-80">{edu.school}</p>
                        <p className={`${muteColor} text-sm opacity-60`}>{edu.year} • {edu.desc}</p>
                      </div>
                    ))}
                   </div>
                </Reveal>

                <Reveal animation="fade-right" delay={200}>
                  <div className={`p-6 rounded-sm ${cardBg} border ${borderColor} hover:border-[#00E3C2]/30 transition-colors`}>
                    <h3 className={`text-xl font-bold ${textColor} mb-4 flex items-center gap-2`}>
                      <Shield className="text-[#00E3C2]"/> Certifications
                    </h3>
                    <ul className="space-y-3">
                      {["Certified Penetration Tester (CPT)", "AWS Cloud Practitioner", "NPTEL Java Programming"].map((cert, i) => (
                        <li key={i} className={`flex items-center gap-3 ${muteColor} text-sm`}>
                          <CheckCircle size={16} className="text-[#00E3C2] shrink-0"/> {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {/* Skills Grid */}
              <div className="lg:col-span-7">
                <Reveal>
                  <h3 className={`text-xl font-bold ${textColor} mb-6 flex items-center gap-2`}>
                     <Cpu className="text-[#00E3C2]"/> Technical Stack
                   </h3>
                </Reveal>

                <div className={`mb-6 transition-all duration-300 overflow-hidden ${activeSkillTip.tip ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <div className={`bg-[#00E3C2]/10 border border-[#00E3C2]/30 text-[#00E3C2] p-4 rounded-sm flex justify-between items-start`}>
                      <div className="flex gap-3">
                        <Lightbulb className="shrink-0 text-[#00E3C2]" size={20} />
                        <p className={`text-sm ${muteColor}`}><strong className={`${textColor} block mb-1`}>Expert Insight:</strong> {activeSkillTip.tip}</p>
                      </div>
                      <button onClick={() => setActiveSkillTip({skill:'', tip:''})} className={`hover:${textColor}`}><X size={16}/></button>
                   </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {RESUME_DATA.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <Reveal key={idx} delay={idx * 50} animation="scale-up">
                        <div
                          onClick={() => handleSkillClick(skill.name)}
                          className={`${cardBg} ${isDark ? 'hover:bg-[#081F2F]' : 'hover:bg-slate-50'} p-6 rounded-sm border ${borderColor} hover:border-[#00E3C2]/50 transition-all cursor-pointer group flex flex-col items-center gap-4 text-center h-full hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(0,227,194,0.1)]`}
                        >
                           <div className={`${muteColor} group-hover:text-[#00E3C2] transition-colors`}>
                             {loadingSkill === skill.name ? <Loader2 className="animate-spin" size={32}/> : <Icon size={32} />}
                           </div>
                           <div>
                             <h4 className={`font-bold ${textColor} text-sm tracking-wide`}>{skill.name}</h4>
                             <div className="flex gap-1 justify-center mt-3">
                               {[...Array(5)].map((_, i) => (
                                 <div key={i} className={`h-1 w-4 rounded-full transition-colors ${i < skill.rating ? 'bg-[#00E3C2]' : isDark ? 'bg-[#0B0F14]' : 'bg-slate-300'}`}></div>
                               ))}
                             </div>
                           </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className={`py-20 md:py-32 ${isDark ? '' : 'bg-slate-50'} relative`}>
           <div className="container mx-auto px-5 sm:px-7 max-w-[80rem]">
            <Reveal>
              <div className="flex items-center gap-4 mb-16">
                <span className="text-[#00E3C2] font-bold text-lg font-mono">04.</span>
                <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>Latest Projects</h2>
                <div className={`h-px ${isDark ? 'bg-[#1A2634]' : 'bg-slate-200'} flex-1 ml-4`}></div>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {RESUME_DATA.projects.map((project, idx) => (
                <Reveal key={idx} delay={idx * 150} animation="fade-up">
                  <div className={`group flex flex-col h-full ${cardBg} border ${borderColor} rounded-sm overflow-hidden hover:border-[#00E3C2]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00E3C2]/10`}>
                    <div className={`relative h-48 ${isDark ? 'bg-[#0B0F14]' : 'bg-slate-200'} overflow-hidden flex items-center justify-center border-b ${borderColor}`}>
                       <div className={`${isDark ? 'text-[#C7D3DD]/50' : 'text-slate-400'} group-hover:text-[#00E3C2] group-hover:scale-110 transition-all duration-500 opacity-50 group-hover:opacity-100`}>
                          {project.image === 'shield' && <Shield size={80} strokeWidth={1} />}
                          {project.image === 'terminal' && <Terminal size={80} strokeWidth={1} />}
                          {project.image === 'bot' && <Bot size={80} strokeWidth={1} />}
                          {project.image === 'cpu' && <Cpu size={80} strokeWidth={1} />}
                       </div>

                       <div className={`absolute inset-0 ${isDark ? 'bg-[#0B0F14]/80' : 'bg-white/80'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm`}>
                          <button className={`px-6 py-2 bg-[#00E3C2] ${isDark ? 'text-[#0B0F14]' : 'text-white'} rounded-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 shadow-lg`}>
                            View Details <ArrowRight size={16}/>
                          </button>
                       </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h3 className={`text-xl font-bold ${textColor} group-hover:text-[#00E3C2] transition-colors`}>{project.title}</h3>
                             <p className="text-xs font-bold text-[#00E3C2]/80 uppercase tracking-wider">{project.client}</p>
                          </div>

                          <button
                            onClick={(e) => {e.preventDefault(); handleProjectScan(idx, project)}}
                            disabled={loadingProject === idx}
                            className={`p-2 rounded-sm ${isDark ? 'bg-[#0B0F14]' : 'bg-slate-100'} border ${borderColor} hover:border-[#00E3C2] text-[#00E3C2] transition-colors`}
                            title="AI Analysis"
                          >
                            {loadingProject === idx ? <Loader2 size={18} className="animate-spin"/> : <ScanEye size={18}/>}
                          </button>
                       </div>

                       <p className={`${muteColor} text-sm mb-6 flex-1 opacity-80`}>{project.desc}</p>

                       <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className={`px-3 py-1 ${isDark ? 'bg-[#0B0F14]' : 'bg-slate-100'} border ${borderColor} ${muteColor} text-xs rounded-full group-hover:border-[#00E3C2]/30 transition-colors`}>{tag}</span>
                          ))}
                       </div>

                       {projectInsights[idx] && (
                          <div className={`mt-auto p-4 bg-[#00E3C2]/10 ${muteColor} rounded-sm text-sm border border-[#00E3C2]/30 animate-in fade-in`}>
                             <div className="flex items-center gap-2 font-bold text-[#00E3C2] text-xs uppercase mb-1">
                               <Bot size={14} /> AI Analysis
                             </div>
                             {projectInsights[idx]}
                          </div>
                        )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
           </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-5 sm:px-7 max-w-[80rem]">
            <Reveal>
              <div className="flex items-center gap-4 mb-16 justify-center">
                <span className="text-[#00E3C2] font-bold text-lg font-mono">05.</span>
                <h2 className={`text-3xl md:text-5xl font-bold ${textColor}`}>Get In Touch</h2>
              </div>
            </Reveal>

            <div className={`max-w-4xl mx-auto grid md:grid-cols-5 gap-0 ${cardBg} rounded-sm overflow-hidden shadow-2xl border ${borderColor}`}>

              {/* Contact Info Sidebar */}
              <div className={`md:col-span-2 ${isDark ? 'bg-[#081F2F]' : 'bg-slate-800'} p-8 text-white flex flex-col justify-between border-r ${borderColor}`}>
                 <div>
                   <h3 className="text-xl font-bold mb-6 text-[#00E3C2]">Contact Information</h3>
                   <p className="text-slate-300 mb-8 text-sm opacity-80">Open to full-time opportunities and freelance projects. Let's build something secure.</p>

                   <div className="space-y-6">
                     <div className="flex items-start gap-4 group">
                       <Mail className="shrink-0 text-[#00E3C2] group-hover:scale-110 transition-transform" size={20}/>
                       <div className="text-sm break-all text-slate-300">{RESUME_DATA.email}</div>
                     </div>
                     <div className="flex items-start gap-4 group">
                       <Phone className="shrink-0 text-[#00E3C2] group-hover:scale-110 transition-transform" size={20}/>
                       <div className="text-sm text-slate-300">{RESUME_DATA.phone}</div>
                     </div>
                     <div className="flex items-start gap-4 group">
                       <MapPin className="shrink-0 text-[#00E3C2] group-hover:scale-110 transition-transform" size={20}/>
                       <div className="text-sm text-slate-300">{RESUME_DATA.location}</div>
                     </div>
                   </div>
                 </div>

                 <div className="flex gap-4 mt-8">
                    <a href="https://www.linkedin.com/in/elangovan4641477/" target="_blank" rel="noreferrer" className={`p-2 ${isDark ? 'bg-[#1A2634]' : 'bg-slate-700'} rounded-full hover:bg-[#00E3C2] hover:text-[#0B0F14] text-slate-300 transition-colors`}><Linkedin size={18}/></a>
                    <a href="https://github.com/Jarvis2024-hub" target="_blank" rel="noreferrer" className={`p-2 ${isDark ? 'bg-[#1A2634]' : 'bg-slate-700'} rounded-full hover:bg-[#00E3C2] hover:text-[#0B0F14] text-slate-300 transition-colors`}><Github size={18}/></a>
                 </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3 p-8 lg:p-12">

                {/* AI Feature */}
                <div className={`mb-8 p-4 ${inputBg} rounded-sm border ${borderColor}`}>
                   <div className="flex items-center justify-between mb-3">
                     <span className="text-xs font-bold text-[#00E3C2] uppercase flex items-center gap-1"><Zap size={14}/> For Recruiters</span>
                   </div>
                   <div className="flex gap-2">
                      <input
                        type="text" placeholder="Company Name"
                        className={`flex-1 p-2 text-sm ${inputBg} border ${inputBorder} rounded-sm ${textColor} focus:outline-none focus:border-[#00E3C2]`}
                        value={draftContext.company}
                        onChange={(e) => setDraftContext({...draftContext, company: e.target.value})}
                      />
                      <input
                        type="text" placeholder="Role"
                        className={`flex-1 p-2 text-sm ${inputBg} border ${inputBorder} rounded-sm ${textColor} focus:outline-none focus:border-[#00E3C2]`}
                        value={draftContext.role}
                        onChange={(e) => setDraftContext({...draftContext, role: e.target.value})}
                      />
                      <button
                        onClick={handleMagicDraft} disabled={isDrafting}
                        className={`px-4 py-2 bg-[#00E3C2] ${isDark ? 'text-[#0B0F14]' : 'text-white'} text-xs font-bold rounded-sm hover:bg-[#00c4a7] transition-colors flex items-center gap-2`}
                      >
                         {isDrafting ? <Loader2 size={14} className="animate-spin"/> : <Sparkles size={14}/>}
                         <span>Magic Draft</span>
                      </button>
                   </div>
                </div>

                {/* AJAX FORM */}
                {isFormSubmitted ? (
                   <div className="bg-[#00E3C2]/10 border border-[#00E3C2] p-8 rounded-sm text-center animate-in fade-in zoom-in-95">
                      <div className="w-16 h-16 bg-[#00E3C2] rounded-full flex items-center justify-center mx-auto mb-4">
                         <CheckCircle size={32} className="text-[#0B0F14]"/>
                      </div>
                      <h3 className={`text-xl font-bold ${textColor} mb-2`}>Message Sent!</h3>
                      <p className={`${muteColor} mb-4`}>Thanks for reaching out. I'll get back to you shortly.</p>
                      <button onClick={() => setIsFormSubmitted(false)} className="text-[#00E3C2] font-bold hover:underline text-sm">Send another message</button>
                   </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={`text-xs font-bold ${muteColor} uppercase mb-1 block`}>Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            className={`w-full p-3 ${inputBg} border-b-2 ${inputBorder} focus:border-[#00E3C2] ${textColor} outline-none transition-all ${inputPlaceholder}`}
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className={`text-xs font-bold ${muteColor} uppercase mb-1 block`}>Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            className={`w-full p-3 ${inputBg} border-b-2 ${inputBorder} focus:border-[#00E3C2] ${textColor} outline-none transition-all ${inputPlaceholder}`}
                            placeholder="john@example.com"
                          />
                        </div>
                     </div>
                     <div>
                        <label className={`text-xs font-bold ${muteColor} uppercase mb-1 block`}>Message</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          className={`w-full p-3 ${inputBg} border-b-2 ${inputBorder} focus:border-[#00E3C2] ${textColor} outline-none transition-all resize-none ${inputPlaceholder}`}
                          placeholder="Project details..."
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                        />
                     </div>
                     <button type="submit" disabled={isSubmittingForm} className={`w-full py-3 bg-[#00E3C2] ${isDark ? 'text-[#0B0F14]' : 'text-white'} font-bold rounded-sm shadow-[0_0_20px_rgba(0,227,194,0.2)] hover:shadow-[0_0_30px_rgba(0,227,194,0.4)] hover:scale-[1.02] transition-all flex justify-center items-center gap-2 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed`}>
                        {isSubmittingForm ? <Loader2 size={18} className="animate-spin"/> : <Send size={18}/>}
                        {isSubmittingForm ? 'Sending...' : 'Send Message'}
                     </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`py-8 ${isDark ? 'bg-[#0B0F14]' : 'bg-slate-100'} text-center border-t ${borderColor} ${muteColor} text-sm`}>
         <p>© {new Date().getFullYear()} Elangovan P. <span className="text-[#00E3C2]">System Secure</span>.</p>
      </footer>

      {/* --- MODALS & OVERLAYS --- */}

      {/* Job Fit Modal */}
      {showJobModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className={`glass ${isDark ? 'glass-dark' : 'glass-light'} rounded-sm w-full max-w-lg shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-300 border ${borderColor}`}>
            <div className={`${isDark ? 'bg-[#1A2634]' : 'bg-slate-100'} p-6 flex justify-between items-center ${textColor} border-b ${borderColor}`}>
              <h3 className="font-bold text-lg flex items-center gap-2 text-[#00E3C2]"><Briefcase size={20}/> AI Job Matcher</h3>
              <button onClick={() => setShowJobModal(false)} className="hover:text-[#00E3C2] transition-colors"><X size={24}/></button>
            </div>
            <div className={`p-8 ${inputBg}`}>
              <textarea
                className={`w-full p-4 ${isDark ? 'bg-[#1A2634]' : 'bg-white'} border ${inputBorder} rounded-sm mb-6 h-32 focus:outline-none focus:border-[#00E3C2] transition-all text-sm ${textColor} ${inputPlaceholder}`}
                placeholder="Paste Job Description here..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
              {jobAnalysis && (
                <div className={`bg-[#00E3C2]/10 border border-[#00E3C2]/30 rounded-sm p-4 mb-6 text-sm ${muteColor} animate-in slide-in-from-bottom-2`}>
                  <div className="flex items-center gap-2 font-bold text-[#00E3C2] mb-2"><Sparkles size={16}/> Match Report</div>
                  <div className="whitespace-pre-line">{jobAnalysis}</div>
                </div>
              )}
              <button
                onClick={handleJobAnalysis}
                disabled={isAnalyzingJob || !jobDesc}
                className={`w-full py-3 bg-[#00E3C2] ${isDark ? 'text-[#0B0F14]' : 'text-white'} rounded-sm font-bold hover:brightness-110 transition-all flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(0,227,194,0.3)] uppercase tracking-wide text-sm`}
              >
                {isAnalyzingJob ? <Loader2 size={20} className="animate-spin"/> : <CheckCircle size={20}/>}
                {isAnalyzingJob ? 'Processing...' : 'Analyze Fit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <div className={`glass ${isDark ? 'glass-dark' : 'glass-light'} rounded-sm shadow-2xl w-80 sm:w-96 mb-6 overflow-hidden border ${borderColor} flex flex-col h-[500px] animate-in slide-in-from-bottom-10 zoom-in-95 duration-300`}>
            <div className={`${isDark ? 'bg-[#1A2634]' : 'bg-slate-100'} p-4 ${textColor} flex justify-between items-center shadow-md border-b ${borderColor}`}>
              <div className="flex items-center gap-3">
                 <div className={`w-8 h-8 bg-[#00E3C2] rounded-full flex items-center justify-center ${isDark ? 'text-[#0B0F14]' : 'text-white'}`}><Bot size={18} /></div>
                 <div>
                    <h3 className="font-bold text-sm">Elangovan AI</h3>
                    <p className={`text-[10px] ${muteColor} flex items-center gap-1`}><span className="w-1.5 h-1.5 bg-[#00E3C2] rounded-full animate-pulse"></span> Online</p>
                 </div>
              </div>
              <button onClick={() => setIsChatOpen(false)}><X size={18} /></button>
            </div>

            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${inputBg}`}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-sm text-sm shadow-sm ${msg.role === 'user' ? 'bg-[#00E3C2] text-[#0B0F14]' : `${cardBg} border ${borderColor} ${textColor}`}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isGenerating && <div className="flex justify-start"><div className={`${cardBg} p-3 rounded-sm shadow-sm`}><Loader2 size={16} className="animate-spin text-[#00E3C2]"/></div></div>}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className={`p-3 ${isDark ? 'bg-[#1A2634]' : 'bg-slate-100'} border-t ${borderColor} flex gap-2`}>
              <input
                type="text"
                placeholder="Ask me anything..."
                className={`flex-1 ${inputBg} border-transparent focus:${inputBg} focus:border-[#00E3C2] border focus:ring-1 focus:ring-[#00E3C2] rounded-sm px-4 py-2 text-sm ${textColor} outline-none transition-all ${inputPlaceholder}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" disabled={isGenerating || !inputValue.trim()} className={`bg-[#00E3C2] ${isDark ? 'text-[#0B0F14]' : 'text-white'} w-9 h-9 rounded-sm flex items-center justify-center hover:bg-[#00c4a7] transition-all`}>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className={`group flex items-center gap-2 bg-[#00E3C2] ${isDark ? 'text-[#0B0F14]' : 'text-white'} pl-4 pr-5 py-3 rounded-sm shadow-[0_0_20px_rgba(0,227,194,0.4)] hover:brightness-110 transition-all duration-300 z-50 hover:-translate-y-1 font-bold tracking-wide uppercase text-sm`}
          >
            <Bot size={24} className="animate-bounce"/>
            <span>Chat with AI</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;