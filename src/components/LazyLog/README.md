Normal log viewing:

```js
const url = 'https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log';

<div style={{ height: 500, width: 902 }}>
  <LazyLog extraLines={1} enableSearch url={url} />
</div>
```

See `ScrollFollow` for an example of a streaming endpoint.
