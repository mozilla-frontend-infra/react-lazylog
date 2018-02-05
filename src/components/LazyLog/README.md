Normal log viewing:

```js
const url = 'https://public-artifacts.taskcluster.net/XEyu7ICDSsGZdSAwPs9Wnw/0/public/logs/live_backing.log';

<div style={{ height: 500, width: 902 }}>
  <LazyLog url={url} />
</div>
```

See `ScrollFollow` for an example of a streaming endpoint.
