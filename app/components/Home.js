var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div>
          <MainContainer>
            <h1> Github Battle </h1>
            <p className='lead'> Placeholder for the motto </p>
            <Link to= '/player1'>
              <button type='button' className='btn btn-lg btn-success'>
                Get Started
              </button>
            </Link>
          </MainContainer>
      </div>
    )
  }
});

module.exports = Home;
