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
