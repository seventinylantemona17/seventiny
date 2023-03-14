function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Seventiny',
    lastName: 'Lantemona'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!  </h1>
  );

function Tiga() {
    return (
        element
    );

}

export default Tiga;