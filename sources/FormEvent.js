/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CST]  /  Constructor
	//=========/------------------------------------------------

	function FormEvent(){}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = FormEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	FormEvent.BLUR = "blur";
	FormEvent.CHANGE = "change";
	FormEvent.FOCUS = "focus";
	FormEvent.FOCUS_IN = "focusin";
	FormEvent.SELECT = "select";
	FormEvent.SUBMIT = "submit";


	window.FormEvent = FormEvent;
})(window);