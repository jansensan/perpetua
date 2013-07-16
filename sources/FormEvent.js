/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function FormEvent()
	{
		throw new Error("Illegal operation: do not instantiate FormEvent, simply use its static constants.");
	}


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
	FormEvent.RESET = "reset";
	FormEvent.SELECTED = "select";
	FormEvent.SUBMITTED = "submit";


	window.FormEvent = FormEvent;
})(window);