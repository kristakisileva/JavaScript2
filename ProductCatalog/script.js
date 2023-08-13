async function fetchProductCatalog() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        //Kādi dati ir jāpadod displayProductCatalog, lai tiktu atspoguļoti pieejami dati?
        displayProductCatalog(data.products);
    } catch (error) {
        console.error('Error fetching product catalog:', error);
    }
}


function displayProductCatalog(products) {
    //Kā lai parāda iegūtos datus uz UI izmantojot productCatalogContainer.innerHTML?
    const productCatalogContainer = document.getElementById("product-catalog");
    productCatalogContainer.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        div.innerHTML = `
        <div class="card h-100" style="border: 2px solid red">
          <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" width="320" height="250">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Stock: ${product.stock}</p>
            <p class="card-text">
                ${product.rating} ${generateStars(product.rating)}
            </p>
          </div>
        </div>
      `;
        productCatalogContainer.appendChild(div);
    });
}

// Cik zvaignes vajag kopā?
// Kā var aprēķināt, kad vajag pilnu zvaigzni, bet kad tukšu?
function generateStars(rating) {
    let stars = ``;
    const roundedRating = Math.round(rating);
    for (let i = 0; i < 5; i++) {
        if (i < roundedRating) {
            stars += `<span class="star">&#9733;</span>`;
        } else {
            stars += `<span class="star empty">&#9734;</span>`;
        }
    }
    return stars;
}

fetchProductCatalog();

const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";
// Append to another element:
document.getElementById("product-link").appendChild(para);

function myHead(a) {
    console.log(a.parentNode);
    a.parentNode.classList.toggle("bg-warning");
}

function hideText() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.addEventListener("click", function () {
    document.getElementById("change").innerHTML = "Hello dear customer!";
});