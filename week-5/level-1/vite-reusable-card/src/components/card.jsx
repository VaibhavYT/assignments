/* eslint-disable react/prop-types */
export const BusinessCard = ({
  name,
  description,
  int1,
  int2,
  int3,
  linkedin,
  twitter,
}) => {
  return (
    <div className="main">
      <h1 className="nameHeading">{name}</h1>
      <p className="desc">{description}</p>
      <h2>Interest</h2>
      <div>
        <div>{int1}</div>
        <div>{int2}</div>
        <div>{int3}</div>
      </div>
      <div>
        <a href={linkedin}>LinkedIn</a>
        <a href={twitter}>Twitter</a>
      </div>
    </div>
  );
};
