import DirectControlVersion from './directControlVersion';
import NaiveVersion from './naiveVersion';
import './page.css';
import UseOptVersion from './useOptVersion';

export default function Home() {
  return (
    <section className="like-button-wrapper">
      <NaiveVersion />
      <DirectControlVersion />
      <UseOptVersion />
    </section>
  );
}
