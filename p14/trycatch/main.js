function runCode() {
  const code = prompt('please enter js code');
  try {
    eval(code);
  } catch (err) {
    alert(err);
  }
}
