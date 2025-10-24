
import React, { useState, useEffect } from 'react';
import { Shield, Users, Code, Globe, ChevronDown, Menu, X, Mail, Github, Instagram, Linkedin, CheckCircle, Star, Zap, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-md">
                          <img
                              src="/altay-logo-new.jpeg"
                              alt="Altay logo"
                              className="w-12 h-12 rounded-full"
                          />
                          <span className="text-xl font-bold text-white">ALTAY</span>
                      </div>

            
            <div className="hidden md:flex space-x-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-900/80 px-4 py-2 rounded-lg border border-gray-700">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Organizasyon</div>
                    <div className="text-sm text-white font-medium">sibervatan.org</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/80 px-4 py-2 rounded-lg border border-gray-700">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email address</div>
                    <div className="text-sm text-white font-medium">altay@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded">Ana Sayfa</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded">Hakkımızda</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70"
              preload="auto"
            >
                          <source src="/public/Animasyon_Oluşturma_İsteği_ve_Sonuç.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 opacity-15">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                              <span className="text-white">ALTAY</span>
                              <a href="https://sibervatan.org" target="_blank" rel="noopener noreferrer">
                              <img
                                  src="/sibervatan.png"
                                  alt="Sibervatan Logo"
                                  class="absolute top-0 w-28 transform -translate-x-1/2 left-1/2"
                                  />
                              </a>
              </h1>
              <p className="text-xl text-gray-300 mb-4">Siber Vatan blue team</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="https://docs.siberaltay.org/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Döküman
                </a>
                <button className="px-6 py-2 bg-transparent border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 transition-colors">
                  Github
                </button>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-pink-700 transition-colors flex items-center gap-2">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Main illustration placeholder */}
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Logo and Title */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center w-full">
                  <div className="w-[600px] h-[600px] bg-gradient-to-br from-gray-800/20 to-gray-900/30 backdrop-blur-lg rounded-full flex items-center justify-center border border-gray-600/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                    <img 
                      src="/altay-logo-new.png" 
                      alt="Altay Logo" 
                      className="w-[520px] h-[520px] object-contain filter drop-shadow-xl rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Takım Hakkında</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Siber Vatan platformu için Altay takımı, siber güvenlik alanında uzmanlaşmış profesyonellerden oluşan bir ekiptir. Takımımız, dijital tehditlere karşı savunma stratejileri geliştirmek ve siber güvenlik çözümleri sunmak amacıyla kurulmuştur. Blue team metodolojileri kullanarak, proaktif güvenlik önlemleri alır ve sürekli izleme yaparak sistemlerin güvenliğini sağlarız.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Siber güvenlik uzmanları</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Blue team metodolojileri</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Proaktif güvenlik önlemleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Sürekli sistem izleme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="mb-8">
                <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">PROJE</span>
                <h2 className="text-4xl font-bold text-white mt-2 mb-6">Çalışmalarımız</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Altay takımı olarak siber güvenlik alanında çeşitli projeler geliştiriyoruz. Blue team stratejileri kullanarak savunma odaklı çözümler üretir, güvenlik açıklarını tespit eder ve sistemlerin korunmasını sağlarız. Takımımız sürekli araştırma ve geliştirme faaliyetleri yürüterek sektördeki en güncel tehditlere karşı hazırlıklı olmayı hedefler.
              </p>

            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              {/* Modern Project Card */}
              <div className="max-w-sm mx-auto">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">proje</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      AI chatbot, personalized<br />
                      recommendations
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white mb-4">+100 user</div>
                    <button className="w-full bg-transparent border border-purple-500/50 text-purple-300 py-3 px-6 rounded-xl font-medium hover:bg-purple-500/10 transition-colors">
                      Get Started
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Type of threat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Online presence</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Access to all modules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Notability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-md border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 ">
            {/* Social Media Icons */}
            <div className="flex items-flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a 
                href="https://discord.gg/altay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              
              <a 
                href="https://t.me/altayteam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              
              <a 
                href="https://facebook.com/altayteam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;