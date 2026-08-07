let favoriteVerbs=[];

function addFavorite(verb){

    if(!favoriteVerbs.includes(verb)){

        favoriteVerbs.push(verb);

        localStorage.setItem(

            "favoriteVerbs",

            JSON.stringify(favoriteVerbs)

        );

    }

}
