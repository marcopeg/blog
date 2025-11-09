import { useState } from 'react';
import './Welcome.css';

export default function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className="welcome">
      <h1>Welcome to My Blog</h1>
      <p className="subtitle">Built with Astro and React</p>
      
      <div className="card">
        <h2>Interactive React Component</h2>
        <p>This counter demonstrates React working with Astro:</p>
        <button onClick={() => setCount(count + 1)}>
          Count is: {count}
        </button>
      </div>

      <div className="info">
        <p>
          This blog is built with <strong>Astro</strong> and <strong>React</strong>, 
          and deployed automatically to GitHub Pages.
        </p>
      </div>
    </div>
  );
}
