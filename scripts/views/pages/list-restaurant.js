import RestaurantDbSource from '../../data/restaurantdb-source';
import { createListItemTemplate } from '../templates/template-creator';


const ListRestaurant = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Restaurant List</h2>
      <div id="movies" class="movies">
      </div>
    </div>    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantDbSource.listRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('#movies');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createListItemTemplate(restaurant);
    });
  }
};
 
export default ListRestaurant;