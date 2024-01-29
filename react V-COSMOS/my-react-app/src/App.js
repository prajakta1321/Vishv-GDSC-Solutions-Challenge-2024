
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card1 from './cards';
import SplitScreenComponent from './SplitScreenComponent';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Rest of your app components */}
      <div className='abt'><p>There is a reason why the word UNIVERSE starts with the letter 'U', <br></br>it's because change starts within you.</p></div>
      <SplitScreenComponent /> 
      <Card1 />
      <div className='lower-text'>
      <p>Thank you for joining us on this journey towards making an impact. <br></br>
Feel free to explore and engage with [Your Website Name]!
</p></div>
      <Footer /> 
     
    </div>

    
  );
}

export default App;
