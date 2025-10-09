const getCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categorie");
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export { getCategories, getProducts };
