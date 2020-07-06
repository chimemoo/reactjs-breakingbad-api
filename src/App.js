import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_ALL, SEARCH } from './config/Uri';
import Header from './components/Header';
import loading from './assets/loading.gif';
import './App.css';

function App() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(GET_ALL);
      setItem(result.data);
      setLoading(false);
    }

    fetchItems();
  },[]);

  function searchCharacter(event){
    setLoading(true);
    setSearch(event.target.value);
    const fetchItems = async () => {
      const result = await axios(SEARCH.replace(/{(name)}/, event.target.value));
      console.log(result.data);
      setItem(result.data);
      setLoading(false);
    }

    fetchItems();
  }

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-sm-12">
          <input type="text" className="form-control" placeholder="Type Character" value={search} onChange={searchCharacter} />
        </div>
      </div>
      { isLoading ?
        <div className="row" style={{justifyContent: 'center', alignSelf: 'center', marginTop : 20}}>
          <img src={loading} alt="loading" />
        </div>
        :
        <div className="row" style={{justifyContent: 'center', alignSelf: 'center', marginTop : 20}}>
          {
            item.map((x) => (
              <div class="card" style={{width: '18rem', margin: '20px'}}>
                <div className="card-image">
                  <img className="card-img-top" src={x.img} alt="Card image cap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{x.name}</h5>
                  <p className="card-text">{x.nickname}</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}

export default App;
