# Perpétua

## Table of contents

[Overview](https://github.com/jansensan/perpetuajs#overview)  

[Naming convention](https://github.com/jansensan/perpetuajs#naming-convention)  
&nbsp;&nbsp;&nbsp;&nbsp;[Issues](https://github.com/jansensan/perpetuajs#issues)  

[Documentation](https://github.com/jansensan/perpetuajs#documentation)  
&nbsp;&nbsp;&nbsp;&nbsp;[BrowserEvent](https://github.com/jansensan/perpetuajs#browserevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[DocumentEvent](https://github.com/jansensan/perpetuajs#documentevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[FormEvent](https://github.com/jansensan/perpetuajs#formevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[KeyboardEvent](https://github.com/jansensan/perpetuajs#keyboardevent)  
&nbsp;&nbsp;&nbsp;&nbsp;[MouseEvent](https://github.com/jansensan/perpetuajs#mouseevent)  

## Overview

Handling events in JavaScript requires the use of string litterals, which is prone to errors, mostly due to typos.

Coming from AS3, I prefer constants, such as `MouseEvent.CLICK` and the likes. In the end, that constant simply returns a string, but it prevents errors.

Perpétua classes allow to use such constants. They are currently based upon the [events that jQuery uses](http://api.jquery.com/category/events/). As this library progresses, I will most probably add touch events and other events that browsers can dispatch in Javascript. 

If you are curious, "perpétua" is the latin word for constance.


## Naming convention

A while back, Robert Penner wrote about [how inconsistant the event names are in AS3](http://flashblog.robertpenner.com/2009/08/my-critique-of-as3-events-part-1.html), and it seems that JS is no exception. I tried to name the constants with all verbs put in the past tense.

### Issues

Some constant names are still in flux. I still have issue finding proper names for the following ones:  

	FormEvent.FOCUSED  
Should it be FormEvent.FOCUS_GAINED?

	FormEvent.FOCUSED_IN

How distinct is this from "focus"? How should this be renamed?

	KeyboardEvent.KEY_DOWN

If I compare with `MouseEvent` constants, this should be renamed KeyboardEvent.KEY_PRESSED, but causes conflict with the actual `"keypress"` event. Or maybe should `MouseEvent.KEY_PRESSED` be renamed `MouseEvent.KEY_HELD_DOWN` or something like that?

	KeyboardEvent.KEY_UP

If `MouseEvent.KEY_DOWN` gets renamed `MouseEvent.KEY_PRESSED`, I will rename this `MouseEvent.KEY_RELEASED`.

Keep in mind that these above may change soon.

See [Penner's article](http://flashblog.robertpenner.com/2009/08/my-critique-of-as3-events-part-1.html) for the reasoning behind this, but to be honest, event handling code becomes much more readable with verbs in the past tense:

	var button = jQuery("#button");
	button.on(MouseEvent.CLICKED, onButtonClicked);
	
	function onButtonClicked(_)
	{
		// code here
	}


## Documentation

The classes are compressed into a single JS file with Closure, removing all whitespace and comments, making it hard to read. Below is the list of the events currently available.

As an extra, I created Sublime snippets, so you may simply use those and autocomplete will kick in to fill in the constant.


---
### BrowserEvent

**ERROR** = "error"  
**RESIZED** = "resize"  
**SCROLLED** = "scroll"


---
### DocumentEvent

**LOADED** = "load"  
**READY** = "ready"  
**UNLOADED** = "unload"  


---
### FormEvent

**BLURRED** = "blur"  
**CHANGED** = "change"  
**FOCUSED** = "focus"  
**FOCUSED_IN** = "focusin"  
**SELECTED** = "select"  
**SUBMITTED** = "submit"  


---
### KeyboardEvent

**FOCUS_LOST** = "focusout"  
**KEY_DOWN** = "keydown"  
**KEY_PRESSED** = "keypress"  
**KEY_UP** = "keyup"  


---
### MouseEvent

**CLICKED** = "click"  
**DOUBLE_CLICKED** = "dblclick"  
**FOCUS_LOST** = "focusout"  
**MOUSE_PRESSED** = "mousedown"  
**MOUSE_MOVED** = "mousemove"  
**MOUSE_MOVED_OUTSIDE** = "mouseout"  
**MOUSE_MOVED_OVER** = "mouseover"  
**MOUSE_RELEASED** = "mouseup"  