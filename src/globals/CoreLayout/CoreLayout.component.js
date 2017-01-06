import React, { Component } from 'react'

class CoreLayout extends Component {
  render () {
    return (
      <div>
        <h2>CoreLayout World!</h2>
        {this.props.children}
      </div>
    )
  }
}

module.exports = CoreLayout
//
//
// import React, { Component } from 'react';
//
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <HeaderContainer />
//         { this.props.children }
//       </div>
//     );
//   }
// }
//
// module.exports = App;
