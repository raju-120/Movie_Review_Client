import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className="card w-full mb-2 bg-base-100 shadow-xl text-gray-100 dark:text-gray-100">
                <div className="card-body">
                    <h2 className="text-left text-xl">Difference between SQL and NoSQL?</h2>
                    <p className='text-left mt-2'>Ans: <span style={{color: 'orange'}}>SQL</span>, which stands for “Structured Query Language,” is the programming language that's been widely used in managing data in relational database management systems (RDBMS) since the 1970s. In the early years, when storage was expensive, SQL databases focused on reducing data duplication.
                    Fast-forward to today, and SQL is still widely used for querying relational databases, where data is stored in rows and tables that are linked in various ways. One table record may link to one other or to many others, or many table records may be related to many records in another table.
                    <br /> And <span style={{color: 'orange'}}>NoSQL</span> is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data. The term “NoSQL” was not coined until the early 2000s. It doesn't mean the systems don't use SQL, as NoSQL databases do sometimes support some SQL commands. More accurately, “NoSQL” is sometimes defined as “not only SQL.”</p>
                </div>
            </div>
            <div className="card w-full mb-2 bg-base-100 shadow-xl text-gray-100 dark:text-gray-100">
                <div className="card-body">
                    <h2 className="text-left text-xl">What is JWT, and how does it work?</h2>
                    <p className='text-left mt-2'><span className='text-info'>Ans:</span> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. 
                    By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                    <br /> <br /> 1. User sign-in using username and password.
                    <br /> 2.The authentication server verifies the credentials and issues a JWT signed using a private key.
                    <br /> 3.Moving forward, the client will use the JWT to access protected resources by passing the JWT in the HTTP Authorization header.
                    <br /> 4.The resource server then verifies the authenticity of the token using the public key.
                    <br /> 5.The Identity Provider generates a JWT certifying user identity, and the resource server decodes and verifies the authenticity of the token using the public key.   <br /> 
                    <br /> Since the tokens are used for authorization and authentication in future requests and API calls great care must be taken to prevent security issues. These tokens shouldn't be stored in publicly accessible areas like the browser’s local storage or cookies. In case there are no other choices, then the payload should be encrypted.</p>
                </div>
            </div>
            <div className="card w-full mb-2 bg-base-100 shadow-xl text-gray-100 dark:text-gray-100">
                <div className="card-body">
                    <h2 className="text-left text-xl">What is the difference between javascript and NodeJS?</h2>
                    <p className='text-left mt-2'>Ans: <span style={{color: 'orange'}}>1. NodeJS : </span>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 
                    <br /><span style={{color: 'orange'}}> 2. JavaScript : </span>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
            </div>
            <div className="card w-full mb-2 bg-base-100 shadow-xl text-gray-100 dark:text-gray-100">
                <div className="card-body">
                    <h2 className="text-left text-xl">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='text-left mt-2'>Ans: <span style={{color: 'orange'}}>1. NodeJS : </span>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                    <br />The event-driven model is very efficient and allows NodeJS to handle thousands of concurrent requests with ease.
                    Node.js uses two concepts <br />
                    1. Non-blocking I/O <br />
                    2. Asynchronous </p> <br />
                    Whenever a client sends a request the single thread will send that request to someone else.The current thread will not be busy working with that request.There are workers working for the server.The server sends the request to the worker, the worker further sends it to the other server and waits for the response.In the meantime if there is another request the thread will send it to another worker and the worker will wait for the response from the another server.
                    In this way the single thread will always be available to take the requests from the client. It will not block the requests.
                </div>
            </div>
        </div>
    );
};

export default Blog;