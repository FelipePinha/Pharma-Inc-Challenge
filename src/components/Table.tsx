import { User } from '../types/UserTypes';
import { UsersDetails } from './UsersDetails';

interface TableProps {
    searchResults: User[];
}

export const Table = ({ searchResults }: TableProps) => {
    return (
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
                    <UsersDetails key={user.email} user={user} />
                ))}
            </tbody>
        </table>
    );
};
