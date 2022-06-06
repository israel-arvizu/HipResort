# HipResort

HipResort is a web application for booking and hosting resorts all over the world. This project was inspired by HipCamp and has a very similar look as that was the goal. The 
application has the complete functionality to view all the resorts avalable, able to reserve them and delete your reservations, users are also able to create their own resort and 
host it for others to reserve.

Start booking today at: https://hipresort.herokuapp.com/ 

## Splash Page
![image](https://user-images.githubusercontent.com/99637335/172158652-e0bf4825-0f37-474a-992d-41d04524a135.png)

## Resorts Page
![image](https://user-images.githubusercontent.com/99637335/172158760-f89db96b-4bfa-4c93-9f27-df14e617c1c2.png)

## Resort Detail Page
![image](https://user-images.githubusercontent.com/99637335/172159055-13a7489f-540e-44a1-a5dd-54162b0500f2.png)

## Profile Page
![image](https://user-images.githubusercontent.com/99637335/172158853-1d3ce59a-8ab3-454b-b118-7a2b75876989.png)

## Host Page
![image](https://user-images.githubusercontent.com/99637335/172158927-7e850839-6fe2-49b3-b80e-4be221a610ca.png)

## Technologies Used
#### Front End: -React, -HTML5, -JavaScript, -Redux
#### Back End: -Javascript, -Node.JS, -Sequelize, -Express.JS, -GIT, -PostGres
Hosted on Heroku

## Future Feautures
Im hoping to implement these feautures
- Search Bar
- Google Maps API

## Technical Implementation details
To make user experience better we had to implement a lot of useSelectors in the profile page to view any state changes for users, resorts, or reservations.
Here is a little code snippet on how we did this.
``` 
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const sessionReservation = useSelector(state => state.reservations.reservations);
    const sessionResort = useSelector(state => state.resort.resorts);

    useEffect(() => {
        dispatch(reservationActions.loadReservations(sessionUser.id))
        dispatch(resortActions.loadResorts())
    }, [dispatch])


    if(sessionReservation === null) return null;
    if(sessionResort === null) return null;

    let normalizedResorts = {};
    sessionResort.forEach((resort) => normalizedResorts[resort.id] = resort);
```


## How to get Started

1. Clone [https://github.com/israel-arvizu/HipResort](https://github.com/israel-arvizu/HipResort)
2. Install the required packages with ``npm install``
3. Add an ``.env`` file and update with the required information, look at ``.env-example`` for infomation
4. Set-Up up PSQL by creating a user, (USER MUST MATCH ``.env`` file user) 
5. Run the following commands `npx dotenv sequelize db:create`, `npx dotenv sequelize db:migrate`, `npx dotenv sequelize db:seed:all`
6. Start up the backend by running `npm start` in the backend folder directory
7. Start up the front by running `npm start` in the frontend folder directory in a different terminal
8. Done! Just navigate to where you set up your locahost in the `.env` file
