const ROOT_PRODUCTS = document.getElementById('products');

class Products {

   render() {
       let htmlCatalog = '';

       CATALOG.forEach(({img, name, weight, description, price}) => {
           
           htmlCatalog += `
               <div class="store_item">
                  <div class="store_image">
                      <img src="${img}" alt="">
                  </div>
                  <div class="store_subtitle">${name}</div>
                  <div class="store_text">
                      <p>${weight}</p>
                      <p>${description}</p>
                      <p>Ціна: ${parseInt(price).toLocaleString()} грн</p>
                  </div>
                  <div class="store_button_div">
                     <a href="tel:+380954590935" class="store_button">Купити</a>
                  </div>
               </div>
           `;
       });

       const html = `
           <div class="store_item_div">
               ${htmlCatalog}
           </div>
       `;

       ROOT_PRODUCTS.innerHTML = html;
   }
}

const productsPage = new Products();
productsPage.render();