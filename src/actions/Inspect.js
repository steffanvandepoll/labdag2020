function Inspect(items, key) {
    key = key.toLowerCase();
    let selected = items[key];
    return {responseText: selected};
};

export default Inspect;