import { useState, useEffect } from 'react';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => setError(err))
            .finally(() => setIsLoading(state => !state));
    }, []);

    return {
        users,
        isLoading,
        error,
    };
};
