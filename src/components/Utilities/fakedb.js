// use local storage to manage cart data
const addToDb = id => {
    let exerciseCollection = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('exercise-collection');
    if (storedCart) {
        exerciseCollection = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = exerciseCollection[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        exerciseCollection[id] = newQuantity;
    }
    else {
        exerciseCollection[id] = 1;
    }
    localStorage.setItem('exercise-collection', JSON.stringify(exerciseCollection));
}

const getSelected = () => {
    let exerciseCollection = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('exercise-collection');
    if (storedCart) {
        exerciseCollection = JSON.parse(storedCart);
    }
    return exerciseCollection;
}



export { addToDb, getSelected}