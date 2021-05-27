`ScrollFollow` is a higher-order component (HOC) that aims to simplify
toggling a `ProdigyLog`'s "follow" functionality based on user scrolling.
The `ScrollFollow` component accepts a render prop function which should return a
component to render based on the function's arguments.

```js
const url = 'https://runkit.io/eliperelman/streaming-endpoint/branches/master';

<div style={{ height: 500, width: 902 }}>
  <ScrollFollow
    startFollowing
    render={({ onScroll, follow, startFollowing, stopFollowing }) => (
      <ProdigyLog extraLines={1} enableActions url={url} stream onScroll={onScroll} follow={follow} />
    )}
  />
</div>
```
