import React, { Component } from 'react';
import { connect } from 'react-redux';
import { languageCode } from '../actions';
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react';

class Header extends Component {
  state = { speakerLang: '',
            translationLang: '', };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLangClick = () => {
    this.props.languageCode(this.state);
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
          <Dropdown item text='Speaker Language'>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={ () => this.setState({ speakerLang: 'en-US' }, () => console.log('test'))}
                >English</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.setState({ speakerLang: 'tr' }, () => console.log('test'))}
                >Turkish</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.setState({ speakerLang: 'es' }, () => console.log('test'))}
                >Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Translation Language'>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={ () => this.setState({ translationLang: 'en' }, () => console.log('test'))}
                >English</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.setState({ translationLang: 'tr' }, () => console.log('test'))}
                >Turkish</Dropdown.Item>
              <Dropdown.Item
                onClick={ () => this.setState({ translationLang: 'es' }, () => console.log('test'))}
                >Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <div>
             <Button positive
               onClick={this.handleLangClick}>Set Language</Button>
           </div>
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
