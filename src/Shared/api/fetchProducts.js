import axios from "axios";
import { useState, useEffect } from "react";

const useLoadProducts = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                setData(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, isError };
};

export { useLoadProducts };
