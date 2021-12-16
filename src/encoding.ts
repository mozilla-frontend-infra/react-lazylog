export const encode = (value) => new TextEncoder().encode(value);
export const decode = (value) => {
    if (!ArrayBuffer.isView(value)) {
        value = new Uint8Array([value]);
    }
    return new TextDecoder().decode(value);
};
