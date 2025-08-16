import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import background from './assets/backgroundimg.jpg';

function App() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeHeight = window.innerHeight * 0.8;
      const opacity = 1 - scrollY / fadeHeight;
      setHeroOpacity(opacity > 0 ? opacity : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <div className="relative h-[90vh]">

        <section
          id="home"
          className="sticky top-0 h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4 z-0 transition-opacity duration-300 ease-out"
          style={{
            backgroundImage: `url(${background})`,
            opacity: heroOpacity,
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">I'm Felix Luxke</h1>
          <h2 className="text-2xl sm:text-3xl mt-4 font-semibold">A Software Developer</h2>
        </section>
      </div>
      <div className="h-32 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"></div>

        <section
  id="about"
  className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-white/60 to-gray-100/10 dark:from-gray-800/50 dark:to-gray-900/20 backdrop-blur-xl"
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white/30 dark:bg-gray-800/40 p-10 rounded-3xl shadow-xl backdrop-blur-md">
    
    <div className="w-full md:w-1/2">
      <img
        src="/backgroundimg.jpg"
        alt="Felix Kipkemboi"
        className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        About Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Felix Kipkemboi</span>, a creative software engineer who turns ideas into stunning digital experiences. I blend code and design to build intuitive, clean, and performance-driven interfaces.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        From frontend finesse to smart design systems, I bring both logic and soul into every line of code. Let’s build something that users love!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
        <a
          href="/your-cv.pdf"
          download
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 font-medium"
        >
          📄 Download CV
        </a>
        <div className="flex gap-4">
          <a href="https://github.com/luxke" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/felix-kipkemboi-618916303/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:kipkemboifelix576@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl transition">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">🛠 Tech I Work With</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-600 dark:text-gray-300 text-xl">
      <div className="hover:scale-110 transition">⚛️ React</div>
      <div className="hover:scale-110 transition">🎨 Tailwind CSS</div>
      <div className="hover:scale-110 transition">🟨 JavaScript</div>
      <div className="hover:scale-110 transition">🌐 HTML & CSS</div>
      <div className="hover:scale-110 transition">🧰 Git & GitHub</div>
      <div className="hover:scale-110 transition">📐 Figma</div>
      <div className="hover:scale-110 transition">🔥 Firebase</div>
      <div className="hover:scale-110 transition">⚡ Vite</div>
      <div className="hover:scale-110 transition">📊 Excel / Google Sheets</div>
      <div className="hover:scale-110 transition">🛢️ SQL</div>
      <div className="hover:scale-110 transition">🐍 Python</div>
      <div className="hover:scale-110 transition">  🛠️ React DevTools
      </div>

    </div>
  </div>
</section>

     <section
  id="portfolio"
  className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-8"
>
  <div className="max-w-6xl mx-auto relative">
    <h1 className="text-4xl font-extrabold text-center text-gray-800">
      Portfolio
    </h1>
    <p className="text-lg text-center text-gray-600 mt-10">
      Hover near the edges to explore my proudest creations
    </p>

    <div
      className="relative mt-20 overflow-hidden"
      onMouseMove={(e) => {
        const slider = document.getElementById("slider");
        const { left, right } = slider.getBoundingClientRect();
        const padding = 100;
        const speed = 10;

        if (e.clientX < left + padding) {
          slider.scrollBy({ left: -speed, behavior: "smooth" });
        } else if (e.clientX > right - padding) {
          slider.scrollBy({ left: speed, behavior: "smooth" });
        }
      }}
    >
      <div
        id="slider"
        className="flex overflow-x-auto gap-6 px-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {[
          {
            id: 1,
            title: "Portfolio Website",
            description: "Integrated Portfolio showcasing my bead arts.",
            image: "/Project1.png",
          },
          {
            id: 2,
            title: "E-Commerce poster",
            description: "A poster I designed advertising  a vacancy for a general manager  .",
            image: "/Project2.png",
          },
          {
            id: 3,
            title: "E-Commerce poster",
            description: "Another poster advertising  a vacancy for a general manager.",
            image: "/Project3.png",
          },
          {
            id: 4,
            title: "E-Commerce poster",
            description: "E commerce poster advertising my bead art.",
            image: "/Project4.png",
          },
          {
            id: 5,
            title: "Card",
            description: "A card I designed for my bead art.",
            image: "/Project5.png",
          },
        ].map((project) => (
          <div
            key={project.id}
            className="bg-white w-72 shrink-0 rounded-xl shadow-lg overflow-hidden snap-center transform transition-transform duration-500 ease-in-out"
            style={{
              transformOrigin: "center",
              transition: "transform 0.5s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section
  id="resume"
  className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-16 px-8 flex flex-col items-center"
>
  <h2 className="text-4xl font-bold mb-4">Resume 📄</h2>
  <p className="text-gray-700 text-lg max-w-2xl text-center mb-12">
    Here is my education experience and the skills that fuel my passion for creating awesome digital experiences.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
    <div>
      <h3 className="text-2xl font-semibold mb-6">🎓 Education</h3>
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h4 className="text-xl font-bold">Bachelor in Statistics And Information Technology</h4>
        <p className="text-gray-600">Co-operative University — 2023 - Present </p>
        <p className="mt-2 text-gray-700">
          still working on my degree in co-operative university
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h4 className="text-xl font-bold">Data Analytics</h4>
        <p className="text-gray-600">Power Learning Project — Pesent</p>
        <p className="mt-2 text-gray-700">
          Used analytical thinking to optimize layout choices based on user behavior data, Created dashboards in Google Sheets to visualize project timelines and performance and Analyzing form submission patterns to improve UI flow and reduce drop-offs.
       </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 ">
        <h4 className="text-xl font-bold">Software Engineering</h4>
        <p className="text-gray-600">ALX Africa — 2023</p>
        <p className="mt-2 text-gray-700">
          Completed an intensive program focused on modern frontend tools like Html,CSS,JavaScript,React,Tailwind,CSS and Git/GitHub.
        </p>
      </div>
      
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-6">💼 Experience</h3>
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h4 className="text-xl font-bold">Web Developer & Designer</h4>
        <p className="text-gray-600">Freelance | 2022 - Present</p>
        <p className="mt-2 text-gray-700">
          Designed and built modern, responsive websites using React, Tailwind CSS, and other modern tools,blended functionality and aesthetics to create user-friendly digital experiences,transformed ideas into stunning visuals and intuitive user interfaces using tools like Figma,Worked with clients across different industries to deliver personalized and impactful web solutions and continuously exploring new technologies to push creative and technical boundaries.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-16 w-full max-w-4xl">
    <h3 className="text-2xl font-semibold mb-6 text-center">🛠️ Skills</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-gray-700">
      <div className="bg-white py-4 px-6 rounded-lg shadow">React</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">Tailwind CSS</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">JavaScript</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">Firebase</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">Git & GitHub</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">Figma</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">Excel / Google Sheets</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">SQL</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">Python</div>
      <div className="bg-white py-4 px-6 rounded-lg shadow">React DevTools</div>
    </div>
  </div>
</section>

      <section
  id="contact"
  className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-20 flex flex-col items-center justify-center"
>
  <h2 className="text-4xl font-bold mb-6 text-center">Let's Connect 💬</h2>

  <div className="text-center text-lg mb-6 space-y-2">
    <p>Email: <a href="mailto:your@email.com" className="text-indigo-400 hover:underline">kipkemboifelix576@gmail.com</a></p>
    <p>Phone: <span className="text-indigo-400">+254 112 402 204</span></p>
    <p>Location: <span className="text-indigo-400">Nairobi, Kenya 🇰🇪</span></p>
  </div>

  <div className="flex gap-6 mt-6">
    <a
      href="https://github.com/luxke"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-indigo-400 text-3xl transition"
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/felix-kipkemboi-618916303/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-indigo-400 text-3xl transition"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      href="mailto:kipkemboifelix576@gmail.com"
      className="text-gray-300 hover:text-indigo-400 text-3xl transition"
    >
      <i className="fas fa-envelope"></i>
    </a>
  </div>

  <div className="mt-12 text-center max-w-4xl">
    <h3 className="text-2xl font-semibold mb-8">Languages & Tools 🛠️</h3>
    <div className="flex flex-wrap justify-center gap-4 text-sm">
      {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git & GitHub", "Figma", "Firebase","Excel / Google Sheets", "SQL", "Python", "React DevTools"].map((tool) => (
        <span key={tool} className="bg-gray-700 px-4 py-2 rounded-full">{tool}</span>
      ))}
    </div>
  </div>

  <div className="mt-16 text-sm text-gray-400 text-center">
    <p>Designed & built by <span className="text-indigo-400 font-semibold">FELIX KIPKEMBOI | LUXKE SOLUTIONS</span> © {new Date().getFullYear()}</p>
    <p className="mt-2">Made with Love , React & Tailwind CSS | All Rights Reserved</p>
  </div>
</section>


    </>
  );
}

export default App;
