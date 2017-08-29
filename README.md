# RomanConverter

A small web application that can be used to convert Arabic numbers into Roman numerals, e.g. 1984 => MCMLXXXIV.

## How to start it

To start the application, run the following in the `backend` directory:

Linux:
```
export FLASK_APP=app.py
flask run
```

Windows:
```
set FLASK_APP=app.py
flask run
```

Then navigate your browser to `http://localhost:5000`.

Note: in a real-world application, the static frontend files would probably not be served by the backend application, but by a dedicated web server, e.g. nginx.

## Developing

To start the backend in development mode, which will watch the code for file changes:

Linux:
```
export FLASK_DEBUG=1
flask run
```

Windows:
```
set FLASK_DEBUG=1
flask run
```

To start the frontend in development mode, go to the `frontend` directory and use `npm start`.

To push the compiled frontend files to the backend `static` folder, use `npm run static`.

## Running backend tests

First run `pip install pytest`. From the `backend` folder, then run `pytest`.

## Running frontend tests

From the `frontend` folder, run `npm test`.