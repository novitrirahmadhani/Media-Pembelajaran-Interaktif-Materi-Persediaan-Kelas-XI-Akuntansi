function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kclI5FvT7i":
        Script1();
        break;
      case "6V4ICxm6mSW":
        Script2();
        break;
      case "5olOYjS4YM8":
        Script3();
        break;
      case "6T28E1qG8Ds":
        Script4();
        break;
      case "6owRvWGaQAP":
        Script5();
        break;
      case "5bTcX9EEuQK":
        Script6();
        break;
      case "5fHNndc6VFw":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.1;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.5;
}

