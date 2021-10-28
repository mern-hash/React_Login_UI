import React, { useState } from 'react';
import UserHeader from './UserHeader';


export default function UserDashboard() {

    return (
        <div>
            <UserHeader />
            <div className="container pt-5">
                <div className="row myrow d-flex justify-content-center align-items-center;">
                    <div className="col-lg-8 col-sm-12 formwrapper" >
                        <h1 className="pt-3 pb-3 text-center">Welcome to User Dashboard</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
