const http=require('http')
//creating a server
const server=http.createServer((req,res)=>{//request- incoming request from the client and ressponse-what we send back 2 parameters are objects
    if(req.url==='/')//If URL points to home page then we send the following request
    {
        res.end('Welcome to our home page');
   
    }
    if(req.url==='/about')
    {
        res.end('Here is the our short history');
   
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>Back Home</a>`)
    
}
)
server.listen(5000)//port our server will be listening to
//The server will keep listening in order to view the response opne localhost on port 5000 in browser