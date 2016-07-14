import React from 'react';
import ajax from 'superagent';
import { IndexLink, Link } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      user: {
        avatar_url: null,
        url: null
      }
    };
  }

  componentWillMount() {
    ajax.get(`https://api.github.com/users/${this.props.params.login}/events`)
      .end((error, response) => {
        console.dir(response.body);
        if (!error && response) {
          this.setState({ events: response.body });
          this.setState({ user: response.body[0].actor })
        } else {
          console.log(`There was an error fetching ${type} from GitHub.`, error);
        }
      });
  }

  render() {
    const user = this.state.user;

    return (
      <div>
        <p>
          You are here: <IndexLink to="/" activeClassName="active">Home</IndexLink> > {this.props.params.login}
        </p>
        <img src={user.avatar_url} alt={`${this.props.params.login}'s profile picture'`} />
        <h2><a href={user.url}>{this.props.params.login}</a></h2>
        <ul>
          {this.state.events.map((event, index) => {
            const eventType = event.type;
            const repoName = event.repo.name;
            const creationDate = event.created_at;

            return (<li key={index}>
                <strong>{repoName}</strong>: {eventType} at {creationDate}.
            </li>);
          })}
        </ul>
      </div>
    )
  }

  _selectMode(mode){
    this.setState({ mode });
  }
}

export default User;
