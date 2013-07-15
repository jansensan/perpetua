/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function TouchEvent(){}

	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = TouchEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	TouchEvent.CANCELED = "touchcancel";
	TouchEvent.ENDED = "touchend";
	TouchEvent.ENTERED = "touchenter";
	TouchEvent.LEFT = "touchleave";
	TouchEvent.MOVED = "touchmove";
	TouchEvent.STARTED = "touchstart";


	window.TouchEvent = TouchEvent;
})(window);