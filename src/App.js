import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  

  const options = [
    {
      icon: 'sunny',
      text: 'light',
    },
    {
      icon: 'moon',
      text: 'dark'
    },
    /* {
      icon: 'desktop-outline',
      text: 'system',
    }, */
  ];

  /* function onWindowMatch() {
    if(localStorage.theme === "dark" || 
        (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    }
    else{
      element.classList.remove("dark");
    }
  }
  onWindowMatch(); */

  useEffect ( () =>{
    switch (theme) {
      case 'dark': 
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark')
        break; 
      
      /* case 'light' : 
        element.classList.remove("dark");
        localStorage.setItem('theme', 'light')
        break; */

      default: 
      element.classList.remove("dark");
      localStorage.setItem('theme', 'light');
      /* onWindowMatch(); */
        break;
    }
  } , [theme]);

  return (
    <section className='min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100'>
        
        <div className='fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded'>
          
          {
            options?.map((opt) => (
              <button 
                key={opt.text}
                onClick= {() =>setTheme(opt.text)}
                className= {`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                  theme === opt.text && 'text-sky-600'}`}
                >
                <ion-icon name={opt.icon}></ion-icon>
              </button>

            ))
          }
        </div>
        
        <div className="text-center p-5">
          <RouterProvider router={router}>

          </RouterProvider>
      </div>
    </section>
  );
}

export default App;
