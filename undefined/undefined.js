function greetsUser(name) {
  if(typeof name === 'string') {
    console.log('hello', name);
  } else if(typeof name === 'undefined') {
    console.log('name is undefined');
  }
}

greetsUser();
