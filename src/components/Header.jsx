function Header({ user }) {
  console.log({ user });
  return (
    <>
      <h2> Header file component: </h2>;
      {user.map((d, index) => {
        return (
          <h3 id={index}>
            Name: {d.name} Age: {d.age} Email: {d.email}
          </h3>
        );
      })}
      ;
    </>
  );
}

export default Header;
