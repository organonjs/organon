/* eslint-disable @typescript-eslint/naming-convention,no-var,@rushstack/no-new-null,@typescript-eslint/no-explicit-any */
import { DOMString, Event, EventInit } from "./event";

/**
 * The UIEvent interface provides specific contextual information associated with User Interface events.
 *
 * Ref.: https://www.w3.org/TR/uievents/#uievent
 */
export interface UIEvent extends Event {
  /**
   * The view attribute identifies the Window from which the event was generated.
   *
   * Ref.: https://www.w3.org/TR/uievents/#uievent
   */
  readonly view: Window | null;
  /**
   * Specifies some detail information about the Event, depending on the type of event.
   *
   * Ref.: https://www.w3.org/TR/uievents/#uievent
   */
  readonly detail: number;
}

export declare var UIEvent: {
  new (type: DOMString, eventInitDict?: UIEventInit): UIEvent;
};

/**
 * The UIEvent interface provides specific contextual information associated with User Interface events.
 *
 * Ref.: https://www.w3.org/TR/uievents/#events-uievents
 */
export interface UIEventInit extends EventInit {
  /**
   * Should be initialized to the Window object of the global environment in which this event will be dispatched.
   * If this event will be dispatched to an element, the view property should be set to the Window object
   * containing the element’s ownerDocument.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dictdef-uieventinit
   */
  readonly view: Window | null;
  /**
   * This value is initialized to a number that is application-specific.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dictdef-uieventinit
   */
  readonly detail: number;
}

/**
 * Event Modifier Initializers
 *
 * The MouseEvent and KeyboardEvent interfaces share a set of keyboard modifier attributes and support a mechanism
 * for retrieving additional modifier states. The following dictionary enables authors to initialize keyboard modifier
 * attributes of the MouseEvent and KeyboardEvent interfaces, as well as the additional modifier states queried via getModifierState().
 *
 * Ref.: https://www.w3.org/TR/uievents/#event-modifier-initializers
 */
export interface EventModifierInit extends UIEventInit {
  /**
   * Initializes the ctrlKey attribute of the MouseEvent or KeyboardEvent objects to true if the Control key modifier
   * is to be considered active, false otherwise.
   *
   * When true, implementations must also initialize the event object’s key modifier state such that calls to the
   * getModifierState() or getModifierState() when provided with the parameter Control must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-ctrlkey
   */
  ctrlKey: boolean;
  /**
   * Initializes the shiftKey attribute of the MouseEvent or KeyboardEvent objects to true if the Shift key modifier
   * is to be considered active, false otherwise.
   * When true, implementations must also initialize the event object’s key modifier state such that calls
   * to the getModifierState() or getModifierState() when provided with the parameter Shift must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-shiftkey
   */
  shiftKey: boolean;
  /**
   * Initializes the altKey attribute of the MouseEvent or KeyboardEvent objects to true if the Alt (alternative) (or Option) key modifier
   * is to be considered active, false otherwise.
   *
   * When true, implementations must also initialize the event object’s key modifier state such that calls
   * to the getModifierState() or getModifierState() when provided with the parameter Alt must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-altkey
   */
  altKey: boolean;
  /**
   * Initializes the metaKey attribute of the MouseEvent or KeyboardEvent objects to true if the Meta key modifier is to be
   * considered active, false otherwise.
   *
   * When true, implementations must also initialize the event object’s key modifier state such that calls
   * to the getModifierState() or getModifierState() when provided with either the parameter Meta must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-metakey
   */
  metaKey: boolean;

  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter AltGraph must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifieraltgraph
   */
  modifierAltGraph: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter CapsLock must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifiercapslock
   */
  modifierCapsLock: boolean;
  /**
   * nitializes the event object’s key modifier state such that calls to the getModifierState() or
   * getModifierState() when provided with the parameter Fn must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifierfn
   */
  modifierFn: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter FnLock must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifierfnlock
   */
  modifierFnLock: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter Hyper must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifierhyper
   */
  modifierHyper: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter NumLock must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifiernumlock
   */
  modifierNumLock: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter ScrollLock must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifierscrolllock
   */
  modifierScrollLock: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter Super must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifiersuper
   */
  modifierSuper: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter Symbol must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifiersymbol
   */
  modifierSymbol: boolean;
  /**
   * Initializes the event object’s key modifier state such that calls to the getModifierState()
   * or getModifierState() when provided with the parameter SymbolLock must return true.
   *
   * Ref.: https://www.w3.org/TR/uievents/#dom-eventmodifierinit-modifiersymbollock
   */
  modifierSymbolLock: boolean;
}
