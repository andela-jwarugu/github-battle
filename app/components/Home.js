var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
          <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
            <h1> Github Battle </h1>
            <p className='lead'> Placeholder for the motto </p>
            <Link to= '/player1'>
              <button type='button' className='btn btn-lg btn-success'>
                Get Started
              </button>
            </Link>
          </div>
      </div>
    )
  }
});

module.exports = Home;
