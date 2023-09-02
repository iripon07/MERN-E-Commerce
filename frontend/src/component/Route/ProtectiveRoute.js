import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';

const ProtectiveRoute = (props) => {
    let {component: Component, ...rest} = props;
    const { loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <Fragment>
            {
                loading === false && (
                    <Route
                        {...rest}
                        render={(props) => {
                            if (isAuthenticated === false) {
                                return redirect("/login");
                            }
                            return <Component {...props} />
                        }}

                    />
                )
            }
        </Fragment>
    )
}

export default ProtectiveRoute