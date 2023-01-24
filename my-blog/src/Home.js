import { useState } from "react";

const Home = () => {
    // let name = 'Mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('Sailor');
        setAge(22);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
     );
}
 
export default Home;