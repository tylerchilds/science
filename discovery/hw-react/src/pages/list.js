import React from 'react';
import { IndexLink, Link } from 'react-router';

class List extends React.Component {
  render() {
    return (
      <div>
        <p>You are here: <IndexLink to="/" activeClassName="active">Home</IndexLink></p>
        <p>Please choose a repository from the list below.</p>
        <ul>
          <li><Link to="/detail/facebook/react">React</Link></li>
          <li><Link to="/detail/facebook/react-native">React Native</Link></li>
          <li><Link to="/detail/facebook/jest">Jest</Link></li>
          <li><Link to="/detail/cutestrap/cutestrap">Cutestrap</Link></li>
        </ul>
      </div>
    );
  }

}

export default List;
