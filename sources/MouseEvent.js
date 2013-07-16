/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function MouseEvent()
	{
		throw new Error("Illegal operation: do not instantiate MouseEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = MouseEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	MouseEvent.CLICKED = "click";
	MouseEvent.DOUBLE_CLICKED = "dblclick";
	MouseEvent.FOCUS_LOST = "focusout";
	MouseEvent.MOUSE_PRESSED = "mousedown";
	MouseEvent.MOUSE_MOVED = "mousemove";
	MouseEvent.MOUSE_MOVED_OUTSIDE = "mouseout";
	MouseEvent.MOUSE_MOVED_OVER = "mouseover";
	MouseEvent.MOUSE_RELEASED = "mouseup";


	window.MouseEvent = MouseEvent;
})(window);