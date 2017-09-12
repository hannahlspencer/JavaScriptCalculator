function changeColour(id) {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  $(id).css("background-color", randomRGBA);
}

function buttOne(){
  changeColour("#one");
  document.case.display.value += "1"
};
function buttTwo(){
  changeColour("#two");
  document.case.display.value += "2"
};
function buttThree(){
  changeColour("#three");
  document.case.display.value += "3"
};
function buttFour(){
  changeColour("#four");
  document.case.display.value += "4"
};
function buttFive(){
  changeColour("#five");
  document.case.display.value += "5"
};
function buttSix(){
  changeColour("#six");
  document.case.display.value += "6"
};
function buttSeven(){
  changeColour("#seven");
  document.case.display.value += "7"
};
function buttEight(){
  changeColour("#eight");
  document.case.display.value += "8"
};
function buttNine(){
  changeColour("#nine");
  document.case.display.value += "9"
};
function buttZero(){
  changeColour("#zero");
  document.case.display.value += "0"
};
function buttPlus(){
  changeColour("#plus");
  document.case.display.value += "+"
};
function buttMinus(){
  changeColour("#minus");
  document.case.display.value += "-"
};
function buttDivide(){
  changeColour("#divide");
  document.case.display.value += "/"
};
function buttMultiply(){
  changeColour("#multiply");
  document.case.display.value += "*"
};
function buttC(){
  changeColour("#clear");
  document.case.display.value = ""
};
function buttEquals() {
  changeColour("#equal");
  var equals = eval(document.case.display.value)
  document.case.display.value = equals;
}
