Handling Forms and User Input (good user experience)
working with value, validation and state
- what is complex about forms?
- handling input and forms with react
- tools for simplifications

What is so complex about forms?
forms and inputs can assume different states
- one or more inputs are invalid
  output input-specific error message & highlight problematic inputs
  ensure form can not be submitted / saved
- all inputs are valid
  allow form to be submitted / saved

When to validate? 
when should you check the user input?
- when form is submitted
  allows the user to enter a valid value before warning him/her
  avoid unnecessary warnings but maybe present feedback "too late"
- when an input is losing focus
  allows the user to enter a valid value before warning him/her
  very useful for untouched forms
- on every keystroke
  warns user before he/she had a chance of entering valid values
  if applied only on invalid input, has the potential of providing more direct feedback
  
