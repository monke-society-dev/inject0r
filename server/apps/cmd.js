createNewItem("cmd", "cmd", `
/*let commands = {
	help:log("This is a command prompt \nIt is currently a WIP\nhelp shows this message, test is a test command, and anything else runs as js (for now)"),
 	test:alert(test)
} */
var log;
function loge (val) {
		log = document.getElementById('log');
		log.innerText = log.innerText +val + '\\n';
}

let cmd = openWindow(400, 330, "Command Prompt", resizable = "on", Injector.serverURL + "/exploithub.png")
			cmd.style.backgroundColor = "#454545";
			//exhub.style.overflow = "hidden";
			let numBtn = 0;
			cmd.innerHTML = \`
							<div id="log" height='100%' width='100%'>
						  </div>
					 		<input id="curPrompt" placeholder="Enter command"></input>
					 		<!--<iframe id="codeRunner"></iframe>-->
							<style id="cmdstyle"> </style>
					\`;
			let curprompt = document.getElementById('curPrompt');

			curprompt.style.bottom = '0%';
			log = document.getElementById('log');
			
			function runcmd(e) {
			var key = \` \${e.code}\`;
			  if (key == " Enter" || key == " Escape") {
			  	let val = curprompt.value;
			    
			    curprompt.value = '';
			 		loge(val);
					//if commands.includes(val) {}
			    eval(val);
			  }
			} 
			curprompt.addEventListener('keydown', runcmd);

`, Injector.serverURL + "/exploithub.png"); //https://www.flaticon.com/free-icon/console_1374723
