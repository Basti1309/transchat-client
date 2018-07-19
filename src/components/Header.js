import React, { Component } from 'react';
import { connect } from 'react-redux';
import { languageCode } from '../actions';
import { Button, Dropdown, Dimmer, Menu, Icon, Header,
  Flag, Divider, Grid, Image } from 'semantic-ui-react';
import ReactCountryFlag from 'react-country-flag';
import '../index.css';

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
          <div className="header-flag">
            <div className="each-header-flag">
              <p className="flag-p">Speaker Language:</p>
              <ReactCountryFlag code={this.state.speakerLang === 'en-US' ? 'gb' : this.state.speakerLang } svg/>
            </div>
            <div className="each-header-flag">
              <p className="flag-p">Translation Language:</p>
              <ReactCountryFlag code={this.state.translationLang === 'en' ? 'gb' : this.state.translationLang} svg />
            </div>
          </div>
          <Dropdown item text='Select Speaker'>
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
          <Dropdown item text='Select Translation'>
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
                  <p className='dimmer-header'>SPEAKER & TRANSLATION LANGUAGE SETTINGS</p>
                  Transchat recognize your speech  and translate to target language as a text.
                  <Divider inverted />
                  <div className="dimmer">
                    <div className="dimmer-first">
                      <div className="dimmer-icon"><Icon name='microphone'/></div>
                      <p className="dimmer-p">Speech Language</p>
                      <ReactCountryFlag code={this.state.speakerLang === 'en-US' ? 'gb' : this.state.speakerLang } svg/>
                    </div>
                    <div className="dimmer-first">
                      <div className="dimmer-icon-translate"><Icon name='translate'/></div>
                      <p className="dimmer-p">Translation Language</p>
                      <ReactCountryFlag code={this.state.translationLang === 'en' ? 'gb' : this.state.translationLang} svg />
                    </div>
                  </div>
                  <div className="logos">
                  <Grid relaxed='very' columns={3}>
                    <Grid.Column>
                      <Image src='https://cloud.google.com/images/products/speech/speech-api-lead.png'/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src='https://resources-dot-atlasnet-eu.appspot.com/icons/google-cloud/translate-api-128.png'/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src='https://googlecloudtools.gallerycdn.vsassets.io/extensions/googlecloudtools/googlecloudplatformextensionforvisualstudio/1.4.0.0/1529444896124/223917/8/thumbnail.png'/>
                    </Grid.Column>
                  </Grid>
                  </div>
                  <Header.Subheader>Powered by Google Cloud Platform</Header.Subheader>
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
