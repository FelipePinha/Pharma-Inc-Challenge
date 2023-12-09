import { useState, useEffect } from 'react';

export const useUsers = (pageNumber: number) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=10&page=${pageNumber}`)
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [pageNumber]);

    return {
        users,
        isLoading,
        error,
    };
};
