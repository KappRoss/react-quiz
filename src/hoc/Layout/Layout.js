import React from 'react';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import classes from './Layout.module.css';
import {connect} from "react-redux";

class Layout extends React.Component{

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }
  render(){
    return (
      <div className = {classes.Layout}>

        <Drawer
          isOpen = {this.state.menu}
          onClose = {this.menuCloseHandler}
          isAuth = {this.props.isAuth}
        />

        <MenuToggle 
          onToggle = {this.toggleMenuHandler}
          isOpen = {this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isAuth: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)