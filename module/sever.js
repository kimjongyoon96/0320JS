import http from 'http';

const server = http.createServer(function(a,b){
  
  let body ="";
  body += "<!DOCTYPE html>";
  body =body +"<html>";
  body= body +"<head>";
  body= body +"<title>Node.js</title>";
  body= body +"</head>";
  body= body + "<body>";
  body= body + "<h1>Hello World</h1>";
  body= body + "<body>";
  body= body + "</html>";
  console.log(a,b);

  
  
  Response.statusCode= 200;


  Response.setHeader('content-Type','text/plain');
  Response.end('hello wolrd');
  console.log(a,b);


});