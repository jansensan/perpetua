/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CST]  /  Constructor
	//=========/------------------------------------------------

	function KeyboardEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = KeyboardEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	KeyboardEvent.FOCUS_OUT = "focusout";
	KeyboardEvent.KEY_DOWN = "keydown";
	KeyboardEvent.KEY_PRESS = "keypress";
	KeyboardEvent.KEY_UP = "keyup";


	window.KeyboardEvent = KeyboardEvent;
})(window);