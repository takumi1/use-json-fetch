import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                setData(data);
                setHasError(null);
            } catch (e) {
                setHasError(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return [data, isLoading, hasError];
}