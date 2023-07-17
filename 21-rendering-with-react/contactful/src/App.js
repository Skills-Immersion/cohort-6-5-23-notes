// imports - pulling in whatever we need from other files
import './App.css';
import ContactCard from './ContactCard';
import Header from './Header';

// App function is the component
// function name is Capitalized (UpperCamelCase)
function App() {
  // return something HTML-ish that will actually be displayed on the page
  return (
    <div className="App">
      <Header />
      <main>
        <ul>
          <ContactCard name="Michelle" email="mferreirae@thinkful.com" phoneNumber="(555) 555-5555" />
          <ContactCard name="Alex" email="alex@alex.com" phoneNumber="(432) 324-2341" />
        </ul>
      </main>
    </div>
  );
}

export default App;
