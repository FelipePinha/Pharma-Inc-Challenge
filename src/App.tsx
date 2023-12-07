import { Form } from './components/Form';
import { Header } from './components/Header';
import { UsersTable } from './components/UsersTable';
import { User } from './types/UserTypes';
import { useUsers } from './hooks/useUsers';
import { useContext } from 'react';
import { SearchContext } from './contexts/FilterContext';
import './index.css';

function App() {
    const { users } = useUsers();
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
                    <table className="w-full border-slate-400 border-2">
                        <thead className="bg-slate-300">
                            <tr>
                                <th className="p-2 border-2 border-slate-400">Name</th>
                                <th className="p-2 border-2 border-slate-400">Gender</th>
                                <th className="p-2 border-2 border-slate-400">Birth</th>
                                <th className="p-2 border-2 border-slate-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((user: User) => (
                                <UsersTable key={user.email} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default App;
