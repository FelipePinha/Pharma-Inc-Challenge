import { User } from '../types/UserTypes';
interface UsersTableProps {
    users: User[];
}

export const UsersTable = ({ users }: UsersTableProps) => {
    return (
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
                    {users.map((user: User) => (
                        <tr key={user.email}>
                            <td className="text-center p-2 border-2 border-slate-400">
                                {user.name.first} {user.name.last}
                            </td>
                            <td className="text-center p-2 border-2 border-slate-400">
                                {user.gender}
                            </td>
                            <td className="text-center p-2 border-2 border-slate-400">
                                2000-04-06
                            </td>
                            <td className="text-center p-2 border-2 border-slate-400">
                                <button className="bg-slate-500 text-white w-16 p-1 rounded-md">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
