## UI events

Work in progress.

This library aims at providing better intellisense when hovering over Typescript event related types
in a compatible IDE (works with VS Code).

For each type and many properties, hyperlink references to their web standard definition are provided.

The library of course requires to be imported to override default lib.dom.d.ts.

Don't replace lib.dom.d.ts in a config, as it provides a necessary fallback for gazillions of types.

### How to use

Hover on an event related item to see its type. Try importing that very type from "@organon/uievents":

```js
import {MouseEvent} from "@organon/uievents";

function onClick(e: MouseEvent): void {
  console.log(`Copy in an IDE and Hover over e.screenX in this code snippet: ${e.screenX}`)
}
```

If the intellisense doesn't change, then the type is not yet overridden.