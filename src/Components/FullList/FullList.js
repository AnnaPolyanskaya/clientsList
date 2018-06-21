import React from 'react';
import FullListItem from './FullListItem';


const FullList = ({id, clients}) => {
        return (<FullListItem
            id = {id}
            firstName = {clients[id].general.firstName}
            lastName = {clients[id].general.lastName}
            avatar = {clients[id].general.avatar}
            company = {clients[id].job.company}
            title = {clients[id].job.title}
            email = {clients[id].contact.email}
            phone = {clients[id].contact.phone}
            street = {clients[id].address.street}
            city = {clients[id].address.city}
            zipCode = {clients[id].address.zipCode}
            country = {clients[id].address.country}

        />)
 }
    

export default FullList;