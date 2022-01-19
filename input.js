let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  
};
const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.stdout.write('\n');
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up")
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 'u') {
    connection.write("Say: ur too big!")
  }
  if (key === 'i') {
    connection.write("Say: ima eat u")
  }
  if (key === 'o') {
    connection.write("Say: close one")
  }
  if (key === 'p') {
    connection.write("Say: i win!")
  }
}

module.exports = {setupInput};