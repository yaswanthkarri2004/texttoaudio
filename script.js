var convertButton = document.getElementById('convert-button');
    convertButton.addEventListener('click', function() {

      var text = document.getElementById('text-to-convert').value;

      var message = new SpeechSynthesisUtterance();

      message.text = text;

      message.voice = window.speechSynthesis.getVoices()[0];

           message.rate = 1;

     
      message.pitch = 1;

      message.volume = 5;
      message.lang="en";
      // use the speech synthesis API to speak the message
      window.speechSynthesis.speak(message);
    });


    const btn = document.getElementById('convert-button');
    document.addEventListener('keydown',(event)=>{
        if(event.ctrlKey &&(event.key==='q'))
            {
                btn.click();
            }
    })