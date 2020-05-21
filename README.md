This project was created for the recruitment task for Wirtualna Polska Media.

Live app is available here: [https://m-ossolinski.github.io/wp-recruitment-task/].

# About project

Project display products fetched from Star Wars API.
The API is based on GraphQL and it is available on this link [https://swapi.apis.guru].

Products list shows Starships with their name, manufacturers and cost. 
At the bottom of each product is an available form which gives the ability to add a product to cart.

## Run project

Copy or clone this repository to your desktop.

Run from the command line `npm install` or `npm i`

Then run `npm start` or `npm run start` to run the project.

## Data

Data is fetched by `useFetchData` hook. It returns `data` element which contains three states of fetching data.
The hook is flexible so we can give him his own query to API as a parameter.
Hook is called in parent component and data is propagated to the child components.

```const { data, dataLoading, dataLoadingError } = useFetchData(SWAPI_STARSHIPS_QUERY);```

## Cart

Elements that are added to Cart are stored and propagated in-app by CartContext. 
It provides two elements `cartAmount` and `addItemToCart`.

## Components

App components are divided to four groups.

`containers` - app wrappers that contains `AppHeader` and `AppLayout`\
`pages` - it contains ShopPage which is main page in the app\
`productComponents` - it has few components which together create products list\
`cartComponents` - it has only one components which display cart items amount\


## Technologies

* React (Hooks, Context API)
* Styled-Components
* Axios
* Prop-Types
* ReactSVG
* uuid
