import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    // console.log(location.pathname);


    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center">

            <div className="space-y-3">

                <p className="text-4xl uppercase italic text-red-600 font-semibold font-londrina">
                    {
                        error.status === 404 ? 'Page Not Found' : `${error.statusText}`
                    }
                </p>

                <p className="text-lg text-red-500 italic">{error.data}</p>
                <div>
                    <Link to='/'>
                        <button className="btn my-4 bg-slate-400 text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 font-bold text-base hover:bg-[#58932d] capitalize">Go to home</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;