import { getStoredCart } from "../utils/fakeDB";

export const productAndCartData = async () => {
    const productData = await fetch('products.json')
    const products = await productData.json()

    const savedCart = getStoredCart();
    let initialCart = [];
    for (const id in savedCart) {
        const foundProduct = products.find(p => p.id === id);
        if (foundProduct) {
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            initialCart.push(foundProduct);
        }
    }

    return { products, initialCart };
}