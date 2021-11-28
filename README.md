# Wellness.me

Wellness.me is a personal wellness tracker, allowing users to record critical metrics from their day-to-day life including but not limited to their consistency of exercise, duration of sleep, and overall happiness. 

As their personal dataset grows over time, users will be able to reflect back on their challenges and marvel at their growth through the tracker’s statistical analysis and charts, reaching a uniquely quantitative understanding of themselves. Through this self-comprehension alongside the assistance of our goal-setter, our app will help users strive and reach a fuller potential in life.

# Local Development

To run the app locally, first clone the repository

```bash
git clone https://github.com/wellness-me/wellness-me.git
```

and 
```bash
cd wellness-me
```

Then we want to install the local packages.  First in the project root directory, run 
```bash
npm install
```
and to handle the backend packes run 
```bash
cd backend
npm install
```

Finally the app requires a `.env` file to handle environment variables in the backend.  Thus make a file called `.env` in the `backend/` folder and paste the following contents in it

```
MONGO_URL=<your mongo cluster>
PORT=5000
USE_DEV=true
TOKEN_KEY=<some random string>
```

Finally to run the project open up two terminal sessions in both the project root directory and the `backend/` folder, and run 
```bash
npm start
```
in both of them.

Then the web app will be running on `http://localhost:3000` and the backend server will be running on `http://localhost:5000`.
