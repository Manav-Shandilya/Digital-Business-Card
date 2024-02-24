import Profile from './Profile';
import './App.css';
import About from './About';
import Footer from './Footer';
import Info from './Info';

function App() {
  return (
    <div className='wrapp'>
      <Profile />
      <div className='Main-section'>
        <Info />
        <About />
      </div>
      <Footer />
      
    </div>
  )
}

export default App;