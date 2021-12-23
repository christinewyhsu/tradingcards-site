'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <div>
      <p>This is a great site for viewing trading cards.</p>
      <a href="/cards">Go to Cards Page</a>
    </div>
    <div>
      <img src="/static/img/balloonicorn.jpg"/>
    </div>
    <div>
      <a href="/about">About the Authors</a>
    </div>
  </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
