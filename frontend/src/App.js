
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';

const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/category/:id' component={Category} />
                <Route path='/blog/:id' component={BlogDetail} />
            </Routes>
        </Layout>
    </Router>
);

export default App;