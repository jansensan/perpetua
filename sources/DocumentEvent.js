/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function DocumentEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = DocumentEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	DocumentEvent.LOADED = "load";
	DocumentEvent.READY = "ready";
	DocumentEvent.UNLOADED = "unload";


	window.DocumentEvent = DocumentEvent;
})(window);