/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function KeyboardEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = KeyboardEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	KeyboardEvent.FOCUS_LOST = "focusout";
	KeyboardEvent.KEY_DOWN = "keydown";
	KeyboardEvent.KEY_PRESSED = "keypress";
	KeyboardEvent.KEY_UP = "keyup";


	window.KeyboardEvent = KeyboardEvent;
})(window);