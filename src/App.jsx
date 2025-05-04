import { BrowserRouter } from 'react-router-dom';
import { Contact, Experience, Tech, Skills, Header, Home, ProjectSection } from './components';
import SciFiBG from './components/canvas/SciFiBG'; 


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black text-white overflow-hidden">

        <div className="fixed inset-0 z-0">
          <SciFiBG />
        
        </div>

        <div className="relative z-10">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Header />
            <Home />
          </div>

          <Experience />
          <Tech />
          <Skills />

          <div className="relative z-10">
            <ProjectSection />
            <Contact />
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
