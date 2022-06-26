/* eslint-disable @typescript-eslint/naming-convention,no-var,@rushstack/no-new-null,@typescript-eslint/no-explicit-any */
import { DOMString, EventHandler, StrictEventHandler, UIEvent } from "../base-types";

/**
 * The KeyboardEvent interface provides specific contextual information associated with keyboard devices.
 * Each keyboard event references a key using a value. Keyboard events are commonly directed at the element that has the focus.
 *
 * The KeyboardEvent interface provides convenient attributes for some common modifiers keys: ctrlKey, shiftKey, altKey, metaKey.
 * These attributes are equivalent to using the method getModifierState() with Control, Shift, Alt, or Meta respectively.
 *
 * @see https://www.w3.org/TR/uievents/#keyboardevent
 */
export interface KeyboardEvent extends UIEvent {
  /**
   * The key activation MUST NOT be distinguished as the left or right version of the key, and (other than the NumLock key)
   * did not originate from the numeric keypad (or did not originate with a virtual key corresponding to the numeric keypad).
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-dom_key_location_standard
   */
  DOM_KEY_LOCATION_STANDARD: 0x00;
  /**
   * The key activated originated from the left key location (when there is more than one possible location for this key).
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-dom_key_location_left
   */
  DOM_KEY_LOCATION_LEFT: 0x01;
  /**
   * The key activation originated from the right key location (when there is more than one possible location for this key).
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-dom_key_location_right
   */
  DOM_KEY_LOCATION_RIGHT: 0x02;
  /**
   * The key activation originated on the numeric keypad or with a virtual key corresponding to the numeric keypad (when there is more
   * than one possible location for this key). Note that the NumLock key should always be encoded with a location of DOM_KEY_LOCATION_STANDARD.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-dom_key_location_numpad
   */
  DOM_KEY_LOCATION_NUMPAD: 0x03;

  /**
   * key holds a key attribute value corresponding to the key pressed.
   *
   * The key attribute is not related to the legacy keyCode attribute and does not have the same set of values.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-key
   */
  readonly key: DOMString;
  /**
   * code holds a string that identifies the physical key being pressed. The value is not affected by the current
   * keyboard layout or modifier state, so a particular key will always return the same value.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-code
   */
  readonly code: DOMString;
  /**
   * The location attribute contains an indication of the logical location of the key on the device.
   *
   * This attribute MUST be set to one of the DOM_KEY_LOCATION constants to indicate the location of a key on the device.
   *
   * If a user agent allows keys to be remapped, then the location value for a remapped key MUST be set to a value
   * which is appropriate for the new key. For example, if the "ControlLeft" key is mapped to the "KeyQ" key, then
   * the location attribute MUST be set to DOM_KEY_LOCATION_STANDARD. Conversely, if the "KeyQ" key is remapped to one
   * of the Control keys, then the location attribute MUST be set to either DOM_KEY_LOCATION_LEFT or DOM_KEY_LOCATION_RIGHT.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-location
   */
  readonly location: number;

  /**
   * true if the Control (control) key modifier was active.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-ctrlkey
   */
  readonly ctrlKey: boolean;
  /**
   * true if the shift (Shift) key modifier was active.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-shiftkey
   */
  readonly shiftKey: boolean;
  /**
   * true if the Alt (alternative) (or "Option") key modifier was active.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-altkey
   */
  readonly altKey: boolean;
  /**
   * true if the meta (Meta) key modifier was active.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-metakey
   */
  readonly metaKey: boolean;

  /**
   * true if the key has been pressed in a sustained manner. Holding down a key MUST result in the repeating the
   * events keydown, beforeinput, input in this order, at a rate determined by the system configuration. For mobile
   * devices which have long-key-press behavior, the first key event with a repeat attribute value of true MUST serve
   * as an indication of a long-key-press. The length of time that the key MUST be pressed in order to begin repeating
   * is configuration-dependent.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-repeat
   */
  readonly repeat: boolean;
  /**
   * true if the key event occurs as part of a composition session, i.e., after a compositionstart event and
   * before the corresponding compositionend event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-iscomposing
   */
  readonly isComposing: boolean;

  /**
   * Queries the state of a modifier using a key value.
   *
   * Returns true if it is a modifier key and the modifier is activated, false otherwise.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardevent-getmodifierstate
   */
  getModifierState(keyArg: DOMString): boolean;
}

export declare var KeyboardEvent: {
  new (type: DOMString, eventInitDict?: KeyboardEventInit): KeyboardEvent;
};

/**
 * To create an instance of the KeyboardEvent interface, use the KeyboardEvent constructor, passing an
 * optional KeyboardEventInit dictionary.
 *
 * @see https://www.w3.org/TR/uievents/#idl-keyboardeventinit
 */
export interface KeyboardEventInit extends EventModifierInit {
  /**
   * Initializes the key attribute of the KeyboardEvent object to the unicode character string representing
   * the meaning of a key after taking into account all keyboard modifiers (such as shift-state). This value
   * is the final effective value of the key. If the key is not a printable character, then it should be
   * one of the key values defined in [https://www.w3.org/TR/uievents/#biblio-uievents-key].
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardeventinit-key
   */
  key: DOMString;
  /**
   * Initializes the code attribute of the KeyboardEvent object to the unicode character string representing
   * the key that was pressed, ignoring any keyboard modifications such as keyboard layout. This value should
   * be one of the code values defined in [https://www.w3.org/TR/uievents/#biblio-uievents-code].
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardeventinit-code
   */
  code: DOMString;
  /**
   * Initializes the location attribute of the KeyboardEvent object to one of the following location numerical constants:
   *
   * DOM_KEY_LOCATION_STANDARD (numerical value 0)
   * DOM_KEY_LOCATION_LEFT (numerical value 1)
   * DOM_KEY_LOCATION_RIGHT (numerical value 2)
   * DOM_KEY_LOCATION_NUMPAD (numerical value 3)
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardeventinit-location
   */
  location: 0 | 1 | 2 | 3;
  /**
   * Initializes the repeat attribute of the KeyboardEvent object. This attribute should be set to true if the the current
   * KeyboardEvent is considered part of a repeating sequence of similar events caused by the long depression of any
   * single key, false otherwise.
   *
   * @see https://www.w3.org/TR/uievents/#dom-keyboardeventinit-repeat
   */
  repeat: boolean;
  /**
   * Initializes the isComposing attribute of the KeyboardEvent object. This attribute should be set to true if the event
   * being constructed occurs as part of a composition sequence, false otherwise.
   *c-
   * @see https://www.w3.org/TR/uievents/#dom-keyboardeventinit-iscomposing
   */
  isComposing: boolean;
}

/**
 * The {@link KeyboardEventHandler } callback function type represents a callback used for keyboard event handlers.
 *
 * Stricter type {@link StrictKeyboardEventHandler } replaces the any return value with void.
 */
export type KeyboardEventHandler = EventHandler<KeyboardEvent>;
/**
 * {@link StrictKeyboardEventHandler } is a stricter version of {@link KeyboardEventHandler } callback function type.
 *
 * It replaces the any return value with void.
 */
export type StrictKeyboardEventHandler = StrictEventHandler<KeyboardEvent>;
