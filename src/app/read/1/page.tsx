import './page.css';

export default function Home() {
  return (
    <section className="tabs-root-section">
      <div className="tabs-container">
        <div className="tabs">
          <input type="radio" id="tab1" name="tab" defaultChecked />
          <label htmlFor="tab1">Tab1</label>
          <input type="radio" id="tab2" name="tab" />
          <label htmlFor="tab2">Tab2</label>
          <input type="radio" id="tab3" name="tab" />
          <label htmlFor="tab3">Tab3</label>
          <div className="tc c1">Content for Tab1</div>
          <div className="tc c2">Content for Tab2</div>
          <div className="tc c3">Content for Tab3</div>
        </div>
      </div>
    </section>
  );
}
