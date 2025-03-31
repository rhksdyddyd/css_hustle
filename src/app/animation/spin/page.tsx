import './page.css';

const numbers4 = Array.from({ length: 4 }, (_, i) => i + 1);
const numbers20 = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Home() {
  return (
    <section className="spin-wrapper">
      {numbers4.map(value => (
        <Source key={value} rotation={value} />
      ))}
    </section>
  );
}

interface Prop {
  rotation: number;
}

const Source = ({ rotation }: Prop) => {
  return (
    <div className="loader" style={{ '--r': rotation } as React.CSSProperties}>
      {numbers20.map(value => (
        <span
          key={value}
          style={{ '--i': value } as React.CSSProperties}
        ></span>
      ))}
    </div>
  );
};
