
const getFromStorage = <MarksType>(name: string, def: MarksType): MarksType  => {
    try {
        return JSON.parse(localStorage.getItem(name) || "") as MarksType;
    } catch {
        return def;
}
};

 const setToStorage = (name: string, data: any) => {
    try {
        localStorage.setItem(name, JSON.stringify(data))
    }
    catch {
    }
}

const removeFromStorage = (key: string) => {
    localStorage.removeItem(key);
    };

const Storage = {
    setToStorage,
    getFromStorage,
    removeFromStorage
}

export default Storage;