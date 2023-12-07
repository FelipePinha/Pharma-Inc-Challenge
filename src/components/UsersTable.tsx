import { User } from '../types/UserTypes';
interface UsersTableProps {
    user: User;
}

export const UsersTable = ({ user }: UsersTableProps) => {
    const registeredDate = user.registered.date.substring(0, 10);

    return (
        <tr key={user.email}>
            <td className="text-center p-2 border-2 border-slate-400">
                {user.name.first} {user.name.last}
            </td>
            <td className="text-center p-2 border-2 border-slate-400">{user.gender}</td>
            <td className="text-center p-2 border-2 border-slate-400">{registeredDate}</td>
            <td className="text-center p-2 border-2 border-slate-400">
                <button className="bg-slate-500 text-white w-16 p-1 rounded-md">View</button>
            </td>
        </tr>
    );
};
