import React from "react";
import { useParams } from "react-router-dom";

import './PlaceForm.css';
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/util/validators";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous place in the world!',
        imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, Indie',
        location: {
            lat: 30.0876099,
            lng: 66.3391209
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous place in the world!',
        imageUrl: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, Indie',
        location: {
            lat: 30.0876099,
            lng: 66.3391209
        },
        creator: 'u2'
    }
]

const UptadePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if(!identifiedPlace) {
        return(
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        );
    }

    return(
        <form className="place-form">
            <Input 
                id="title" 
                element="input" 
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input 
                id="description" 
                element="textarea" 
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description"
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    )
}

export default UptadePlace