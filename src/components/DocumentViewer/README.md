Normal log viewing:

```js
const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Proin tristique pharetra condimentum.
  Nulla massa risus, sollicitudin vitae arcu id,
  hendrerit viverra ex.
  Maecenas lobortis purus ut ligula imperdiet, vitae tempus nisi vehicula.
  Donec scelerisque diam orci, id mattis tortor laoreet vel.
  Aliquam vel tortor pulvinar, suscipit lorem vitae, vehicula ex
  Nullam suscipit justo non lorem accumsan, at congue nulla vestibulum. Sed in placerat ipsum, nec convallis felis.
`;

const textEmitter = (encode, createEmitter) => {
  const emitter = createEmitter();

  emitter.on('start', () => {
    text.split('\n').map(line => {
      emitter.emit('update', encode(line));
    });
    emitter.emit('end');
  });

  return emitter;
};

<div>
  <DocumentViewer height={600} width={902} search={[]} selectableLines textEmitter={textEmitter} />
</div>;
```
