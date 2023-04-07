import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Home from './pages/Home';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
					<Routes>
						<Route element={<App/>}>
							<Route path='/' element={<Home/>}/>
							<Route path='/movie/:id' element={<Movie/>}/>
							<Route path='/search' element={<Search/>}/>
						</Route>
					</Routes>
				</BrowserRouter>
  </React.StrictMode>,
)
