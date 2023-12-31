import DashboardIcon from "@material-ui/icons/Dashboard";
import ExistToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import React, { Fragment, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from "../../../actions/userAction";
import "./Header.css";
import { Backdrop } from "@material-ui/core";

const UserOptions = ({ user }) => {
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);

    const options = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <ExistToAppIcon />, name: "Logout", func: logoutUser },
    ]
    if (user.role === "admin") {
        options.unshift({
            icon: <DashboardIcon />,
            name: "Dashboard",
            func: dashboard,
        })
    }
    function dashboard() {
        navigate("/dashboard")
    }
    function orders() {
        navigate("/orders")
    }
    function account() {
        navigate("/account");
    }
    function logoutUser() {
        dispatch(logout())
        alert.success("Logout successfully");
    }

    return (
        <Fragment>
            <Backdrop open={open} style={{zIndex:"10"}}/>
            <SpeedDial
                ariaLabel='SpeedDial tooltip example'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{zIndex:"11"}}
                open={open}
                direction='down'
                className="speedDial"
                icon={
                    <img
                        className='speedDialIcon'
                        src={user.avatar.url ? user.avatar.url : "./Profile.png"}
                        alt='Profile'
                    />

                }
            >
                {
                    options.map((item) => (
                        <SpeedDialAction
                            key={item.name}
                            icon={item.icon}
                            tooltipTitle={item.name}
                            onClick={item.func}
                            tooltipOpen={window.innerWidth <= 600 ? true : false}
                        />
                    ))
                }
            </SpeedDial>

        </Fragment>
    )
}

export default UserOptions