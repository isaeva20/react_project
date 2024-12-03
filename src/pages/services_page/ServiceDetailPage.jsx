import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import {Button} from '@consta/uikit/Button'
import { Text } from '@consta/uikit/Text'

const ServiceDetailPage = () => {

    const {id} = useParams();

    const [serviceId, setServiceId] = useState(id);
    const [service, setService] = useState(null);

    const [count, setCount] = useState(0);
    const [int, setInt] = useState(0);

    useEffect(() => {
        let isNeedUpdate = true;
        fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${id}`, {method: 'GET'})
            .then((response) => response.json())
            .then((serv) => isNeedUpdate && setService(serv));
        return () => isNeedUpdate = false },
        [serviceId]
    );

    return(
        <div>
            <Button
                    onClick={() => setInt((prev) => prev+1)}
                    label="Следующая услуга"/>
            <Text>
                {service && service.name}
            </Text>
            <Text>
                {service && service.description}
            </Text>
       </div>
    )
}

export default ServiceDetailPage;