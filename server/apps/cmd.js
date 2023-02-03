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

let cmd = openWindow(400, 330, "Command Prompt/Dev", resizable = "on", Injector.serverURL + "/exploithub.png")
			cmd.style.backgroundColor = "#454545";
			//exhub.style.overflow = "hidden";
			let numBtn = 0;
			cmd.innerHTML = \`
							<div id="log" height='100%' width='100%'>
							</div>
							<input id="curPrompt" placeholder="Enter command"></input>
							<!--<iframe id="codeRunner"></iframe>-->
							<button onclick='javascript:(    () => {        var script = document.createElement("script");        script.src = "//cdn.jsdelivr.net/npm/eruda";        document.body.appendChild(script);        script.onload = (() => eruda.init()); removeWin(this.parentElement.parentElement.id);    })()'>eruda</button>
	<button onclick='function inspect () {var x = document.createElement("script"); x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js"; x.onload = alert("Loaded Developer Console!"); document.head.appendChild(x); } inspect(); removeWin(this.parentElement.parentElement.id);'>snowLord</button>
			 				<button onclick='function gclone() {let head = document.getElementById("header"); head.srcdoc = \\\` <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Google</title> <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"> <style>*{margin:0;padding:0;background:#FFFFFF;-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Arial, Helvetica, sans-serif}a{text-decoration:none;display:inline-block;color:rgba(0,0,0,0.54);outline:none}a:hover{text-decoration:underline}i{font-size:1.3rem}i,img,button{cursor:pointer}.google{height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative}.google .google-header{position:absolute;top:0;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:20px}.google .google-header a{color:rgba(0,0,0,0.871);font-size:13px;margin-right:15px;line-height:24px}.google .google-header a:hover{opacity:0.85}.google .google-header i,.google .google-header img{vertical-align:middle}.google .google-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:-100px}.google .google-body img{width:272px;height:92px;display:block}.google .google-body form{width:584px;margin:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.google .google-body form .search{width:100%;position:relative}.google .google-body form .search input{width:100%;padding:0.8em 3em;border-radius:30px;outline:none;border:1px solid #e6e5e5;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;background-color:transparent;color:rgba(0,0,0,0.871);font-size:16px;word-wrap:break-word}.google .google-body form .search input:hover{-webkit-box-shadow:0px 1px 4px 3px rgba(0,0,0,0.1);box-shadow:0px 1px 4px 3px rgba(0,0,0,0.1);border-color:transparent}.google .google-body form .search .fa-search,.google .google-body form .search .fa-microphone{position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);color:rgba(0,0,0,0.54)}.google .google-body form .search .fa-search{left:25px}.google .google-body form .search .fa-microphone{right:25px}.google .google-body .buttons{padding-top:18px}.google .google-body .buttons button{border-radius:4px;border:1px solid transparent;background-color:#f1f1f1;color:rgba(0,0,0,0.54);padding:0 16px;margin:11px 4px;min-width:54px;height:36px;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;text-transform:capitalize;font-size:14px;line-height:24px;display:inline-block}.google .google-body .buttons button:hover{color:rgba(0,0,0,0.871);-webkit-box-shadow:0px 1px 1px rgba(0,0,0,0.1);box-shadow:0px 1px 1px rgba(0,0,0,0.1);opacity:0.85;border-color:#c6c6c6}.google .google-body .languages{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;text-align:center;font-size:small;margin:-10px 0 20px 0;line-height:28px}.google .google-body .languages .language-type a{color:#1a2bca;padding:0 5px}.google .google-footer{position:absolute;bottom:0;width:100%;background-color:#f1f1f1;text-transform:capitalize}.google .google-footer a{font-size:14px;line-height:40px;padding-left:27px}.google .google-footer hr{color:#f1f1f13a}.google .google-footer .footer-down{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}.google .google-footer .footer-down .footer-down-right{padding-right:27px}@media screen and (max-width: 600px){.google-body form{max-width:350px}}</style> <script src="index.js"></script> <script>fullscreen()</script>  <div class="google"> <div class="google-header"> <a href="">Gmail</a> <a href="">Images</a> <a href=""> <img src="https://riptide.username-pass.repl.co/pages/gclone/images/bars.png"> </a> <a href="settings.html"> <i class="fas fa-user-circle"></i> </a> </div> <div class="google-body"> <img src="https://riptide.username-pass.repl.co/pages/gclone/images/google_logo.png" alt="Google"> <form action=""> <div class="search"> <input type="text" id="search"/> <i class="fas fa-search"></i> <i class="fas fa-microphone"></i> </div> <div class="buttons"> <button onclick="">Google Search</button> <button onclick="window.location.href=\"../home/index.html\"">Im Feeling Lucky</button> <!--           <button onclick=>im feeling lucky</button> --> </div> </form> <div class="languages"> <p>Google offered in:</p> <div class="language-type"> <a href="">हिन्दी</a> <a href="">বাংলা</a> <a href="">తెలుగు</a> <a href="">मराठी</a> <a href="">தமிழ்</a> <a href="">ગુજરાતી</a> <a href="">ಕನ್ನಡ</a> <a href="">മലയാളം</a> <a href="">ਪੰਜਾਬੀ</a> </div> </div> </div> <div class="google-footer"> <a href="">India</a> <hr /> <div class="footer-down"> <div class="footer-down-left"> <a href="">Advertising</a> <a href="">Business</a> <a href="">About</a> <a href="">how to search</a> </div> <div class="footer-down-right"> <a href="">Privacy</a> <a href="">Terms</a> <a href="">Settings</a> </div> </div> </div> </div>  \\\`;}gclone();'>gclone</button>
				
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
