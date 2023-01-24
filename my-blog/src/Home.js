import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: "Weolcome Party!", body: 'lorem ipsum...', author: 'Sailor', id: 2 },
        { title: "Web dev top tips", body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
           <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete }/>
           <BlogList blogs={ blogs.filter((blog) => blog.author === 'Mario') } title="Mario's Blogs" />
        </div>
     );
}
 
export default Home;