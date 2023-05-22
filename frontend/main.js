const moviesView = document.querySelector(".moviesView");

displayList();

function displayList() {
  let html = ``;
  db.forEach((movie, index) => {
    html += `
            <div class="card col-md-4 p-0" style="width: 18rem;">
                <img class="card-img-top" src="${movie.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.year}</p>
                    <p class="card-text">${movie.category}</p>
                    <p class="card-text">${movie.rate}</p>
                    <a class="btn btn-warning editBtn" data-index="${index}">Edit</a>
                    <a class="btn btn-danger deleteBtn" data-index="${index}">Delete</a>
                </div>
           </div>   
        `.trim();
  });

  moviesView.innerHTML = html;
}
