//original
function createNotes(noteItem) {  //for a single note to pass in
  return <Note 
    key = {noteItem.key}
    title = {noteItem.title}
    content = {noteItem.content}
  />
} 

//combined + arrow function
function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => <Note  //combine + arrow
    key = {noteItem.key}
    title = {noteItem.title}
    content = {noteItem.content}
  />
      )}
      <Footer />
    </div>
  );
