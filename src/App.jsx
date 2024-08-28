// import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Blogs from './components/Blogs.jsx';
import Pagination from './components/Pagination.jsx';
import {useContext, useEffect} from 'react';
import {AppContext} from './context/AppContext.jsx';

function App () {
  // const [count, setCount] = useState(0);
  const {fetchBlogPosts} = useContext (AppContext);
  useEffect (() => {
    fetchBlogPosts ();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
