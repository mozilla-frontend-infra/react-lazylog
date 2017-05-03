if (!('TextDecoder' in self)) {
  import('text-encoding-utf-8')
    .then(({ TextDecoder, TextEncoder }) => {
      self.TextDecoder = TextDecoder;
      self.TextEncoder = TextEncoder;
    });
}

export const decode = value => new TextDecoder('utf-8').decode(value);
