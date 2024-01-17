// App.jsx

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import ExampleComponent from './ExampleComponent';
import theme from './Theme.jsx'
import './index.css'
function App(){


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* The rest of your inventory management app goes here */}
      </div>
    </ThemeProvider>
  )
  };
}
export default App;
