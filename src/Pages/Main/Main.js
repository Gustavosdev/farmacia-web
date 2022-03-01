import React, { useEffect } from 'react';
import './styles.scss';
import Logo from '../../Assets/Logo.png';
import Mock from '../../mock.json';
import Card from '../../Components/Card/Card';


function Main() {
  useEffect (()=> {
    console.log(Mock)
  },[])
  return (
    <div className='main'>

      <header className='main_header'>  
        <img src={Logo} alt="Logo" />
      </header>
      
        <div className='open_today'>
          <h1> Farmácias abertas hoje </h1>
          <div className='cards'>
          {Mock.map((item) =>
            <Card data={item} />
          )}
          </div>
                    
        </div>

        <div className='next_week'>
          <h1> Próxima semana </h1>
          <div className='cards'>
            {Mock.map((item) =>
              <Card data={item} />
            )}
          </div>
                    
        </div>
      
    </div>
  )
}

export default Main;