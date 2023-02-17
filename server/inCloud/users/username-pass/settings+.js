//all new settings

var bgim = document.getElementById('backgroundImage');

function updateBG(bginf) {

	let inf = bginf.split(';');

	bgim.style.backgroundImage = 'url(' + (inf[0] || Injector.serverURL+'/logo.png') + ')';
	bgim.style.backgroundColor = (inf[1] || '#041434');
	bgim.style.backgroundSize = (inf[2] || 'auto');
	cssVar_set('--app-size', (inf[3] || '75px'))
	
  files('background.txt', function(resp) {
		
    //bg is the same
    if (Injector.user.background != resp) {
      Injector.user.background = resp.split(';');

      bgim.style.backgroundImage = 'url(' + (Injector.user.background[0] || Injector.serverURL+'/logo.png') + ')';
      bgim.style.backgroundColor = (Injector.user.background[1] || '#041434');
			bgim.style.backgroundSize = (Injector.user.background[2] || 'auto');
    }

  })
}
function writeFile(filename, content, callback) {

  let writeReq = new XMLHttpRequest;
  writeReq.open('POST', Injector.serverURL + "/cloud");
  writeReq.setRequestHeader('token', Injector.user.token);
  writeReq.setRequestHeader('cloudtype', 'writeFile');
  writeReq.setRequestHeader('filetowrite', filename);
  writeReq.setRequestHeader('filetype', '.txt');
  writeReq.send(content);


  writeReq.onreadystatechange = e => {
    callback(writeReq.responseText);
  }

}
function createElement(type, parent, id, clss) {
  let el = document.createElement(type);
  el.id = id;
  el.className = clss;
  parent.appendChild(el);
  return el;
}
function writeSettings(settings) {
	// writeFile('background', BGURL.value + ';' + BGPicker.value + ';' + BGSize.value, function(resp) {

 //    updateBG(BGURL.value + ';' + BGPicker.value + ';' + BGSize.value);
 //  })
	writeFile('settings', settings.join(';'), function(resp) {

  })
	
}

let win = openWindow(450, 300, 'Settings+', true, Injector.serverURL + "/tap.png");
let selectorBar = createElement('div',win,'selectorBar','BG selector');
let winBackground = createElement('div', win, 'winBackground', 'BG');
let style = createElement('style', win, '', '');
style.innerHTML = `
.BGButton {
  background-color: #000066;
  border-color: #00000000;
  border-radius: 5px;
  color: #ffffee;
  width: 15%;
}

.BGInput {
  background-color: #000066;
  border-color: #00000000;
  border-radius: 5px;
  color: #ffffee;
  width: 80%;
}

.BGSpan {
  border-color: #00000000;
  border-radius: 5px;

}

.BG {
  background-color: #0033aa;
  border-color: #00000000;
  width: 100%;
  height: 100%;
  color: #ffffee;
}

.BGColorPicker {
  background-color: #000066;
  border-color: #00000000;
  border-radius: 5px;
  color: #ffffee;
}

`



//set default value
files('settings.txt', function(resp) {
  
})