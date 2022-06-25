/* eslint-disable @typescript-eslint/naming-convention,no-var,@rushstack/no-new-null,@typescript-eslint/no-explicit-any */

/**
 * The DOMString type corresponds to the set of all possible sequences of code units (UTF-16 encoding).
 * In Javascript, DOMString is a just string (UTF-16 encoding too).
 *
 * @see https://webidl.spec.whatwg.org/#idl-DOMString
 */
export type DOMString = string;

/** @see https://dom.spec.whatwg.org/#abortsignal */
export interface AbortSignal extends EventTarget {
  /**
   * Returns an AbortSignal instance whose abort reason is set to reason if not undefined; otherwise to an "AbortError" DOMException.
   *
   * @see https://dom.spec.whatwg.org/#abortsignal
   */
  abort(reason?: any): AbortSignal; // new object
  /**
   * Returns an AbortSignal instance which will be aborted in milliseconds milliseconds. Its abort reason will be set to a "TimeoutError" DOMException.
   *
   * @see https://dom.spec.whatwg.org/#abortsignal
   */
  timeout(milliseconds: number): AbortSignal; // new object

  /**
   * Returns true if signal’s AbortController has signaled to abort; otherwise false.
   *
   * @see https://dom.spec.whatwg.org/#abortsignal
   */
  readonly aborted: boolean;
  /**
   * Returns signal’s abort reason.
   *
   * @see https://dom.spec.whatwg.org/#abortsignal
   */
  readonly reason: any;
  /**
   * Throws signal’s abort reason, if signal’s AbortController has signaled to abort; otherwise, does nothing.
   *
   * @see https://dom.spec.whatwg.org/#abortsignal
   */
  throwIfAborted(): undefined;

  /**
   * The onabort attribute is an event handler IDL attribute for the onabort event handler, whose event handler event type is abort.
   *
   * @see https://dom.spec.whatwg.org/#dom-abortsignal-onabort
   */
  onabort: EventHandler;
}

export declare var AbortSignal: {
  abort(reason?: any): AbortSignal;
  timeout(milliseconds: number): AbortSignal;
};

export type EventHandlerNonNull = (event: Event) => any;
/**
 * The EventHandler callback function type represents a callback used for event handlers.
 *
 * @see https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler */
export type EventHandler<E = Event> = (event: E) => any | null;
export type StrictEventHandler<E = Event> = (event: E) => void;

/**
 * An EventTarget object represents a target to which an event can be dispatched when something has occurred.
 *
 * @see https://dom.spec.whatwg.org/#eventtarget
 */
export interface EventTarget {
  /**
   * Appends an event listener for events whose type attribute value is type. The callback argument sets the
   * callback that will be invoked when the event is dispatched. The options argument sets listener-specific
   * options. For compatibility this can be a boolean, in which case the method behaves exactly as if the
   * value was specified as options’s capture.
   *
   * @see https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener
   */
  addEventListener(
    type: DOMString,
    callback: EventListener | null,
    options?: AddEventListenerOptions | boolean
  ): void; // options defaults to {}

  /**
   * Removes the event listener in target’s event listener list with the same type, callback, and options.
   *
   * @see https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener
   */
  removeEventListener(
    type: DOMString,
    callback: EventListener | null,
    options?: AddEventListenerOptions | boolean
  ): void; // options defaults to {}

  /**
   * Dispatches a synthetic event event to target and returns true if either event’s cancelable attribute
   * value is false or its preventDefault() method was not invoked; otherwise false.
   *
   * @see https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent */
  dispatchEvent(event: Event): boolean;
}

export declare var EventTarget: {
  new (): EventTarget;
};

/**
 * Each EventTarget object has an associated event listener list (a list of zero or more event listeners). It is initially the empty list.
 *
 * An event listener can be used to observe a specific event.
 *
 * @see https://dom.spec.whatwg.org/#callbackdef-eventlistener
 */
export interface EventListener {
  handleEvent(event: Event): void;
}

/**
 * @see https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions
 */
export interface EventListenerOptions {
  /**
   * When set to true, options’s capture prevents callback from being invoked when the event’s eventPhase
   * attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked
   * when event’s eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if
   * event’s eventPhase attribute value is AT_TARGET.
   *
   * @see https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions
   */
  capture: boolean; // defaults to false
}

/**
 * @see https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions
 */
export interface AddEventListenerOptions extends EventListenerOptions {
  /**
   * When set to true, options’s passive indicates that the callback will not cancel the event by invoking
   * preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
   *
   * @see https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions
   */
  passive: boolean; // defaults to false

  /**
   * When set to true, options’s once indicates that the callback will only be invoked once after which the event listener will be removed.
   *
   * @see https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions
   */
  once: boolean; // defaults to false

  /**
   * If an AbortSignal is passed for options’s signal, then the event listener will be removed when signal is aborted.
   *
   * @see https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions
   */
  signal: AbortSignal;
}

/**
 * An Event object is simply named an event. It allows for signaling that something has occurred, e.g., that an image has completed downloading.
 *
 * @see https://dom.spec.whatwg.org/#event
 */
export interface Event {
  /** Returns the type of event, e.g. "click", "hashchange", or "submit".
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly type: DOMString;

  /**
   * Returns the object to which event is dispatched (its target).
   *
   * The event bubbles up from Event.target, the source, to Event.currentTarget, a handler amongst maybe many, or none).
   *
   * Event.target may be the same as Event.currentTarget.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly target: EventTarget | null;

  /**
   * Returns the object whose event listener’s callback is currently being invoked.
   *
   * The event bubbles up from Event.target, the source, to Event.currentTarget, a handler amongst maybe many, or none).
   *
   * Event.target may be the same as Event.currentTarget.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly currentTarget: EventTarget | null;

  /** @deprecated */
  readonly srcElement?: EventTarget | null;

  /**
   * Returns the invocation target objects of event’s path (objects on which listeners will be invoked),
   * except for any nodes in shadow trees of which the shadow root’s mode is "closed" that are not reachable from event’s currentTarget.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  composedPath(): EventTarget[];

  /**
   * Constant representing the event’s phase NONE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  NONE: 0;
  /**
   * Constant representing the event’s phase CAPTURING_PHASE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  CAPTURING_PHASE: 1;
  /**
   * Constant representing the event’s phase AT_TARGET.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  AT_TARGET: 2;
  /**
   * Constant representing the event’s phase BUBBLING_PHASE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  BUBBLING_PHASE: 3;
  /**
   * Returns the event’s phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly eventPhase: 0 | 1 | 2 | 3;

  /**
   * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  stopPropagation(): void;
  /** @deprecated */
  cancelBubble?: boolean; // legacy alias of .stopPropagation()
  /**
   * Invoking this method prevents event from reaching any registered event listeners after the current one finishes running
   * and, when dispatched in a tree, also prevents event from reaching any other objects.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  stopImmediatePropagation(): void;

  /**
   * Returns true or false depending on how event was initialized. True if event goes through its target’s ancestors
   * in reverse tree order; otherwise false.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly bubbles: boolean;
  /**
   * Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but
   * true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly cancelable: boolean;
  /** @deprecated */
  returnValue?: boolean; // legacy
  /**
   * If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false,
   * signals to the operation that caused event to be dispatched that it needs to be canceled.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  preventDefault(): void;
  /**
   * Returns true if preventDefault() was invoked successfully to indicate cancelation; otherwise false.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly defaultPrevented: boolean;
  /**
   * Returns true or false depending on how event was initialized. True if event invokes listeners past a
   * ShadowRoot node that is the root of its target; otherwise false.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly composed: boolean;

  /**
   * Returns true if event was dispatched by the user agent, and false otherwise.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly isTrusted: boolean; // [LegacyUnforgeable]
  /**
   * Returns the event’s timestamp as the number of milliseconds measured relative to the time origin.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  readonly timeStamp: DOMHighResTimeStamp;

  /** @deprecated */
  initEvent?(type: DOMString, bubbles?: boolean, cancelable?: boolean): void; // legacy, bubbles and cancelable default to false
}

export declare var Event: {
  new (type: DOMString, eventInitDict?: EventInit): Event; // eventInit defaults to {}

  prototype: Event;

  /**
   * Constant representing the event’s phase NONE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  NONE: 0;
  /**
   * Constant representing the event’s phase CAPTURING_PHASE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  CAPTURING_PHASE: 1;
  /**
   * Constant representing the event’s phase AT_TARGET.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  AT_TARGET: 2;
  /**
   * Constant representing the event’s phase BUBBLING_PHASE.
   *
   * @see https://dom.spec.whatwg.org/#event
   */
  BUBBLING_PHASE: 3;
};

/**
 * To initialize an event, with boolean properties bubbles, cancelable and composed
 *
 * @see https://dom.spec.whatwg.org/#dictdef-eventinit
 */
export interface EventInit {
  bubbles: boolean;
  cancelable: boolean;
  composed: boolean;
}
