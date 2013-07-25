/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function UIEvent()
	{
		throw new Error("Illegal operation: do not instantiate UIEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = UIEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	UIEvent.FOCUSED = "focusin";
	UIEvent.BLURRED = "focusout";


	window.UIEvent = UIEvent;
})(window);