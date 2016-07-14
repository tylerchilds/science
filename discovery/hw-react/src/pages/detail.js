import React from 'react';
import ajax from 'superagent';
import { IndexLink, Link } from 'react-router';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'commits',
      commits: [],
      forks: [],
      pulls: []
    };
  }

  componentWillMount() {
    this._fetchFeed('commits')
    this._fetchFeed('forks')
    this._fetchFeed('pulls')
  }

  _fetchFeed(type){
    ajax.get(`https://api.github.com/repos/${this.props.params.org}/${this.props.params.repo}/${type}`)
      .end((error, response) => {
        console.dir(response.body);
        if (!error && response) {
          this.setState({ [type]: response.body });
        } else {
          console.log(`There was an error fetching ${type} from GitHub.`, error);
        }
      });
  }

  _renderCommits(){
    return this.state.commits.map((commit, index) => {
      const author = commit.author ? commit.author.login : 'Anonymous';

      return (<p key={index}>
        <Link to={`/user/${author}`}>{author}</Link>:&nbsp;
        <a href={commit.html_url}>{commit.commit.message}</a>.
      </p>);
    })
  }

  _renderForks(){
    return this.state.forks.map((fork, index) => {
      const owner = fork.user ? fork.user.login : 'Anonymous';

      return (<p key={index}>
        <Link to={`/user/${owner}`}>{owner}</Link>:&nbsp;
        <a href={fork.html_url}>{fork.full_name}</a>.
      </p>);
    })
  }

  _renderPulls(){
    return this.state.pulls.map((pull, index) => {
      const user = pull.user ? pull.user.login : 'Anonymous';

      return (<p key={index}>
        <Link to={`/user/${user}`}>{user}</Link>:&nbsp;
        <a href={pull.html_url}>{pull.title}</a>.
      </p>);
    })
  }

  render() {
    let content;

    if (this.state.mode === 'commits') {
      content = this._renderCommits();
    } else if (this.state.mode === 'forks') {
      content = this._renderForks();
    } else {
      content = this._renderPulls();
    }

    return (
      <div>
        <p>
          You are here: <IndexLink to="/" activeClassName="active">Home</IndexLink> > {this.props.params.repo}
        </p>

        <button onClick={this._selectMode.bind(this, 'commits')}>Show Commits</button>
        <button onClick={this._selectMode.bind(this, 'forks')}>Show Forks</button>
        <button onClick={this._selectMode.bind(this, 'pulls')}>Show Pulls</button>
        {content}
      </div>
    );
  }

  _selectMode(mode){
    this.setState({ mode });
  }
}

export default Detail;
