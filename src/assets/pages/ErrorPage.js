import { Link } from "react-router-dom"

function ErrorPage(){
    return(
        <>
        <div className="flex flex-col text-center m-8 text-3xl font-medium">Произошла ошибка</div>
        <div className="flex flex-col text-grey text-center text-xl font-light">Not Found</div>
        <Link className=" flex flex-col font-regular text-xl m-20 text-center" to ="/">Вернуться на главную</Link>
        </>
    
    )
}

export default ErrorPage;