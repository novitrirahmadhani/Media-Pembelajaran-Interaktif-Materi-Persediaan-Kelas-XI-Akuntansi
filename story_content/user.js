function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6h9NwYAjbkW":
        Script1();
        break;
      case "6DA00SVQ1sO":
        Script2();
        break;
      case "5e2RodrwFOC":
        Script3();
        break;
      case "5Uy0ewVIlSB":
        Script4();
        break;
      case "65pv232xYb8":
        Script5();
        break;
      case "6YRHt9iRHlp":
        Script6();
        break;
      case "5gQJvqqGitR":
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

