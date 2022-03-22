import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;