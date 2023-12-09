import { Form } from './components/Form';
import { Header } from './components/Header';
import { User } from './types/UserTypes';
import { useUsers } from './hooks/useUsers';
import { useContext, useState } from 'react';
import { SearchContext } from './contexts/FilterContext';
import { Modal } from './components/Modal';
import { Pagination } from './components/Pagination';
import { Table } from './components/Table';

import './index.css';

function App() {
    const [page, setPage] = useState(1);
    const { users } = useUsers(page);
    const { search } = useContext(SearchContext);

    const searchResults = users.filter((user: User) => {
        const { first, last } = user.name;

        return (
            first.toLowerCase().includes(search.toLowerCase()) ||
            last.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <>
            <Header />
            <main>
                <Form />
                <div className="max-w-4xl mx-auto pb-4">
                    <Table searchResults={searchResults} />
                </div>
                <Pagination page={page} setPage={setPage} />
            </main>
            <Modal />
        </>
    );
}

export default App;
