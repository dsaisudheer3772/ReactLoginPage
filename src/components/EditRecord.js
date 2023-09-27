import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import Inputtext from './utils/components/Inputtext';
import {getUserData_URL,saveUserData_URL} from './utils/Endpoint';
import {getData,postData,updateData} from './utils/Helper';
import Button from './utils/components/Button';


export default function EditRecord() {
    const {id}=useParams();
    const navigate=useNavigate();

    const [record,setRecord]=useState({
        email: "",
        password: "",
        phonenumber: "",
        lattitude: "",
        longtitude: ""

    });
    useEffect(() => {
        // Check if 'recordId' is provided (edit mode) and fetch data if needed
        if(id) {
            // Fetch the record data based on 'recordId' and set it in the 'record' state
            // You need to implement this data fetching logic
            const url=`${getUserData_URL()}/${id}`;
            getData(url).then((data) => {
                setRecord(data); // Assuming 'data' contains the record details
            })
                .catch((error) => {
                    console.error('Error fetching record data: ',error);
                });
        }
    },[id]);
    const onSave=async (e) => {
        var regesterid=0,response={};
        if(id) {
            regesterid=Number(id);
        }
        const preparedJSONData={
            regesterid: regesterid,
            email: record.email,
            phonenumber: record.phonenumber,
            password: record.password,
            lattitude: record.lattitude,
            longtitude: record.longtitude
        }
        try {
            var url=saveUserData_URL();
            if(id) {
                url=url+'/'+id;
                response=await updateData(url,preparedJSONData)

            } else {
                response=await postData(url,preparedJSONData)
            }
            if(response.ok) {
                navigate("/dashboard");
                console.log('Post Request successful');
            } else {
                console.log('Post Request failed');
            }
        } catch(ex) {
            console.log('Any error occurrs from server');
        }
    }
    const handleChange=(e) => {
        const {name,value}=e.target;
        setRecord({...record,[name]: value});
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='w-25 m-5 p-5 card'>
                <div className='d-flex flex-column py-1'>
                    <span className='py-2'>Email</span>
                    <Inputtext
                        className="form-control"
                        type="text"
                        name="email"
                        text={record.email}
                        placeholder="Enter your Email "
                        handleChangeText={handleChange}
                    />
                </div>
                <div className='d-flex flex-column py-1'>
                    <span className='py-2'>phonenumber</span>
                    <Inputtext
                        className="form-control"
                        type="text"
                        name="phonenumber"
                        text={record?.phonenumber}
                        placeholder="Enter your Phone Number"
                        handleChangeText={handleChange}
                    />
                </div>
                <div className='d-flex flex-column py-1'>
                    <span className='py-2'>PassWord</span>
                    <Inputtext
                        className="form-control"
                        type="password"
                        name="password"
                        text={record.password}
                        placeholder="Enter your Password"
                        handleChangeText={handleChange}
                    />
                </div>
                <div className='d-flex flex-column py-1'>
                    <span className='py-2'>Lattitude</span>
                    <Inputtext
                        className="form-control"
                        type="text"
                        name="lattitude"
                        text={record.lattitude}
                        placeholder="Enter your Lattitude"
                        handleChangeText={handleChange}
                    />
                </div>
                <div className='d-flex flex-column py-1'>
                    <span className='py-2'>Longtitude</span>
                    <Inputtext
                        className="form-control"
                        type="text"
                        name="longtitude"
                        text={record.longtitude}
                        placeholder="Enter your Longtitude"
                        handleChangeText={handleChange}
                    />
                </div>
                <div className='d-flex justify-content-between align-items-center flex-row pt-4'>
                    <Button className="btn-sm btn-primary" type="submit" text="Save" onClick={onSave} />
                </div>
            </div>
        </div>
    )
}
