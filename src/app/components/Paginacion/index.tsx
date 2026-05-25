import "@/app/components/Paginacion/style.css"

const Paginacion = ({ next, prev, page, setPage, totalPages }: {
    next: boolean,
    prev: boolean,
    page: number,
    setPage: (page: number) => void,
    totalPages: number
}) => {

    const firstPages = [1, 2, 3].filter((p) => p <= totalPages);
    const lastPages = [totalPages - 2, totalPages - 1, totalPages].filter((p) => p >= 1);

    return (
        <div className="paginacion">
            {firstPages.map((p) => (
                <button
                    key={p}
                    onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}
            {prev && (
                <button onClick={() => setPage(page - 1)}>{"<"}</button>
            )}
            <button >{page}</button>
            {next && (
                <button onClick={() => setPage(page + 1)}>{">"}</button>
            )}

            {lastPages.map((p) => (
                <button
                    key={p}
                    onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};

export default Paginacion;