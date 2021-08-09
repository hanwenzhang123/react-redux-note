semantically and from a "clean HTML structure" perspective, having below nested modal is not ideal.
it is an overlay to the entire page after all (that is similar for side-drawers, other dialogs, etc.)

//origin
  return (
    <React.Fragment>
      <MyModal />
      <MyInputForm />
    </React.Fragment>
  );

//real DOM
<Section>
  <h2>Some Other Content</h2>
  <div class="my-modal">
    <h2>A Modal Title!</h2>
  </div>
  <form>
      <label>Username</label>
      <input type="text" />
  </form>
</Section>

It is a bit like styling a <div> like a <button> and adding an event listener to it
//it will work but not a goood practice
<div onClick={clickHandler}>click me, it is a bad button</div>

//portal
//we can use portal to keep writing our components the way we want
//but to still render this differently, render the modal HTML content somewhere else than it would normally go to.


