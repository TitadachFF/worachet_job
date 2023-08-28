const genRestaurantCard = (restaurant) => {
    const card = document.createElement("div")
    card.className = "card";
    card.style = "width : 18rem;"
    const restoCard = `
<img src="${restaurant.imageurl}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${restaurant.name}</h5>
  <p class="card-text">${restaurant.type}</p>
  <a href="#" class="btn btn-primary">Edit</a>
  <a href="#" class="btn btn-primary">Delete</a>
</div>
`;
    card.innerHTML = restoCard;

    const restaurants = document.querySelector("#restaurants");
    console.log(card);
    restaurants.appendChild(card);
};


const onLoad = async () => {
    const allRestaurants = await fetch("http://localhost:5000/restaurants", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        header: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
       return response.json();
    });
    console.log(allRestaurants)
    allRestaurants.forEach((restaurant)=> genRestaurantCard(restaurant))
};
    const main = () => {
        onLoad();
    };
    main();