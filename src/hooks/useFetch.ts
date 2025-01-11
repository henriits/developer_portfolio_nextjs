import { useState, useEffect } from "react";

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
};

type UseFetchOptions = {
    method?: string; // HTTP method (default: GET)
    headers?: Record<string, string>; // HTTP headers
    body?: BodyInit | null; // Request body for POST, PUT, etc.
};

const useFetch = <T>(url: string, options?: UseFetchOptions): FetchState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    method: options?.method || "GET",
                    headers: options?.headers,
                    body: options?.body || null,
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }

                const data: T = await response.json();
                setData(data);
            } catch (err: any) {
                setError(err.message || "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;
