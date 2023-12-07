import { FirstAidKit, User } from '@phosphor-icons/react';

export const Header = () => {
    return (
        <header className="flex px-10 justify-between items-center h-20 bg-white">
            <h1 className="text-xl text-slate-900 flex items-center gap-2 font-bold">
                <FirstAidKit size={28} />
                Pharma Inc
            </h1>

            <div className="w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center">
                <User className="text-slate-800" size={32} />
            </div>
        </header>
    );
};
