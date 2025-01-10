import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../amplify/data/resource';

// Client creation
const client = generateClient<Schema>();

const WeddingInviteForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [isPlusOne, setIsPlusOne] = useState<boolean>(false);
    const [isAttending, setIsAttending] = useState<boolean>(true);
    const [foodRestrictions, setFoodRestrictions] = useState<string>('');
    const [musicSuggestions, setMusicSuggestions] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const rsvpData = {
            name,
            phoneNumber,
            isPlusOne,
            isAttending,
            foodRestrictions,
            musicSuggestions,
        };

        console.log("Creating RSVP with this data:", rsvpData);

        try {
            // API Call to create response
            await client.models.WeddingInviteResponse.create(rsvpData);
            console.log("RSVP successfully created!");
            setSuccessMessage('RSVP criado com sucesso!');
            setError(null); // clears any error
        } catch (err) {
            setError('Erro ao criar RSVP. Tente novamente.');
            setSuccessMessage(''); // clears success message
            console.error("Erro ao criar RSVP:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            Nome:
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br/>
            NºTelefone:
            <input
                type="tel"
                placeholder="Número de Telefone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br/>
            <label>
                Acompanhante:
                <input
                    type="checkbox"
                    checked={isPlusOne}
                    onChange={() => setIsPlusOne(!isPlusOne)}
                />
            </label>
            <br/>
            Restrições Alimentares:
            <input
                type="text"
                value={foodRestrictions}
                onChange={(e) => setFoodRestrictions(e.target.value)}
            />
            <br/>
            Sugestões de Música:
            <input
                type="text"
                value={musicSuggestions}
                onChange={(e) => setMusicSuggestions(e.target.value)}
            />
            <br/>
            <button type="submit">Enviar</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
        </form>
    );
};

export default WeddingInviteForm;