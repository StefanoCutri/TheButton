
export const fetchUsers = (numberOfUsers) => { 
    return fetch(
        `https://randomuser.me/api/?results=${numberOfUsers}`
    ).then(data => data.json())
};

