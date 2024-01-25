import {observer} from 'mobx-react';
//import dataStore from '../../store/store.js';
import datastore from '../Store/store.js'


const ServiceList = (observer(() =>{
    return(
        <>
        {dataStore.services.map((service,index) =>{
            
            return<div key={index}>{service.name}</div>
        })}
        </>
    );
}));

export default ServiceList;

