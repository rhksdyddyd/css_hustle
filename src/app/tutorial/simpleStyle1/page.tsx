import './page.css';

export default function Home() {
  return (
    <section className="block-root-section">
      <h1>HTML Elements</h1>
      <p>This is a styled paragraph.</p>
      <button>Click Me</button>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
      </ul>
      <input type="text" placeholder="Enter text"></input>
      <a href="#">This is a styled link</a>
    </section>
  );
}
