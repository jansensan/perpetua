/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function KeyboardEvent()
	{
		throw new Error("Illegal operation: do not instantiate KeyboardEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = KeyboardEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	KeyboardEvent.KEY_PRESSED = "keydown";
	KeyboardEvent.KEY_HELD_DOWN = "keypress";
	KeyboardEvent.KEY_RELEASED = "keyup";


	window.KeyboardEvent = KeyboardEvent;
})(window);