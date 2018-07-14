import React, { Component } from 'react';
import { connect } from 'react-redux';
import { languageCode } from '../actions';
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react';

class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLangClick = lng => {
    this.props.languageCode(lng);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size='huge'>
        <Menu.Item
          name='Transchat'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
        <Menu.Item
          name='History'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu icon='labeled' position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={ () => this.handleLangClick('en-US')}
                >English</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.handleLangClick('tr')}
                >Turkish</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.handleLangClick('es')}
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

const mapDispatchToProps = dispatch => ({
  languageCode: lang => dispatch(languageCode(lang)),
});

export default connect(null, mapDispatchToProps)(Header);
