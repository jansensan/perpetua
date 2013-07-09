/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CST]  /  Constructor
	//=========/------------------------------------------------

	function DocumentEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = DocumentEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	DocumentEvent.LOAD = "load";
	DocumentEvent.READY = "ready";
	DocumentEvent.UNLOAD = "unload";


	window.DocumentEvent = DocumentEvent;
})(window);