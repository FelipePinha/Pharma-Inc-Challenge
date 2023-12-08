import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface PaginationProps {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ page, setPage }: PaginationProps) => {
    const handleClickPageNumber = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const { page } = e.currentTarget.dataset;

        if (page) {
            setPage(parseInt(page));
            return;
        }
    };

    const handleLeftArrowClick = () => {
        setPage(state => {
            if (state === 1) return state;

            return state - 1;
        });
    };

    const handleRightArrowClick = () => {
        setPage(state => {
            if (state === 5) return state;

            return state + 1;
        });
    };

    return (
        <section className="max-w-4xl mx-auto py-5">
            <div className="flex gap-5 justify-center items-center">
                <button onClick={handleLeftArrowClick}>
                    <CaretLeft size={26} />
                </button>
                <div
                    onClick={handleClickPageNumber}
                    data-page="1"
                    className={`border-2 border-slate-400 ${
                        page === 1 ? 'bg-slate-400' : ''
                    } rounded-md cursor-pointer p-1 w-8 text-center`}
                >
                    <span>1</span>
                </div>
                <div
                    onClick={handleClickPageNumber}
                    data-page="2"
                    className={`border-2 border-slate-400 ${
                        page === 2 ? 'bg-slate-400' : ''
                    } rounded-md cursor-pointer p-1 w-8 text-center`}
                >
                    <span>2</span>
                </div>
                <div
                    onClick={handleClickPageNumber}
                    data-page="3"
                    className={`border-2 border-slate-400 ${
                        page === 3 ? 'bg-slate-400' : ''
                    } rounded-md cursor-pointer p-1 w-8 text-center`}
                >
                    <span>3</span>
                </div>
                <div
                    onClick={handleClickPageNumber}
                    data-page="4"
                    className={`border-2 border-slate-400 ${
                        page === 4 ? 'bg-slate-400' : ''
                    } rounded-md cursor-pointer p-1 w-8 text-center`}
                >
                    <span>4</span>
                </div>
                <div
                    onClick={handleClickPageNumber}
                    data-page="5"
                    className={`border-2 border-slate-400 ${
                        page === 5 ? 'bg-slate-400' : ''
                    } rounded-md cursor-pointer p-1 w-8 text-center`}
                >
                    <span>5</span>
                </div>
                <button onClick={handleRightArrowClick}>
                    <CaretRight size={26} />
                </button>
            </div>
        </section>
    );
};
