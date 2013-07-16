/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function BrowserEvent()
	{
		throw new Error("Illegal operation: do not instantiate BrowserEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = BrowserEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	BrowserEvent.ABORTED = "abort";
	BrowserEvent.ERROR = "error";
	BrowserEvent.RESIZED = "resize";
	BrowserEvent.SCROLLED = "scroll";

	window.BrowserEvent = BrowserEvent;
})(window);