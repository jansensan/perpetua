/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CST]  /  Constructor
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
	BrowserEvent.RESIZE = "resize";
	BrowserEvent.SCROLL = "scroll";


	window.BrowserEvent = BrowserEvent;
})(window);