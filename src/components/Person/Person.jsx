export const Person = ({ person }) => (
  <div>
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    <p className="Person__age">{person.age ? `I am ${person.age}` : ' '}</p>

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
