var React = require ('react');
var ReactRouter = require ('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require ('../components/Main');
var Home = require ('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
// var ResultContainer = require('../containers/ResultContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' components={Main}>
      <IndexRoute components={Home} />
      <Route path='player1' header='Player One' components={PromptContainer} />
      <Route path='player2/:player1' header='Player Two' components={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
)

module.exports = routes;
