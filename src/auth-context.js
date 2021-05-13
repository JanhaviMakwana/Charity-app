import React, { useState, createContext } from 'react';
import { roles } from './assets/config';
import blogData from './assets/blogs';

const CharityContext = createContext();

const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState('guest');
    const [permissions, setPermissions] = useState(roles[0].permissions);
    const [blogs, setBlogs] = useState(blogData);
    const [charity, setCharity] = useState();
    return (
        <CharityContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                userType,
                setUserType,
                permissions,
                setPermissions,
                blogs,
                setBlogs,
                charity,
                setCharity
            }}>
            {props.children}
        </CharityContext.Provider>
    );
};

const withAuth = (Child) => (props) => (
    <CharityContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </CharityContext.Consumer>
);

export { AuthProvider, withAuth };

