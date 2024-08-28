import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import Spinner from '../components/Spinner.jsx';
import Card from '../components/Card.jsx';

const Blogs = () => {
  const {posts, loading} = useContext (AppContext);
  // console.log ('Printing Posts:', posts[0]);
  // if (!posts.length) {
  //   setLoading (true);
  // }
  return (
    <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
      {loading
        ? <Spinner />
        : posts.length === 0
            ? <div><p>No Posts Found</p></div>
            : posts.map (post => (
                <Card key={post.title} post={post} />
              ))}
    </div>
  );
};

export default Blogs;
