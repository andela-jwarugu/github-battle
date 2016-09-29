var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: ''
    }
  },

  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.player1){
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          player1: this.props.routeParams.player1,
          player2: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push('/player2/' + this.state.username);
    }
  },

  render: function () {
    return(
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={[this.props.route.header]}
        username={this.state.username} />
    );
  }
});

module.exports = PromptContainer;
