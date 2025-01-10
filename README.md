# Unhandled Promise Rejection in Express.js App

This repository demonstrates a common error in Node.js Express applications: unhandled promise rejections.  The `bug.js` file contains code that simulates an asynchronous operation that may throw an error.  This error is not handled correctly, leading to a crash.  The `bugSolution.js` file provides a solution to handle this error gracefully.

## Bug

The `bug.js` file uses `setTimeout` to simulate an asynchronous operation.  If a random number is less than 0.5, an error is thrown.  This error is not caught, leading to an unhandled promise rejection and a crash of the application.

## Solution

The `bugSolution.js` file demonstrates a more robust way to handle asynchronous operations by using `try...catch` blocks or promises' `.catch()` method to handle errors gracefully, preventing application crashes and providing better error reporting.