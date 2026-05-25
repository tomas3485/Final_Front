import "@/app/components/Paginacion/style.css"

const Paginacion = ({next,prev,page,setPage}:{
    next:boolean,
    prev:boolean,
    page:number,
    setPage:(page:number)=>void
})=>{
    return(
        <div className="paginacion">
            {prev && <div className="<>" onClick={()=>{
                setPage(page-1)
            }}><p>{"<"}</p></div>}
            <h1>{page}</h1>
            {next && <div className="<>" onClick={()=>{
                setPage(page+1)
            }}><p>{">"}</p></div>}
        </div>
    )
}

export default Paginacion;
