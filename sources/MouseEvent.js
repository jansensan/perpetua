/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CST]  /  Constructor
	//=========/------------------------------------------------

	function MouseEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = MouseEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	MouseEvent.CLICK = "click";
	MouseEvent.DOUBLE_CLICK = "dblclick";
	MouseEvent.FOCUS_OUT = "focusout";
	MouseEvent.MOUSE_DOWN = "mousedown";
	MouseEvent.MOUSE_MOVE = "mousemove";
	MouseEvent.MOUSE_OUT = "mouseout";
	MouseEvent.MOUSE_OVER = "mouseover";
	MouseEvent.MOUSE_UP = "mouseup";


	window.MouseEvent = MouseEvent;
})(window);