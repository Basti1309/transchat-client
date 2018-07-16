import React, { Component } from 'react';
import { connect } from 'react-redux';
import { languageCode } from '../actions';
import { Button, Dropdown, Dimmer, Menu, Icon, Header, Flag} from 'semantic-ui-react';
import ReactCountryFlag from 'react-country-flag';

class MainHeader extends Component {
  state = { speakerLang: '',
            translationLang: '', };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLangClick = () => {
    this.props.languageCode(this.state);
    this.setState({ active: true });
  };

  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });

  render() {
    const { activeItem, active } = this.state;

    return (
      <Menu size='huge'>
        <Menu.Item
          name='Transchat'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
        <Menu.Menu icon='labeled' position='right'>
          <Dropdown item text='Speaking Language'>
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
               <Dimmer active={active} onClickOutside={this.handleClose} page>
                <Header as='h2' icon inverted>
                  <div style = {{ margin: ' 40px' }}>
                    Speaking Language
                    <div>
                    <ReactCountryFlag
                    code={this.state.speakerLang === 'en-US' ? 'gb' : this.state.speakerLang } svg
                   />
                     </div>
                  </div>
                  <div style = {{ margin: ' 40px' }}>Translation Language<ReactCountryFlag code={this.state.translationLang === 'en' ? 'gb' : this.state.translationLang} svg /></div>

                  <Header.Subheader>Dimmer sub-header</Header.Subheader>
                 </Header>
              </Dimmer>
           </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  languageCode: lang => dispatch(languageCode(lang)),
});

export default connect(null, mapDispatchToProps)(MainHeader);
