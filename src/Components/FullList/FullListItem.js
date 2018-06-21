import React from 'react';
import './FullList.css';

const FullListItem = (
    {id, firstName, lastName, avatar, company, title, email, phone, street, city, zipCode, country}
) => {
    return(
        <div>
        <section className="tl pa3 ">
            <article className="hide-child relative  center client-box">
                <img src={avatar} className="db avatar" alt="ava" />
                <div className="pa2" >
                <p className="f2 db tc  white" >{firstName} {lastName}</p>
                <div>
                    <h3 className="f4 white mv1">Job information</h3>
                    <p className="f6 white mv1"><b>Company: </b>{company}</p>
                    <p className="f6 white mv1"><b>Info: </b>{title}</p>
                </div>
                <div>
                    <h3 className="f4 white mv1">Contact information</h3>
                    <p className="f6 white mv1"><b>Phone: </b>{phone}</p>
                    <p className="f6 white mv1"><b>Email: </b>{email}</p>
                </div>         
                <div>
                    <h3 className="f4 white mv1">Address information</h3>
                    <p className="f6 white mv1"><b>Street: </b>{street}</p>
                    <p className="f6 white mv1"><b>City: </b>{city}</p>
                    <p className="f6 white mv1"><b>Zip-code: </b>{zipCode}</p>
                    <p className="f6 white mv1"><b>Country: </b>{country}</p>
                </div>      
                </div>
            </article>
        </section>
        </div>   
    )
}
export default FullListItem;