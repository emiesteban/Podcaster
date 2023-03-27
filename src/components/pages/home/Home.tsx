import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';


const Home = () => {
  const [searchText, setSearchText] = useState('');

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
