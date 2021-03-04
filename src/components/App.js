import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import streamCreate from './streams/streamCreate';
import streamDelete from './streams/streamDelete';
import streamEdit from './streams/streamEdit';
import streamList from './streams/streamList';
import streamShow from './streams/streamShow';
import Header from  './Header';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={streamList} />
        <Route path="/stream/new" exact component={streamCreate} />
        <Route path="/stream/edit" exact component={streamEdit} />
        <Route path="/stream/delete" exact component={streamDelete} />
        <Route path="/stream/show" exact component={streamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;


//cilentId:906106836640-e6hp7151g6cfc1l58s46nafuo8dhgfu3.apps.googleusercontent.com
//clientSecret:HsjL5GQVJr_L5LF0jwbL9RIm
