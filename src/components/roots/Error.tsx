import { FC } from "react";
import { ErrorResponse, useRouteError, isRouteErrorResponse } from "react-router-dom";
import '../../style/error-page.css';
import '../../style/font.css';

function Error(){
    const error = useRouteError();

    return (
        <>
            <div className="container">
                <div className="error-page">
                    <h1>Oops!</h1>
                    <p>
                        An unexpected error has occurred.
                    </p>
                    <p className="italic">
                        {(error as { statusText?: string })?.statusText}
                    </p>
                </div>
            </div>
        </>
    );
  }
  
export default Error;