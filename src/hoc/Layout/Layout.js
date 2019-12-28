import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggledHandler = () => {
    this.setState(prevState => {return {showSideDrawer: !prevState.showSideDrawer}});
  }

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClick={this.sideDrawerToggledHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}


export default Layout;
