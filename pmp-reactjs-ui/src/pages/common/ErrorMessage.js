import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import cancelIcon from '../../svg/cancel_icon.svg';

function ErrorMessage ({errorCode, errorMessage, clickOnCancel}) {
    const { t } = useTranslation();
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        if (errorCode) {
            const serverErrors = t('serverError', { returnObjects: true });
            if(serverErrors[errorCode]) {
                setErrorMsg(serverErrors[errorCode]);
            } else {
                setErrorMsg(errorMessage)
            }
        } else {
            setErrorMsg(errorMessage);
        }
    }, [t, errorCode, errorMessage]);

    return (
        <>
            <div>
                <p className=" text-sm font-semibold text-white break-words font-inter">
                    {errorMsg}
                </p>
            </div>
            <div className="mr-3 ml-5">
                <img src={cancelIcon} alt="" onClick={clickOnCancel}></img>
            </div>
        </>
    );
}

export default ErrorMessage;