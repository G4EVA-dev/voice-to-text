var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = $("//#region textbox");

var instructions = $("#instructions");

var content = '';

recognition.continuous = true;

//Whenever recognition is Started

recognition.onstart = function () {
  instructions.text("Voice Recognition is ON");
}

$("#start-btn").click(function (event) {
   if (content.length) { // if content is True
    content += '';
   }

   recognition.start();
});