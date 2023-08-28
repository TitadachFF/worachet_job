const addResto = async () => {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const imageurl = document.getElementById("imageurl").value;;
    if (name && type && image) {
        //call API
        const params = {
            name: name,
            tyre: type,
            imageurl: imageurl,

        };
        // try {
        const restaurant = await fetch("http://localhost:5000/restaurants", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((restaurant) => {
            console.log(restaurant);
            alert("new restaurant id " + restaurant.id + "is created")
        });
        // } catch (error) {
        // alert("can't add new Restaurant")
        // }
    } else {
        alert("All fields are required !!")
    }
}