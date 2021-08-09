//unnecessary divs
In bigger apps, you can easily end up with tons of unneccesary <div>s or other elements
which add no semantic meaning or structure to the page but are only there because of React/JSX requirement
  

//solution to "<div> Soup"
Create a new folder Helpers with a new Wrapper.js 
  - an empty component
no other meaning but a wrapping element, just to fit JSX requirement

//Wrapper.js
const Wrapper = props => {
  return props.children;
};

export default Wrapper;

//AddUser.js
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
