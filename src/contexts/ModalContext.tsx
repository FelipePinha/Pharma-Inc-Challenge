import { createContext, ReactNode, useState } from 'react';

interface ModalContextInterface {
    modalIsOpen: boolean;
    handleChangeModalState: () => void;
}

const initialState: ModalContextInterface = {
    modalIsOpen: false,
    handleChangeModalState: () => undefined,
};

export const ModalContext = createContext<ModalContextInterface>(initialState);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleChangeModalState = () => {
        setModalIsOpen(state => !state);
    };

    return (
        <ModalContext.Provider value={{ modalIsOpen, handleChangeModalState }}>
            {children}
        </ModalContext.Provider>
    );
};
