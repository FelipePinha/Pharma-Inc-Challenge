import { ChangeEvent, createContext, ReactNode, useState } from 'react';

interface SearchContextInterface {
    search: string;
    handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const initialValues: SearchContextInterface = {
    search: '',
    handleChangeSearch: () => undefined,
};

export const SearchContext = createContext(initialValues);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState('');

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    };

    return (
        <SearchContext.Provider value={{ search, handleChangeSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
