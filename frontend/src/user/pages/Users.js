import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Mikołaj Kujawa',
        image: 'https://filing.pl/wp-content/uploads/2014/06/filing_images_ddad50a54790.png',
        places: 3
    }]

    return <UsersList items={USERS}/>
};

export default Users;