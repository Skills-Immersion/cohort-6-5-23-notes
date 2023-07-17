// imports - pulling in whatever we need from other files
import './App.css';
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
          <li>
            <div>
              <img src="https://placebear.com/100/100" />
            </div>
            <div>
              <h2>Michelle</h2>
              <h4>(555) 555-5555</h4>
              <h4>mferreirae@thinkful.com</h4>
            </div>
          </li>
          <li>
            <div>
              <img src="https://placebear.com/100/100" />
            </div>
            <div>
              <h2>Michelle</h2>
              <h4>(555) 555-5555</h4>
              <h4>mferreirae@thinkful.com</h4>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
