import './style.scss';
import '../../../style/font.css';
import { FC } from "react";
import { ErrorResponse, useRouteError, isRouteErrorResponse } from "react-router-dom";

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