import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  const params = useParams();

  useEffect(() => {
    console.log('useParams', params)
  }, [params]);

  return (
    <div className="home">
        <h1>Podcaster</h1>
        <Input value={searchText} onChange={(value) => setSearchText(value)}/>
        <Button onClick={()=> console.log('Button pressed')}>
            Test
        </Button>
    </div>
  );
};

export default Home;
