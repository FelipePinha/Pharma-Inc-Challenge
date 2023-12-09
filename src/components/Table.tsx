import { useContext } from 'react';
import { User } from '../types/UserTypes';
import { UsersDetails } from './UsersDetails';
import { ModalContext } from '../contexts/ModalContext';

interface TableProps {
    searchResults: User[];
}

export const Table = ({ searchResults }: TableProps) => {
    const { handleChangeModalState, handleChangeSelectedUser } = useContext(ModalContext);

    const handleViewClick = (user: User) => {
        handleChangeSelectedUser(user);
        handleChangeModalState();
    };

    return (
        <>
            <table className="hidden md:table w-full border-slate-400 border-2">
                <thead className="bg-slate-300">
                    <tr>
                        <th className="p-2 border-2 border-slate-400">Name</th>
                        <th className="p-2 border-2 border-slate-400">Gender</th>
                        <th className="p-2 border-2 border-slate-400">Birth</th>
                        <th className="p-2 border-2 border-slate-400">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((user: User) => (
                        <UsersDetails key={user.email} user={user} />
                    ))}
                </tbody>
            </table>

            <div className="grid grid-cols-1 gap-4 md:hidden">
                {searchResults.map((user: User) => (
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center text-sm">
                            <div className="space-y-2">
                                <div>
                                    <span className="font-bold">Name</span>
                                </div>
                                <div>
                                    <span className="font-bold">Gender</span>
                                </div>
                                <div>
                                    <span className="font-bold">Birth</span>
                                </div>
                                <div>
                                    <span className="font-bold">Action</span>
                                </div>
                            </div>
                            <div className="space-y-2 flex flex-col items-end">
                                <div>
                                    <span className="text-slate-700">
                                        {user.name.first} {user.name.last}
                                    </span>
                                </div>
                                <div className="text-slate-700">
                                    <span>{user.gender}</span>
                                </div>
                                <div className="text-slate-700">
                                    <span>{user.registered.date.substring(0, 10)}</span>
                                </div>
                                <button
                                    onClick={() => handleViewClick(user)}
                                    className="bg-slate-500 text-white w-16 p-1 rounded-md"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
