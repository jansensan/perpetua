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
	MouseEvent.PRESSED = "mousedown";
	MouseEvent.MOVED = "mousemove";
	MouseEvent.MOVED_OUTSIDE = "mouseout";
	MouseEvent.MOVED_OVER = "mouseover";
	MouseEvent.RELEASED = "mouseup";


	window.MouseEvent = MouseEvent;
})(window);