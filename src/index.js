import ReactDOM from 'react-dom';
import Home from './view/Home/Home';
import About from './view/About/About';
import Contact from './view/Contact/Contact';
import Login from './view/Login/Login';




const root = ReactDOM.createRoot(document.getElementById('root'));

const path = window.location.pathname;

if(path === "/"){
    root.render(<Home />);
}

else if(path === "/about"){
    root.render(<About />)
}

else if(path === "/contact"){
    root.render(<Contact />)
}

else if(path === "/login"){
    root.render(<Login />)
}

else {
    root.render(<not found />)
}



