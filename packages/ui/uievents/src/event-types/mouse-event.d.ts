/* eslint-disable @typescript-eslint/naming-convention,no-var,@rushstack/no-new-null,@typescript-eslint/no-explicit-any */
import { DOMString, EventHandler, StrictEventHandler, UIEvent, EventModifierInit } from "../base-types";

/**
 * The MouseEvent interface provides specific contextual information associated with Mouse events.
 *
 * In the case of nested elements, mouse events are always targeted at the most deeply nested element.
 *
 * @see https://www.w3.org/TR/uievents/#events-mouseevents
 */
export interface MouseEvent extends UIEvent {
  /**
   * The horizontal coordinate at which the event occurred relative to the origin of the screen coordinate system.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-screenx
   */
  readonly screenX: number;
  /**
   * The vertical coordinate at which the event occurred relative to the origin of the screen coordinate system.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-screeny
   */
  readonly screenY: number;
  /**
   * The horizontal coordinate at which the event occurred relative to the viewport associated with the event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-clientx
   */
  readonly clientX: number;
  /**
   * The vertical coordinate at which the event occurred relative to the viewport associated with the event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-clienty
   */
  readonly clientY: number;

  /**
   * Refer to the KeyboardEvent's ctrlKey attribute.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-ctrlkey
   */
  readonly ctrlKey: boolean;
  /**
   * Refer to the KeyboardEvent's shiftKey attribute.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-shiftkey
   */
  readonly shiftKey: boolean;
  /**
   * Refer to the KeyboardEvent's altKey attribute.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-altkey
   */
  readonly altKey: boolean;
  /**
   * Refer to the KeyboardEvent's metaKey attribute.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-metakey
   */
  readonly metaKey: boolean;

  /**
   * During mouse events caused by the depression or release of a mouse button, button MUST be used to indicate
   * which pointer device button changed state.
   *
   * 0 indicates the primary button of the device (in general, the left button or the only button on
   * single-button devices, used to activate a user interface control or select text) or the un-initialized value.
   *
   * 1 indicates the auxiliary button (in general, the middle button, often combined with a mouse wheel).
   *
   * 2 indicates the secondary button (in general, the right button, often used to display a context menu).
   *
   * 3 indicates the X1 (back) button.
   *
   * 4 indicates the X2 (forward) button.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-button
   */
  readonly button: 0 | 1 | 2 | 3 | 4;
  /**
   * During any mouse events, buttons is used to indicate which combination of mouse buttons are currently
   * being pressed, expressed as a bitmask.
   *
   * 0 indicates no button is currently active.
   *
   * 1 indicates the primary button of the device (in general, the left button or the only button on single-button
   * devices, used to activate a user interface control or select text).
   *
   * 2 indicates the secondary button (in general, the right button, often used to display a context menu), if present.
   *
   * 4 indicates the auxiliary button (in general, the middle button, often combined with a mouse wheel).
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-buttons
   */
  readonly buttons: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

  /**
   * Used to identify a secondary EventTarget related to a UI event, depending on the type of event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-relatedtarget
   */
  readonly relatedTarget: EventTarget | null;

  /**
   * Queries the state of a modifier using a key value.
   * Returns true if it is a modifier key and the modifier is activated, false otherwise.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-getmodifierstate
   *
   * For list of Modifier keys: https://www.w3.org/TR/uievents-key/#keys-modifier
   */
  getModifierState(keyArg: DOMString): boolean;
}

export declare var MouseEvent: {
  new (type: DOMString, eventInitDict?: MouseEventInit): MouseEvent;
};

/**
 * To create an instance of the MouseEvent interface, use the MouseEvent constructor, passing an optional MouseEventInit dictionary.
 *
 * @see https://www.w3.org/TR/uievents/#idl-mouseeventinit
 */
export interface MouseEventInit extends EventModifierInit {
  /**
   * The horizontal coordinate at which the event occurred relative to the origin of the screen coordinate system.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-screenx
   */
  readonly screenX: number;
  /**
   * The vertical coordinate at which the event occurred relative to the origin of the screen coordinate system.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-screeny
   */
  readonly screenY: number;
  /**
   * The horizontal coordinate at which the event occurred relative to the viewport associated with the event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-clientx
   */
  readonly clientX: number;
  /**
   * The vertical coordinate at which the event occurred relative to the viewport associated with the event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-clienty
   */
  readonly clientY: number;

  /**
   * During mouse events caused by the depression or release of a mouse button, button MUST be used to indicate
   * which pointer device button changed state.
   *
   * 0 indicates the primary button of the device (in general, the left button or the only button on
   * single-button devices, used to activate a user interface control or select text) or the un-initialized value.
   *
   * 1 indicates the auxiliary button (in general, the middle button, often combined with a mouse wheel).
   *
   * 2 indicates the secondary button (in general, the right button, often used to display a context menu).
   *
   * 3 indicates the X1 (back) button.
   *
   * 4 indicates the X2 (forward) button.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-button
   */
  readonly button: 0 | 1 | 2 | 3 | 4;
  /**
   * During any mouse events, buttons is used to indicate which combination of mouse buttons are currently
   * being pressed, expressed as a bitmask.
   *
   * 0 indicates no button is currently active.
   *
   * 1 indicates the primary button of the device (in general, the left button or the only button on single-button
   * devices, used to activate a user interface control or select text).
   *
   * 2 indicates the secondary button (in general, the right button, often used to display a context menu), if present.
   *
   * 4 indicates the auxiliary button (in general, the middle button, often combined with a mouse wheel).
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-buttons
   */
  readonly buttons: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * Used to identify a secondary EventTarget related to a UI event, depending on the type of event.
   *
   * @see https://www.w3.org/TR/uievents/#dom-mouseevent-relatedtarget
   */
  readonly relatedTarget: EventTarget | null;
}

/**
 * The {@link MouseEventHandler} callback function type represents a callback used for mouse event handlers.
 *
 * Stricter type {@link StrictMouseEventHandler} replaces the any return value with void.
 */
export type MouseEventHandler = EventHandler<MouseEvent>;
/**
 * {@link StrictMouseEventHandler} is Stricter version of {@link MouseEventHandler} callback function type.
 *
 * It replaces the any return value with void.
 */
export type StrictMouseEventHandler = StrictEventHandler<MouseEvent>;
