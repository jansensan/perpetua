/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function FormEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = FormEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	FormEvent.BLURRED = "blur";
	FormEvent.CHANGED = "change";
	FormEvent.FOCUSED = "focus";
	FormEvent.FOCUSED_IN = "focusin";
	FormEvent.SELECTED = "select";
	FormEvent.SUBMITTED = "submit";


	window.FormEvent = FormEvent;
})(window);