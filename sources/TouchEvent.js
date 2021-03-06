/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function TouchEvent()
	{
		throw new Error("Illegal operation: do not instantiate TouchEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = TouchEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	TouchEvent.CANCELED = "touchcancel";
	TouchEvent.ENDED = "touchend";
	TouchEvent.MOVED_OVER = "touchenter";
	TouchEvent.MOVED_OUTSIDE = "touchleave";
	TouchEvent.MOVED = "touchmove";
	TouchEvent.STARTED = "touchstart";


	window.TouchEvent = TouchEvent;
})(window);