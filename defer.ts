/** Invoke a no-argument function as a microtask, using queueMicrotask or Promise.resolve().then() */
export const defer: (cb: () => any) => void = window.queueMicrotask ?? (p => (cb: () => any) => p.then(cb))(Promise.resolve());