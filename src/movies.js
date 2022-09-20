// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
        //creamos un nuevo array moviesArray  con el resultado con el 
        //resultado de la llamada a la funcion devuelve los directores.
        return moviesArray.map((movie) =>
        movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    let i=0;
    moviesArray.filter((movie)=>{
            if(movie.genre.includes('Drama') && movie.director == 'Steven Spielberg'){
             i+=1;
            } 
             
            
        })
        
        return i;  
    }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    let total = 0;
    if(moviesArray.length === 0){
        return 0;
    }
    let result = moviesArray.reduce((acumulado, movie) => {
        if(movie.score){
            return acumulado + movie.score;
        }
        else{
            return acumulado;
        }
    },0);
    let total2 = result/moviesArray.length;
    return Math.round(total2*100)/100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const total = moviesArray.filter((movie)=> {
        return movie.genre.includes('Drama');
    });
    let average = 0;
    average = scoresAverage(total);
    return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //hacemos un clone de la matriz
    const cloneMoviesArray= [...moviesArray];
    //ordenamos la matriz
    cloneMoviesArray.sort((a, b) => { 
        if(a.year < b.year){
            return -1;
        }else if(a.year > b.year){
            return 1;
        }
        else{
           return a.title.localeCompare(b.title);
        }
        /*- Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
        - Si compareFunction(a, b) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej. Mozilla en versiones que datan hasta el 2003) respetan esto.
        - Si compareFunction(a, b) es mayor que 0, se sitúa b en un indice menor que a. */
    });
    return cloneMoviesArray;
}
/*Otra forma popular de ordenar las películas es ordenarlas alfabéticamente usando la clave de título. Sin embargo, en este caso, solo necesitamos imprimir el título de los primeros 20. Fácil para un experto como tú. 😉 Cree una función orderAlphabetically(), que recibe una matriz y devuelve una matriz de los primeros 20 títulos, ordenados alfabéticamente. Devuelve solo el título de cada película y, si la matriz que recibes tiene menos de 20 películas, devuélvelas todas.*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    //crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento de la matriz.
    const cloneMoviesArray = moviesArray.map((movie)=> movie.title);
    /*ordenamos alfabeticamente*/
    cloneMoviesArray.sort((a, b) =>  a.localeCompare(b));
    //conseguimos los 20 primeros
     const twetyFirst = cloneMoviesArray.slice(0,20);
     return twetyFirst;
     
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
