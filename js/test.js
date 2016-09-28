function MWPjs(data) {
	this.message = data.message;
	this.close = data.close;
	this.clickOk = data.clickOk;
	this.position = data.position;

  //check position
  if (this.position !== "top" && this.position !== "bottom") {
    throw("undefined position");
  }

  //remove any other bars
  var bars = document.getElementsByClassName('test-widget');

  while(bars[0]) {
    bars[0].parentNode.removeChild(bars[0]);
  }

  makePrefix = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  this.prefix = makePrefix();
  //init bar
  var widgetContainer = document.createElement('div');
  widgetContainer.setAttribute('class', 'test-widget ' + this.prefix);
  widgetContainer.setAttribute('id', 'widget');
  if (this.position === "top") {
    widgetContainer.style.top = "-33px";
  } else {
    widgetContainer.style.bottom = "-33px";
  }

  var widgetLogo = document.createElement('a');
  widgetLogo.setAttribute('class', 'test-widget_logo');
  widgetLogo.setAttribute('id', 'logo');
  widgetLogo.setAttribute('title', 'Some text');
  widgetLogo.setAttribute('href', '#');
  widgetLogo.textContent = "Hello!";
  if (widgetLogo.innerText) {
    widgetLogo.innerText = "Hello!";
  }
  widgetContainer.appendChild(widgetLogo);

  var widgetCenter = document.createElement('div');
  widgetCenter.setAttribute('class', 'test-widget_center');
  widgetContainer.appendChild(widgetCenter);

  var widgetText = document.createElement('span');
  widgetText.setAttribute('class', 'test-widget_text');
  widgetText.textContent = this.message;
  if (widgetText.innerText) {
    widgetText.innerText = this.message;
  }
  widgetCenter.appendChild(widgetText);

  var widgetButton = document.createElement('a');
  widgetButton.setAttribute('class', 'test-widget_button');
  widgetButton.setAttribute('text', 'Take our survey');
  widgetButton.setAttribute('href', '#');
  widgetButton.textContent = 'Take our survey';
  if (widgetButton.innerText) {
    widgetButton.innerText = 'Take our survey';
  }
  widgetCenter.appendChild(widgetButton);

  var widgetClose = document.createElement('span');
  widgetClose.setAttribute('class', 'test-widget_close');
  widgetClose.setAttribute('id', 'close');
  widgetContainer.appendChild(widgetClose);

  //put bar to body
  document.body.appendChild(widgetContainer);
  document.getElementById("close").innerHTML = "&#10006;";

  if (this.position === "top") {
    setTimeout(function() {document.getElementById("widget").style.top = "0";}, 100);
    document.getElementById("close").onclick = function() {
      document.getElementById("widget").style.top = "-100px";
      setTimeout(function() { widgetContainer.parentNode.removeChild(widgetContainer);}, 500);
    };
  } else if(this.position === "bottom") {
    setTimeout(function() {document.getElementById("widget").style.bottom = "0";}, 100);
    document.getElementById("close").onclick = function() {
      document.getElementById("widget").style.bottom = "-100px";
      setTimeout(function() { widgetContainer.parentNode.removeChild(widgetContainer);}, 500);
    };
  }
}