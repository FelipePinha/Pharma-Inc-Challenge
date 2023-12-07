import { User, X } from '@phosphor-icons/react';

export const Modal = () => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-900/[.4] flex justify-center items-center">
            <div className="relative w-[40%] p-5 text-center bg-white rounded-lg">
                <div className="absolute top-[-20px] left-1/2 translate-x-[-50%] w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                    <User className="text-slate-800" size={38} />
                </div>
                <header className="mt-8 border-b-2 pb-2">
                    <h2 className="font-bold text-slate-900 text-lg">Felipe Carvalho</h2>
                    <h3 className="text-slate-400 text-md">felipecar.dev@gmail.com</h3>
                    <h4 className="text-slate-400 text-sm">Brazil</h4>
                    <h5 className="text-slate-400 text-xs">Valwood Pkwy</h5>
                </header>
                <section className="mt-5 mx-auto text-center">
                    <div className="mt-4  text-slate-600">
                        <strong>Gender</strong>
                        <p>Male</p>
                    </div>
                    <div className="mt-4  text-slate-600">
                        <strong>Birth</strong>
                        <p>2000-04-06</p>
                    </div>
                    <div className="mt-4  text-slate-600">
                        <strong>Phone</strong>
                        <p>11981428501</p>
                    </div>
                </section>
                <div className="absolute top-3 right-3 text-slate-800 font-bold cursor-pointer">
                    <X size={28} />
                </div>
            </div>
        </div>
    );
};
