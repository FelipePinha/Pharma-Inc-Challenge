import { Form } from './components/Form';
import { Header } from './components/Header';
import { UsersTable } from './components/UsersTable';
import { useUsers } from './hooks/useUsers';
import './index.css';

function App() {
    const { users } = useUsers();

    return (
        <>
            <Header />
            <main>
                <Form />
                <UsersTable users={users} />
            </main>
        </>
    );
}

export default App;
