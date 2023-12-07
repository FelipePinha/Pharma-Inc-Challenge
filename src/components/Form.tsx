import { MagnifyingGlass } from '@phosphor-icons/react';
import { FormEvent, useContext } from 'react';
import { SearchContext } from '../contexts/FilterContext';

export const Form = () => {
    const { handleChangeSearch } = useContext(SearchContext);

    const PreventFormSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-4xl mx-auto my-16">
            <p className="text-md text-slate-500 text-center font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe omnis asperiores
                veniam optio ea pariatur eligendi nulla aperiam autem ratione consequatur.
            </p>
            <form onSubmit={PreventFormSubmit}>
                <div className="relative w-full my-5 px-2">
                    <input
                        className="w-full p-2 rounded-md border-2 outline-slate-300"
                        type="text"
                        placeholder="Searching"
                        onChange={handleChangeSearch}
                    />
                    <button
                        className="border-none bg-transparent absolute top-3 right-5"
                        type="submit"
                    >
                        <MagnifyingGlass className="text-slate-500 text-xl" />
                    </button>
                </div>
            </form>
        </div>
    );
};
