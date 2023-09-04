import MailOutlineIcon from "@material-ui/icons/MailOutline";
import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, loading, message } = useSelector((state) => state.forgotPassword);
    const [email, setEmail] = useState("");
    const forgotPasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email)
        dispatch(forgotPassword(myForm));
    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors);
        }
        if (message) {
            alert.success(message);
        }

    }, [dispatch, alert, error, message])

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="Forgot Password" />
                    <div className="forgotPasswordContainer">
                        <div className="forgotPasswordBox">
                            <h2 className="forgotPasswordHeading">Update Profile</h2>

                            <form
                                className="forgotPasswordForm"
                                onSubmit={forgotPasswordSubmit}
                            >
                                <div className="forgotPasswordEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="send"
                                    className="forgotPasswordBtn"
                                />
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default ForgotPassword