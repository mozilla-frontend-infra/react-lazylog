Normal log viewing:

```js
const url = 'https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log';

<div style={{ height: 500, width: 902 }}>
  <LazyLog extraLines={1} enableSearch url={url} caseInsensitive selectableLines />
</div>
```



Websocket Example:
```js
const url = 'wss://echo.websocket.org';
let socket = null;

<div style={{ height: 200, width: 902 }}>
  <button onClick={() => socket.send(JSON.stringify({ message: '[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1' }))}>ping</button>

  <LazyLog
    enableSearch
    url={url}
    websocket
    websocketOptions={{
      onOpen: (event, providedSocket) => {
          socket = providedSocket; providedSocket.send('Open Socket')
        },
      formatMessage: (event) => {
        let message = event;
        try {
          message = JSON.parse(event).message
        } catch(err) {

        }
        return message;
      },
    }}
  />

</div>
```

See `ScrollFollow` for an example of a streaming endpoint.
