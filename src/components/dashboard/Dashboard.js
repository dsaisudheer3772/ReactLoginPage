import React from 'react'
import {deleteData,getData} from '../utils/Helper';
import {getUserData_URL} from '../utils/Endpoint';
import {Link} from 'react-router-dom';

export default function Dashboard() {
  const [userData,setuserData]=React.useState([]);
  React.useEffect(function() {
    _getData();
  },[]);
  async function _getData() {
    const url=getUserData_URL();
    const userData=await getData(url);
    setuserData(userData);
  }
  const deleteRecord=async (id) => {
    const url=getUserData_URL()+'/'+id;
    const response=await deleteData(url)
    if(response.ok) {
      console.log('Delete Request successful');
      _getData();
    } else {
      console.log('Delete Request failed');
    }

  }
  return (
    <div className='d-flex flex-column p-3'>
      <table className='w-100'>
        <tr>
          <th>Email</th>
          <th>PassWord</th>
          <th>PhoneNumber</th>
          <th>Lattitude</th>
          <th>Longtitude</th>
          <th className='d-flex justify-content-end'>
            <Link to='/create' className="btn-sm btn-primary mr-2">
              Create
            </Link>
          </th>
        </tr>
        {
          userData.map((item) => (
            <tr className='' data-regesterid={item?.regesterid}>
              <td>{item?.email}</td>
              <td>{item?.password}</td>
              <td>{item?.phonenumber}</td>
              <td>{item?.lattitude}</td>
              <td>{item?.longtitude}</td>
              <td>
                <div className='d-flex justify-content-between py-3'>
                  <Link to={`/edit/${item?.regesterid}`} className="link-success mr-2">
                    Edit
                  </Link>
                  <button onClick={() => deleteRecord(item?.regesterid)} data-id={item?.regesterid} class="link-success mr-2">Delete</button>
                </div>
              </td>
            </tr>
          ))
        }
      </table>

    </div>
  )
}
