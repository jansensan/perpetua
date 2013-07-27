# Perpétua

## Table of contents

[Overview](https://github.com/jansensan/perpetuajs#overview)  

[Naming convention](https://github.com/jansensan/perpetuajs#naming-convention)  

[Usage](https://github.com/jansensan/perpetuajs#usage)

[Documentation](https://github.com/jansensan/perpetuajs#documentation)  
&nbsp;&nbsp;&nbsp;&nbsp;[BrowserEvent](https://github.com/jansensan/perpetuajs#browserevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[DocumentEvent](https://github.com/jansensan/perpetuajs#documentevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[DOMEvent](https://github.com/jansensan/perpetuajs#domevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[DragEvent](https://github.com/jansensan/perpetuajs#dragevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[FormEvent](https://github.com/jansensan/perpetuajs#formevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[KeyboardEvent](https://github.com/jansensan/perpetuajs#keyboardevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[MouseEvent](https://github.com/jansensan/perpetuajs#mouseevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[TouchEvent](https://github.com/jansensan/perpetuajs#touchevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[UIEvent](https://github.com/jansensan/perpetuajs#uievent)  

## Overview

Handling events in JavaScript requires the use of string litterals, which is prone to errors, mostly due to typos.

Coming from AS3, I prefer constants, such as `MouseEvent.CLICKED` and the likes. In the end, that constant simply returns a string, but it prevents errors.

Perpétua classes allow to use such constants. They are currently based upon the [events that jQuery uses](http://api.jquery.com/category/events/) and the [DOM events list on Wikipedia](http://en.wikipedia.org/wiki/DOM_events).

If you are curious, "perpétua" is a latin word for consistency.


## Naming convention

A while back, Robert Penner wrote about [how inconsistant the event names are in AS3](http://flashblog.robertpenner.com/2009/08/my-critique-of-as3-events-part-1.html), it seems that JS is no exception.

Constants are named with all verbs in the past tense. Their values are obviously the original values that JavaScript expects.


## Usage

Here is an example of how to use the Perpétua constants:

	<html>
		
		<head>
			<meta charset="utf-8"><!-- allows to support accented character -->
			<title>Perpétua example</title>
		</head>
		
		<body>
			<div id="button">Click me!</div>
			
			<!-- 
				load the scripts at the bottom of the body, 
				so that the dom can be loaded first
			-->
			<script src="http://code.jquery.com/jquery-latest.min.js"></script>
			<script src="perpetua.min.js"></script><!-- TODO: use real file path instead -->
			<script>
				
				// create a reference for the dom element
				var button;


				function init()
				{
					// reference the dom element with jquery
					button = jQuery("#button");
					
					// add the listener for the event to the reference
					button.on(MouseEvent.CLICKED, onMouseClicked);
				}
				

				function onMouseClicked(_)
				{
					// output some text to the console to show that it works
					console.log("button has been clicked!");
				}
				
				
				// initialize the script
				init();
				
			</script>
		</body>
		
	</html>


As you can see from above, event handling code becomes much more readable with verbs in the past tense. See [Penner's article](http://flashblog.robertpenner.com/2009/08/my-critique-of-as3-events-part-1.html) for the reasoning behind this.


## Documentation

The classes are compressed into a single JS file with [Closure](http://closure-compiler.appspot.com/), removing all whitespace and comments, making it hard to read. Below is the list of the events currently available, as a [quick reference](https://github.com/jansensan/perpetuajs#documentation).

As an extra, I created [Sublime Text snippets](https://github.com/jansensan/perpetua/tree/master/extras/perpetua-sublime-snippets), so you may simply use those and autocomplete will kick in to fill in the constant.


---
### BrowserEvent

**ABORTED** = "abort"  
**ERROR** = "error"  
**RESIZED** = "resize"  
**SCROLLED** = "scroll"


---
### DocumentEvent

**LOADED** = "load"  
**READY** = "ready"  
**UNLOADED** = "unload"  


---
### DOMEvent

**ELEMENT_ACTIVATED** = "DOMActivate"  
**SUBTREE_MODIFIED** = "DOMSubtreeModified"  
**NODE_INSERTED** = "DOMNodeInserted"  
**NODE_REMOVED** = "DOMNodeRemoved"  
**NODE_REMOVED_FROM_DOCUMENT** = "DOMNodeRemovedFromDocument"  
**NODE_INSERTED_INTO_DOCUMENT** = "DOMNodeInsertedIntoDocument"  
**ATTRIBUTE_MODIFIED** = "DOMAttrModified"  
**CHARACTER_DATA_MODIFIED** = "DOMCharacterDataModified"  


---
### DragEvent

**STARTED** = "dragstart"  
**DRAGGING** = "drag"  
**DRAGGED_OVER** = "dragenter"  
**DRAGGED_OUTSIDE** = "dragleave"  
**DRAGGING_OVER** = "dragover"  
**DROPPED** = "drop"  
**ENDED** = "dragend"  


---
### FormEvent

**BLURRED** = "blur"  
**CHANGED** = "change"  
**FOCUSED** = "focus"  
**RESET** = "reset"  
**SELECTED** = "select"  
**SUBMITTED** = "submit"  


---
### KeyboardEvent

**KEY_PRESSED** = "keydown"  
**KEY_HELD_DOWN** = "keypress"  
**KEY_RELEASED** = "keyup"  


---
### MouseEvent

**CLICKED** = "click"  
**DOUBLE_CLICKED** = "dblclick"  
**PRESSED** = "mousedown"  
**MOVED** = "mousemove"  
**MOVED_OUTSIDE** = "mouseout"  
**MOVED_OVER** = "mouseover"  
**RELEASED** = "mouseup"  


---
### TouchEvent

**CANCELED** = "touchcancel"  
**ENDED** = "touchend"  
**MOVED_OVER** = "touchenter"  
**MOVED_OUTSIDE** = "touchleave"  
**MOVED** = "touchmove"  
**STARTED** = "touchstart"  


---
### UIEvent

**FOCUSED** = "focusin"  
**BLURRED** = "focusout"  