/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function BrowserEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = BrowserEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	BrowserEvent.ERROR = "error";
	BrowserEvent.RESIZED = "resize";
	BrowserEvent.SCROLLED = "scroll";

	window.BrowserEvent = BrowserEvent;
})(window);