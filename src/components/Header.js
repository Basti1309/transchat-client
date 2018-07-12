import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react';

export default class Header extends Component {

  handleItemClick = (lng) =>

    console.log('item selected');;

  render() {
    // const { activeItem } = this.state;

    return (
      <Menu size='huge'>
        {/* <Menu.Item name='Transchat' active={activeItem === 'home'} onClick={this.handleItemClick} /> */}
        <Menu.Item
          name='History'
          // active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu icon='labeled' position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={ () => this.handleItemClick('en')}
                >English</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.handleItemClick('tr')}
                >Turkish</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.handleItemClick('es')}
                >Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   languageCode: (code) => dispatch(languageCode(code)),
// });
//
// export default connect(null, mapDispatchToProps)(Header);
