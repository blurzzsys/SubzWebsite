
import { Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Eye className="w-10 h-10 text-white" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            <span className="text-white">VISUAL</span>
          </h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          <a 
            href="#install" 
            className="text-white/90 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Install
          </a>
          <a 
            href="#discord" 
            className="text-white/90 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Discord
          </a>
          <a 
            href="#contact" 
            className="text-white/90 hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Index;
