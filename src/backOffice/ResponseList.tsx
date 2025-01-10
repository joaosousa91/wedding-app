import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {useEffect, useState} from "react";

const client = generateClient<Schema>();

function ResponseList(){

    //Define Response list
    const [responses, setResponses] = useState<Schema["WeddingInviteResponse"]["type"][]>([]);

    //Get Responses
    const fetchResponses = async () => {
        const { data: items, errors } = await client.models.WeddingInviteResponse.list();
        setResponses(items);
    }

    useEffect( () => {
        fetchResponses();
    }, []);

    var cont = 0;

    return <>
        <p>Lista de Respostas</p>
        <br/>
        <ul>
            {responses.map(({id, name, phoneNumber, isPlusOne}) => (
                <li key={id}>{cont+=1}{name}{phoneNumber}{isPlusOne}</li>
            ))}
        </ul>
    </>
}

export default ResponseList;