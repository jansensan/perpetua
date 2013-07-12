# PerpétuaJS

## Overview

Handling events in JavaScript requires the use of string litterals, which is prone to errors, due mostly to typos.

Coming from AS3, I am a fan of constants, such as MouseEvent.CLICK and the likes. In the end, that constant simply returns a string, but it prevents errors.

PerpétuaJS classes allow to use such constants. They are currently based upon the [events that jQuery uses](http://api.jquery.com/category/events/). 

A while back, Robert Penner wrote about [how inconsistant the event names are in AS3](http://flashblog.robertpenner.com/2009/08/my-critique-of-as3-events-part-1.html), and it seems that JS is no exception. Keep in mind that I may eventually (soon?) rename all those events to all be verbs in the past tense.

Feel free to comment and correct me.

## Documentation

The classes are compressed into a single JS file, making it hard to read. Below is the list of the events currently available, do not hesitate to refer yourself to this documentation.

Many of the descriptions may be taken from the [jQuery events](http://api.jquery.com/category/events/) page.

### BrowserEvent

#### ERROR
#### RESIZE
#### SCROLL


### DocumentEvent

#### LOAD
#### READY
#### UNLOAD

### FormEvent

#### BLUR
#### CHANGE
#### FOCUS
#### FOCUS_IN
#### SELECT
#### SUBMIT


### KeyboardEvent

#### FOCUS_OUT
#### KEY_DOWN
#### KEY_PRESS
#### KEY_UP

### MouseEvent

#### CLICK
#### DOUBLE_CLICK
#### FOCUS_OUT
#### MOUSE_DOWN
#### MOUSE_MOVE
#### MOUSE_OUT
#### MOUSE_OVER
#### MOUSE_UP