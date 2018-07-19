
<div align="center">
 <img width= "250px" src="https://image.ibb.co/eGFnry/logo_preview_dd95d6d3_5fd9_4982_abc3_191b6d00e9eb.jpg" ></img>
</div>

## About

<p>Transchat is a translation based real time chat application for user who don`t know each others language.</p>
<p>Translates user speech to target language as a text.
It can process real-time streaming using Google’s machine learning technology, recognize 120 languages and translate speech to 150 languages.</p>

## Getting Started

<div align="center" float="right">
  <img src="https://preview.ibb.co/e1ngMy/Screen_Shot_2018_07_18_at_17_13_17.png" height="350" >
 <hr>
  <img src="https://preview.ibb.co/hsUaEJ/Screen_Shot_2018_07_18_at_17_04_19.png" height="350" >
 </div>

<hr>

<div align="center">

</div>
<hr>

### Client

Clone and install the dependencies for the repo:

`git clone https://github.com/necatiozmen/transchat-client.git`

Go to the choosen app directory on the CLI then run this command into client folder -

`npm install`

After installing dependecies run this command -

`npm start`

### Server

Clone and install the dependencies for the repo:

Go to https://github.com/necatiozmen/transchat-server.git

Go to the choosen app directory on the CLI then run this command into server folder -

`npm install`

You should create your own google cloud account and authorize the app.
<p>Visit : https://cloud.google.com/speech-to-text/docs/quickstart-client-libraries and follow the guide for setup.</p>

Dont` forget to set the environment variable GOOGLE_APPLICATION_CREDENTIALS  to the file path of the JSON file that contains your service account key.

## Tech Stack

* **React** - Front end library for building user interfaces
* **Redux** - Storage to share data inside the app
* **Socket IO** - enables real-time bidirectional event-based communication.
* **Google Cloud Speech to Text API** - Enables to convert audio to text by applying  neural network models
* **Google Translation API** -provides a  programmatic interface for translating an  string into supported language using Neural Machine Translation.
* **Node / Express**- Back end web framework
* **Semantic-UI** - React components that implement React Semantic-UI.




## Author

Necati Ozmen – [Linkedin](https://www.linkedin.com/in/necatiozmen)- [GitHub](https://github.com/necatiozmen) – necatiozmn@gmail.com

