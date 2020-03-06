function Inspect(items, key) {
    console.log('itemst', items);
    console.log('key', key);
    key = key.toLowerCase();
    let selected = items[key];
    console.log('selected', selected);
    return {responseText: selected};
};

export default Inspect;
