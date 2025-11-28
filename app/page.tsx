import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */} 
      
    <main className="relative">
      {/* navigation */} 

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Aren Brazil</h1>
          <div className="flex gap-8 text-sm">
            <a href="#work" className="hover:text-zinc-400 transition-colors">My work</a>
            <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl text-center">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Cinematic 
            <br />
            <span className="text-amber-500">Storytelling</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Crafting visual narratives that captivate, inspire, and leave lasting impressions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#work"
              className="px-8 py-4 bg-white text-black font medium rounded-full hover:bg-zinc-400 transition-colors">
              View My Work 
             </a>
              <a
             href="#contact"
             className="px-8 py-4 border border-white/20 font medium rounded-full hover:bg-white/30 transition-colors">
              Get In Touch
             </a>
          </div>

        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h3>
          <p className="text-xl text-zinc-400 mb-16">A selection of my recent projects </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  {/* <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1818 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg> */}
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover: bg-white/10 transition colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colours">
                  <a href="https://www.instagram.com/abraz_editz/reel/DRUPTwijivs/" className="hover:text-white transition-colors">Project Title One</a>
              </h4>
              <p className="text-zinc-400">Short Film</p>
            </div>

            {/* Project Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1818 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover: bg-white/10 transition colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colours">
                Project Title Two
              </h4>
              <p className="text-zinc-400">Edits</p>
            </div>

            {/* Project Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1818 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover: bg-white/10 transition colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colours">
                Project Title Three
              </h4>
              <p className="text-zinc-400">School videos</p>
            </div>

            {/* Project Card 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  {/* <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1818 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg> */}
                <Image 
                src="INSTA.png" 
                width={250}
                height={250}
                alt="ball is life">
              </Image>
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover: bg-white/10 transition colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colours">
                  <a href="https://www.instagram.com/abraz_editz/reel/DRUPTwijivs/" className="hover:text-white transition-colors">bball mixtapes</a>
              </h4>
              <p className="text-zinc-400">Basketball Mixtapes</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">About</h3>
          <p className="text-xl text-zinc-400 leading-relaxed mb-6">
            I'm a videographer and video editor and film maker who is passionate about bringing stories to life through the lens,
            aswell as creating the best visually apealing videos from what I film. With a fair amount of experience and working with 
            proffesionals in video editing,sports videography and film making, I bring a high quality viewing experience for my viewers.
          </p>

          <p className="text-xl text-zinc-400 leading-relaxed">
            From concept to final cut, i bring dedication, creativity, and technical expertise to every project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text 4xl md:text-5xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-xl text-zinc-400 mb-12">
            Have a project or idea in mind? I'd love to hear about it!
          </p>
          <a
            href="mailto:arenbrazil@gmail.com"
            className="inline-block px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors text-lg">Get In Touch</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10"></footer>
      <div className="max-w-7xl mx-auto flexx flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-sm">
        <p>&copy; 2025 Aren brazil. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Tiktok</a>
        </div>
      </div>
    </main>
    </div>
  );
}
