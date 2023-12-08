import { User, X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

export const Modal = () => {
    const { modalIsOpen, handleChangeModalState, selectedUser } = useContext(ModalContext);

    const { name, email, gender, registered, location } = selectedUser;
    const { first, last } = name;
    const { date } = registered;
    const {
        country,
        street: { name: streetName, number },
    } = location;

    const registeredDate = date.substring(0, 10);

    return (
        <div
            className={`w-screen h-screen fixed top-0 left-0 bg-slate-900/[.4] ${
                modalIsOpen ? 'flex' : 'hidden'
            } justify-center items-center`}
            onClick={handleChangeModalState}
        >
            <div
                onClick={e => e.stopPropagation()}
                className="relative w-[40%] p-5 text-center bg-white rounded-lg"
            >
                <div className="absolute top-[-20px] left-1/2 translate-x-[-50%] w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                    <User className="text-slate-800" size={38} />
                </div>
                <header className="mt-8 border-b-2 pb-2">
                    <h2 className="font-bold text-slate-900 text-lg">
                        {first} {last}
                    </h2>
                    <h3 className="text-slate-400 text-md">{email}</h3>
                    <h4 className="text-slate-400 text-sm">{country}</h4>
                    <h5 className="text-slate-400 text-xs">
                        {streetName}, {number}
                    </h5>
                </header>
                <section className="mt-5 mx-auto text-center">
                    <div className="mt-4  text-slate-600">
                        <strong>Gender</strong>
                        <p>{gender}</p>
                    </div>
                    <div className="mt-4  text-slate-600">
                        <strong>Birth</strong>
                        <p>{registeredDate}</p>
                    </div>
                    <div className="mt-4  text-slate-600">
                        <strong>Phone</strong>
                        <p>11981428501</p>
                    </div>
                </section>
                <div className="absolute top-3 right-3 text-slate-800 font-bold cursor-pointer">
                    <X onClick={handleChangeModalState} size={28} />
                </div>
            </div>
        </div>
    );
};
