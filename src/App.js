
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import DefaultLayout from "./layout/DefaultLayout";
import useDarkMode from "~/config/hooks/useDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
  }

  return (
    <Router>
      <div className={`App min-h-screen bg-light-mode dark:bg-dark-mode animate-change-bg overflow-hidden`}>
      <button onClick={handleDarkModeToggle} className={'fixed right-10 top-10 w-20 h-20 rounded-full dark:bg-purple-900 border-2 border-black dark:border-white'}>
        {
          darkMode ? <FontAwesomeIcon icon={faSun} className={'w-10 h-10 text-black'}/>:  <FontAwesomeIcon icon={faMoon} className={'w-12 h-12 text-yellow-400'}/>
        }  
      </button>
        <Routes>
          {publicRoutes.map((route, index)=> {
            // conditions on a case-by-case basis
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route 
                      key={index} 
                      path={route.path} 
                      element={
                        <Layout>
                          <Page/>
                        </Layout>
                      }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
