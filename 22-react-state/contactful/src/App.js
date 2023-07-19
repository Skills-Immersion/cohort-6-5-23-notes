// imports - pulling in whatever we need from other files
import './App.css';
import ContactsList from './ContactsList';
import Header from './Header';

// App function is the component
// function name is Capitalized (UpperCamelCase)
function App() {
  // return something HTML-ish that will actually be displayed on the page
  return (
    <div className="App">
      <Header />
      <main>
        <ContactsList />
      </main>
    </div>
  );
}

export default App;
