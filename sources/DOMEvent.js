/**
 *	@author Mat Janson Blanchet
 **/
(function(window)
{
	//===========/----------------------------------------------
	//  [_CTR]  /  Constructor
	//=========/------------------------------------------------

	function DOMEvent()
	{
		throw new Error("Illegal operation: do not instantiate DOMEvent, simply use its static constants.");
	}


	//===========/----------------------------------------------
	//  [_PRO]  /  Prototype
	//=========/------------------------------------------------

	var p = DOMEvent.prototype;


	//===========/----------------------------------------------
	//  [_CON]  /  Constants
	//=========/------------------------------------------------

	DOMEvent.ELEMENT_ACTIVATED = "DOMActivate";
	DOMEvent.SUBTREE_MODIFIED = "DOMSubtreeModified";
	DOMEvent.NODE_INSERTED = "DOMNodeInserted";
	DOMEvent.NODE_REMOVED = "DOMNodeRemoved";
	DOMEvent.NODE_REMOVED_FROM_DOCUMENT = "DOMNodeRemovedFromDocument";
	DOMEvent.NODE_INSERTED_INTO_DOCUMENT = "DOMNodeInsertedIntoDocument";
	DOMEvent.ATTRIBUTE_MODIFIED = "DOMAttrModified";
	DOMEvent.CHARACTER_DATA_MODIFIED = "DOMCharacterDataModified";


	window.DOMEvent = DOMEvent;
})(window);