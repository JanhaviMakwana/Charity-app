import { Route, Switch } from 'react-router-dom';
import Admin from '../components/Users/Admin';
import User from '../components/Users/User';
import Charity from '../components/Users/Charity';
import LoginPage from '../components/auth/Login';
import ShowBlogs from '../components/Blogs/Blogs';
import UpdateBlog from '../components/Blogs/UpdateBlog/UpdateBlog';
import AddBlog from '../components/Blogs/AddBlog/AddBlog';
import AddCharity from '../components/Charity/AddCharity/AddCharity';
import ShowCharity from '../components/Charity/ShowCharity/ShowCharity';
import UpdateCharity from '../components/Charity/UpdateCharity/UpdateCharity';
import * as routes from './routesConstants';

const finalRoutes = () => {
    return (
        <Switch>
            <Route path={routes.LOGIN} exact component={LoginPage} />

            <Route path={routes.SHOW_BLOGS} exact component={ShowBlogs} />
            <Route path={routes.SHOW_BLOGS_ADMIN} exact component={ShowBlogs} />
            <Route path={routes.SHOW_BLOGS_USER} exact component={ShowBlogs} />
            <Route path={routes.SHOW_BLOGS_CHARITY} exact component={ShowBlogs} />

            <Route path={routes.ADD_BLOG_ADMIN} exact component={AddBlog} />
            <Route path={routes.ADD_BLOG_CHARITY} exact component={AddBlog} />
            <Route path={routes.ADD_BLOG_USER} exact component={AddBlog} />

            <Route path={routes.ADMIN_PAGE} exact component={Admin} />
            <Route path={routes.CHARITY_PAGE} exact component={Charity} />
            <Route path={routes.USER_PAGE} exact component={User} />

            <Route path={routes.UPDATE_BLOG_USER} exact component={UpdateBlog} />
            <Route path={routes.UPDATE_BLOG_ADMIN} exact component={UpdateBlog} />
            <Route path={routes.UPDATE_BLOG_CHARITY} exact component={UpdateBlog} />

            <Route path={routes.ADD_CHARITY_USER} exact component={AddCharity} />

            <Route path={routes.UPDATE_CHARITY} exact component={UpdateCharity} />
            <Route path={routes.SHOW_CHARITY} exact component={ShowCharity} />
        </Switch>

    );
};

export default finalRoutes;