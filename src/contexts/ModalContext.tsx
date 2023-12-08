import { createContext, ReactNode, useState } from 'react';
import { User } from '../types/UserTypes';

interface ModalContextInterface {
    modalIsOpen: boolean;
    handleChangeModalState: () => void;
    selectedUser: User;
    handleChangeSelectedUser: (selected: User) => void;
}

const initialState: ModalContextInterface = {
    modalIsOpen: false,
    handleChangeModalState: () => undefined,
    selectedUser: {
        email: '',
        gender: '',
        name: {
            first: '',
            last: '',
        },
        registered: {
            date: '',
        },
        location: {
            street: {
                number: 0,
                name: '',
            },
            country: '',
        },
    },
    handleChangeSelectedUser: () => undefined,
};

export const ModalContext = createContext<ModalContextInterface>(initialState);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User>({
        email: '',
        gender: '',
        name: {
            first: '',
            last: '',
        },
        registered: {
            date: '',
        },
        location: {
            street: {
                number: 0,
                name: '',
            },
            country: '',
        },
    });

    const handleChangeModalState = () => {
        setModalIsOpen(state => !state);
    };

    const handleChangeSelectedUser = (selected: User) => {
        setSelectedUser(selected);
    };

    return (
        <ModalContext.Provider
            value={{ modalIsOpen, handleChangeModalState, selectedUser, handleChangeSelectedUser }}
        >
            {children}
        </ModalContext.Provider>
    );
};
