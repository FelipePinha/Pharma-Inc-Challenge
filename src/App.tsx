import { Form } from './components/Form';
import { Header } from './components/Header';
import { UsersTable } from './components/UsersTable';
import './index.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Form />
                <UsersTable />
            </main>
        </>
    );
}

export default App;
