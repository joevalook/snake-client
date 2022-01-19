const net = require("net");
const {ip, port} = require("./constants")
const connect = function () {
  const conn = net.createConnection({
    host: ip,
    port: port, 
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', (data) => {
    console.log("connection established!");
    conn.write("Name: JOE");
    
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};