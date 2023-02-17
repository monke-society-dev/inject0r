createNewItem(`BGEdit`, `BGEdit`, `


var bgim = document.getElementById('backgroundImage');
var taskBar = document.querySelector('injtaskbar');

function updateBG() {
  files('background.txt', function(resp) {
    //bg is the same
    if (Injector.user.background != resp) {
      Injector.user.background = resp.split(';');

      bgim.style.backgroundImage = 'url(' + Injector.user.background[0] + ')';
      bgim.style.backgroundColor = Injector.user.background[1];
			bgim.style.backgroundSize = Injector.user.background[2];
			taskBar.style.backgroundColor = Injector.user.background[3];
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

function writeSettings() {
	writeFile('background', BGURL.value + ';' + BGPicker.value + ';' + BGSize.value + ';' + TaskPicker.value, function(resp) {

    updateBG();
  })
}

let win = openWindow(450, 300, 'BGEdit', true, Injector.user.icons.BGEdit);
let winBackground = createElement('div', win, '', 'BG');
let style = createElement('style', win, '', '');
style.innerHTML = \`
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

\`

let BGURL = createElement('input', winBackground, 'URLInputBox', 'BGInput');
BGURL.placeholder = 'enter URL here';

let BGURLSubmit = createElement('button', winBackground, 'BGURLSubmitButton', 'BGButton');
BGURLSubmit.innerText = 'submit';
BGURLSubmit.onclick = function() {
  writeSettings();
}
createElement('br', winBackground, '', '');

createElement('span', winBackground, 'BGPinstructions', 'BGSpan').innerText = 'set Background color: ';

let BGPicker2 = createElement('input', winBackground, 'BGColorPicker', 'BGColorPicker');
BGPicker2.type = 'color';
BGPicker2.value = bgim.style.backgroundColor;
BGPicker2.addEventListener('input', () => {
  let color = BGPicker2.value;
	BGPicker.value = color;
  writeSettings();
  bgim.style.backgroundColor = color;
	winBackground.style.backgroundColor = color;
});
let BGPicker = createElement('input', winBackground, 'BGColorPicker', 'BGColorPicker');
// BGPicker.type = 'color';
BGPicker.value = bgim.style.backgroundColor;
BGPicker.addEventListener('input', () => {
  let color = BGPicker.value;
	BGPicker2.value = color;
  writeSettings();
  bgim.style.backgroundColor = color;
	winBackground.style.backgroundColor = color;
});



createElement('br', winBackground, '', '');

//bg size

createElement('span', winBackground, 'BGPinstructions', 'BGSpan').innerText = 'Size (x y): ';
let BGSize = createElement('input',winBackground,'BGSizeInput','BGInput');
BGSize.style.width = '30%';
BGSize.addEventListener('input', () => {
  writeSettings();
});

//taskbar color

createElement('br', winBackground, '', '');

createElement('span', winBackground, 'BGPinstructions', 'BGSpan').innerText = 'set Taskbar color: ';


let TaskPicker2 = createElement('input', winBackground, 'TaskBarColorPicker2', 'BGColorPicker');
TaskPicker2.type = 'color';
TaskPicker2.value = taskBar.style.backgroundColor;
TaskPicker2.addEventListener('input', () => {
  let color = TaskPicker2.value;
	TaskPicker.value = color;
	taskBar.style.backgroundColor = color;
  writeSettings();
});
let TaskPicker = createElement('input', winBackground, 'TaskBarColorPicker', 'BGColorPicker');
// BGPicker.type = 'color';
TaskPicker.value = taskBar.style.backgroundColor;
TaskPicker.addEventListener('input', () => {
  let color = TaskPicker.value;
	TaskPicker2.value = color;
	taskBar.style.backgroundColor = color;
  writeSettings();
  
});



//set default value
files('background.txt', function(resp) {
  BGURL.value = resp.split(';')[0];
	BGSize.value = (resp.split(';')[2] || '');
	BGPicker.value = resp.split(';')[1];
	TaskPicker.value = (resp.split(';')[3] || '');
	BGPicker2.value = resp.split(';')[1];
	TaskPicker2.value = (resp.split(';')[3] || '');
})

	 
	 `, Injector.user.icons.BGEdit);