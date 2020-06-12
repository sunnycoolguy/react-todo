This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# A React todo list app
This is a cool little app i made with create-react-app. It allows for dynamic behaviour such as adding,
deleting, and crossing off items off the list. An action bar also allows people to filter the list.

![Screenshot of the app]('./src/images/app-screenshot.png')

The state of the app includes a list of objects meant to represent todos, the value of the input form, and 
a flag for which items to show. The state lives in the TodoApp components and event handlers are passed down
to child components and elements to change state.