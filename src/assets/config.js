const permissions = [
    {
        id: 1,
        name: "Show Blogs",
        disable: false
    },
    {
        id: 2,
        name: "Add Blog",
        disable: false
    },
    {
        id: 3,
        name: "Update Blog",
        disable: false
    },
    {
        id: 4,
        name: "Add Charity",
        disable: false
    },
    {
        id: 5,
        name: "Update Charity",
        disable: false
    },
    {
        id: 6,
        name: "Change Permission",
        disable: false
    }
];

const roles = [
    {
        id: 1,
        name: "guest",
        permissions: permissions[0]
    },
    {
        id: 2,
        name: "user",
        permissions: [permissions[0], permissions[1], permissions[2], permissions[3]]
    },
    {
        id: 3,
        name: "admin",
        permissions: [permissions[0], permissions[1], permissions[2], permissions[3], permissions[4], permissions[5]]
    },
    {
        id: 4,
        name: "charity",
        permissions: [permissions[0], permissions[1], permissions[2], permissions[3], permissions[4]]
    },
];

const users = [
    {
        username: "admin123",
        password: "admin",
        role: roles[2]
    },
    {
        username: "user123",
        password: "user",
        role: roles[1] //roles
    },
    {
        username: "charity123",
        password: "charity",
        role: roles[3]
    }
];

const charity = {
    firstname: '',
    lastname: '',
    country: '',
    paymentmode: '',
    amount: 0,
};

export {
    permissions,
    roles,
    users,
    charity
};

