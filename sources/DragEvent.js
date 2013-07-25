/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function DragEvent()
	{
		throw new Error("Illegal operation: do not instantiate DragEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = DragEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	DragEvent.STARTED = "dragstart";
	DragEvent.DRAGGING = "drag";
	DragEvent.DRAGGED_OVER = "dragenter";
	DragEvent.DRAGGED_OUTSIDE = "dragleave";
	DragEvent.DRAGGING_OVER = "dragover";
	DragEvent.DROPPED = "drop";
	DragEvent.ENDED = "dragend";


	window.DragEvent = DragEvent;
})(window);