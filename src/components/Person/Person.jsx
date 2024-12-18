export const Person = ({ person }) => (
  <div>
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age && <p className="Person__age">{`My name is ${person.age}`}</p>}

    <p className="Person__partner">
      {person.sex === 'm' && person.isMarried
        ? `My wife is ${person.partnerName}`
        : ''}
      {person.sex === 'f' && person.isMarried
        ? `My husband is ${person.partnerName}`
        : ''}
    </p>
  </div>
);
