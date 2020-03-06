function Inspect(items, key) {
    console.log('original key: ', key);
    key = key.toLowerCase().replace(/'/g, '').replace(/"/g, '');
    console.log('edited key', key);

    let selected = items[key];
    console.log('selected', selected);
    return {responseText: selected};
};

export default Inspect;
