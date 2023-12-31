import { useContext } from 'react';
import { User } from '../types/UserTypes';
import { ModalContext } from '../contexts/ModalContext';
interface UsersDetailsProps {
    user: User;
}

export const UsersDetails = ({ user }: UsersDetailsProps) => {
    const { handleChangeModalState, handleChangeSelectedUser } = useContext(ModalContext);
    const registeredDate = user.registered.date.substring(0, 10);

    const handleViewClick = () => {
        handleChangeSelectedUser(user);
        handleChangeModalState();
    };

    return (
        <tr key={user.email}>
            <td className="text-center p-2 border-2 border-slate-400">
                {user.name.first} {user.name.last}
            </td>
            <td className="text-center p-2 border-2 border-slate-400">{user.gender}</td>
            <td className="text-center p-2 border-2 border-slate-400">{registeredDate}</td>
            <td className="text-center p-2 border-2 border-slate-400">
                <button
                    onClick={handleViewClick}
                    className="bg-slate-500 text-white w-16 p-1 rounded-md"
                >
                    View
                </button>
            </td>
        </tr>
    );
};
