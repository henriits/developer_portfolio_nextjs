import { useState, useEffect, useCallback } from "react";

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
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

    // The fetchData function is moved out of useEffect to use it in refetch
    const fetchData = useCallback(async () => {
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
    }, [url, options]); // Adding options to the dependency array for re-fetching when options change

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Effect depends on fetchData, so it will re-run when the fetchData callback changes

    // Return the fetch state along with the refetch function
    return { data, loading, error, refetch: fetchData };
};

export default useFetch;
