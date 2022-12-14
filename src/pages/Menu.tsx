import {MenuItem} from "../components/MenuItem";
import {removeToken} from "../utils/auth";
import {Navigate, useNavigate} from "react-router-dom";
import React from "react";

export const Menu = () => {
    const navigate = useNavigate();

    const exit = () => {
        removeToken();
        document.location.reload();
    }

    const navigateToPage = (page: string) => navigate(page)

    return (
        <div className='flex flex-col items-center h-screen'>
            <MenuItem name='Practice' top click={() => navigateToPage('practice')} />
            <MenuItem name='Online' />
            <MenuItem name='Inventory' />
            <MenuItem name='Settings' />
            <MenuItem name='Exit' click={exit}/>
        </div>
    );
}
