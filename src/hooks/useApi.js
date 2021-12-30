import { useCallback, useState } from 'react';
const useApi = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = useCallback(async (reqParam, addData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                reqParam.url, {
                method: reqParam.method ? reqParam.method : 'GET',
                headers: reqParam.headers ? reqParam.headers : {},
                body: reqParam.data ? JSON.stringify(reqParam.data) : null,
            }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            addData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, sendRequest }
}
export default useApi;