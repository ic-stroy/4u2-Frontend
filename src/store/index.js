import { createStore } from 'vuex'
import router from "../router/index";
import axios from "axios";

export default createStore({
  state: {
    backgroundModal: false,
    catologModal: false,
    custModal: false,
    createAddressModal:false,
    editAddressModal:false,
    products: [],
    categories: {},
    product: {
      images: [''],
      sizes: [''],
      colors_id: ['']
    },
    body: document.querySelector('body'),
    bestProducts: [],
    favourite_product: {},
    favourite_products: [],
    get_products_by_categories: [],
    get_products_by_sub_categories: [],
    is_repeated: false,
    loginModal: false,
    user: {},
    is_auth: false,
    edit:{
      'region':{},
      'city':{},
      'zoom':7,
      'LatLon':[41.311081, 69.240562],
      'city_id':null,
      'selected':false,
      'address':''
    },
  },
  getters: {
    isAuth: function (state) {
      return state.is_auth
    },
    basket: function (state) {
      return state.basket
    },
    getUser: function (state) {
      return state.user
    },
    getOneProduct: function (state) {
      return state.product
    },
    getProducts: function (state) {
      return state.products
    },
    getbestProducts: function (state) {
      return state.bestProducts
    },
    getFavourites: function (state) {
      return state.favourite_products
    },
    getProductsByCategories: function (state) {
      return state.get_products_by_categories
    },
    getProductsBySubCategories: function (state) {
      return state.get_products_by_sub_categories
    },
    getAddressEdit: function (state){
      return state.edit
    }
  },
  mutations: {
    closeModal: function (state) {
      if (state.backgroundModal == true) {
        state.body.style.overflow = "visible"
        state.backgroundModal = false
      }
      if (state.catologModal == true) {
        state.catologModal = false
      }
      if (state.custModal == true) {
        state.custModal = false
      }
      if (state.loginModal == true) {
        state.loginModal = false
      }
      if (state.createAddressModal == true) {
        state.createAddressModal = false
      }
      if (state.editAddressModal == true) {
        state.editAddressModal = false
      }
    },
    catologModalFunc: function (state) {
      if (state.catologModal == false) {
        state.catologModal = true
      }
      if (state.backgroundModal == false) {
        state.body.style.overflow = "hidden"
        state.backgroundModal = true
      }
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },
    loginModalFunc: function (state) {
      if (state.loginModal == false) {
        state.loginModal = true
      }
      if (state.backgroundModal == false) {
        state.body.style.overflow = "hidden"
        state.backgroundModal = true
      }
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },
    openCustModal: function (state) {
      if (state.custModal == false) {
        state.custModal = true
      }
      if (state.backgroundModal == false) {
        state.body.style.overflow = "hidden"
        state.backgroundModal = true
      }
      window.scrollTo({top: 234, left: 0, behavior: 'smooth'});
    },
    addLocation: function (state){
      if (state.createAddressModal == false) {
        state.createAddressModal = true
      }
      if (state.backgroundModal == false) {
        state.body.style.overflow = "hidden"
        state.backgroundModal = true
      }
      window.scrollTo({top: 234, left: 0, behavior: 'smooth'});
    },
    editLocation: function (state, address){
      console.log(address)
      if (state.editAddressModal == false) {
        state.editAddressModal = true
      }
      if (state.backgroundModal == false) {
        state.body.style.overflow = "hidden"
        state.backgroundModal = true
      }
      state.my_edit_address = address
      state.edit.region = address.region,
      state.edit.city = address.city,
      state.edit.zoom = 15,
      state.edit.LatLon =  [address.latitude, address.logitude],
      state.edit.city_id = null,
      state.edit.selected = false,
      state.edit.address ='',
      window.scrollTo({top: 234, left: 0, behavior: 'smooth'});
    },
    toFavourites(state) {
      state.is_repeated = false
      state.favourite_product.id = state.product.id
      state.favourite_product.name = state.product.name
      state.favourite_product.subcategory = state.product.subcategory
      state.favourite_product.category = state.product.category
      state.favourite_product.sum = state.product.sum
      state.favourite_product.company = state.product.company
      state.favourite_product.images = state.product.images[0]
      for (let i = 0; i < state.favourite_products.length; i++) {
        if (state.favourite_products[i].id == state.product.id) {
          state.is_repeated = true
          state.favourite_products.splice(i, 1)
        }
      }
      if (state.is_repeated == false) {
        if (state.favourite_products.length == 0) {
          state.favourite_products = [state.favourite_product]
        } else {
          state.favourite_products.push(state.favourite_product)
        }
      }
      if (localStorage.getItem('favourite_product')) {
        localStorage.removeItem('favourite_product')
      }
      localStorage.setItem('favourite_product', JSON.stringify(state.favourite_products))
    },

    getFavouritedProducts(state) {
      if (localStorage.getItem('favourite_product')) {
        state.favourite_products = JSON.parse(localStorage.getItem('favourite_product'))
      }
    },
    SET_USER: (state, user) => {
      state.user = user
      state.is_auth = true
      localStorage.setItem('user_token', user.token)
      localStorage.setItem('is_auth', true)
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products.data
    },
    SET_PRODUCT_TO_STATE: (state, product) => {
      state.product = product.data
    },
    SET_BEST_SELLER_TO_STATE: (state, best_product) => {
      state.bestProducts = best_product.data
    },
    SET_PRODUCTS_BY_CATEGORIES_TO_STATE: (state, product) => {
      state.get_products_by_categories = product.data
    },
    SET_PRODUCTS_BY_SUB_CATEGORIES_TO_STATE: (state, sub_product) => {
      state.get_products_by_sub_categories = sub_product.data
    }
  },
  actions: {
    async GETUSER({commit}) {
      try {
        const response = await axios.get('http://eccommerce/api/get-user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('user_token')}`,
            'Accept': 'application/json'
          }
        })
        commit('SET_USER', response.data.data)
      } catch (e) {
        if (localStorage.getItem('is_auth') != undefined || localStorage.getItem('is_auth') != null) {
          localStorage.removeItem('is_auth')
        }
        console.log(e)
        return e
      }
    },
    async GETPRODUCTSFUNC({commit}) {
      return await axios("http://eccommerce/api/products", {
        method: "GET",
        accepted: "Application/json"
      })
          .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data)
            return products.data
          })
          .catch((e) => {
            console.log(e)
            return e
          })
    },
    async GETPRODUCTFUNC({commit}) {
      return await axios("http://eccommerce/api/product/" + router.currentRoute.value.params.id, {
        method: "GET",
        accepted: "Application/json"
      })
          .then((product) => {
            commit('SET_PRODUCT_TO_STATE', product.data)
            return product.data
          })
          .catch((e) => {
            console.log(e)
            return e
          })
    },
    async GETBESTSELLER({commit}) {
      return await axios("http://eccommerce/api/best-seller", {
        method: "GET",
        accepted: "Application/json"
      })
          .then((best_products) => {
            commit('SET_BEST_SELLER_TO_STATE', best_products.data)
            return best_products.data
          })
          .catch((e) => {
            console.log(e)
            return e
          })
    },
    async GETPRODUCTSBYCATEGORIES({commit}) {
      return await axios("http://eccommerce/api/get-products-by-categories", {
        method: "GET",
        accepted: "Application/json"
      })
          .then((products_by_category) => {
            commit('SET_PRODUCTS_BY_CATEGORIES_TO_STATE', products_by_category.data)
            return products_by_category.data
          })
          .catch((e) => {
            console.log(e)
            return e
          })
    },
    async GETPRODUCTSBYSUBCATEGORIES({commit}) {
      return await axios("http://eccommerce/api/get-products-by-sub-categories/" + router.currentRoute.value.params.id, {
        method: "GET",
        accepted: "Application/json"
      })
          .then((sub_products) => {
            commit('SET_PRODUCTS_BY_SUB_CATEGORIES_TO_STATE', sub_products.data)
            return sub_products.data
          })
          .catch((e) => {
            console.log(e)
            return e
          })
    }
  },
  modules: {}
})
