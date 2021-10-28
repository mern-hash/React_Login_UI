import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from './UserHeader';

import {APIURL} from '../../Constant';

export default function Profile() {

  const [data, setData] = useState([]),
      params = useParams();

  useEffect(async () => {
    let response = await fetch(`${APIURL}/${params.id}`),
        { result } = await response.json();
    setData(result)
  }, []);

  return (
      <div>
        <UserHeader />
        <div className="col-lg-12">
          <div className="card shadow-sm profile">
            <div className="card-header bg-transparent border-0">
              <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Profile</h3>
            </div>
            <div className="card-body pt-0">
              <table className="table table-bordered">
                <tr>
                  <th width="30%">Name</th>
                  <td width="2%">:</td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <th width="30%">Email	</th>
                  <td width="2%">:</td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <th width="30%">UserType</th>
                  <td width="2%">:</td>
                  <td>{data.userType}</td>
                </tr>
                <tr>
                  <th width="30%">Gender</th>
                  <td width="2%">:</td>
                  <td>{data.gender}</td>
                </tr>
                <tr>
                  <th width="30%">Age</th>
                  <td width="2%">:</td>
                  <td>{data.age}</td>
                </tr>
                <tr>
                  <th width="30%">Phone</th>
                  <td width="2%">:</td>
                  <td>{data.phone}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

  )
}


