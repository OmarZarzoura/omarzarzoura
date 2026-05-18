import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  BrainCircuit,
  Blocks,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const services = [
    {
      title: "Machine Learning & AI Agent Systems",
      description: "Designing intelligent, autonomous agent architectures and deploying state-of-the-art ML models tailored to complex business logic.",
      icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Smart Contract Architecture & Programming",
      description: "Developing secure, gas-optimized decentralized applications and blockchain infrastructure for the Web3 ecosystem.",
      icon: <Blocks className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Technical Curriculum & Executive Training",
      description: "Empowering leadership and engineering teams through rigorous, custom-designed training programs in emerging technologies.",
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-500/30">
      {/* Background ambient light */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full opacity-60" />
      </div>

      <main className="relative max-w-5xl mx-auto px-6 py-24 sm:py-32">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-cyan-400 font-mono tracking-widest uppercase text-sm font-semibold flex items-center gap-4">
              <span className="w-12 h-px bg-cyan-400/50"></span>
              AI & Software Engineering Consultant
            </h2>
            <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight">
              Omar M. Zarzoura
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              "Building the future, block by block."
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <a href="mailto:omar.zarzoura@email.com" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors group">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-cyan-400/50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm sm:text-base">omar.zarzoura@email.com</span>
            </a>
            <a href="tel:+971504018543" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors group">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-cyan-400/50 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm sm:text-base">+971 50 401 8543</span>
            </a>
            <div className="flex items-center gap-3 text-zinc-400 group">
              <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 relative group-hover:border-zinc-700 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm sm:text-base">Dubai, UAE</span>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-white">Core Services</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-cyan-400/30 hover:bg-zinc-900/80 transition-all group"
              >
                <div className="mb-6 p-4 rounded-xl bg-zinc-950 inline-block border border-zinc-800 group-hover:border-cyan-500/20 shadow-lg shadow-cyan-900/5 group-hover:shadow-cyan-900/20 transition-all">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-12 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <a href="https://github.com/OmarZarzoura" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/omarzarzoura/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Omar M. Zarzoura. All rights reserved.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
