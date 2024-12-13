import axios from "axios";

const fetchProducts = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return response.data;
    } catch (error) {
        throw new Error("Failed to load products");
    }
};

export { fetchProducts };
