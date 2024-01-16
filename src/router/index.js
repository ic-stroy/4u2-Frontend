import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '@/views/IndexView'
// import IView from '@/views/indextextView'
import BasketView from '../views/BasketView'
import BuyRulesView from '@/views/BuyRulesView'
import FavoritesView from '@/views/FavoritesView'
import ProfileAddressView from '@/views/ProfileAddressView'
import ProfileCouponView from '@/views/ProfileCouponView'
import ProfileHistoryView from '@/views/ProfileHistoryView'
import ProfileNotificationView from '@/views/ProfileNotificationView'
import ProfilePayView from '@/views/ProfilePayView'
import ProfileSeenView from '@/views/ProfileSeenView'
import ProfileView from '@/views/ProfileView'
import RecommendationsView from '@/views/RecommendationsView'
import ShowDetailView from '@/views/ShowDetailView'
import ThreeDView from '@/views/ThreeDView'
import ProductsView from '@/views/ProductsView'
import ProductsSubCategoryView from '@/views/ProductsSubCategoryView'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView
  },
  {
    path: '/buy-rules',
    name: 'buy_rules',
    component: BuyRulesView
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavoritesView
  },
  {
    path: '/payment-method',
    name: 'payment_method',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PaymentMethodView.vue')
  },
  {
    path: '/profile-address',
    name: 'profile_address',
    component: ProfileAddressView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/profile-coupon',
    name: 'profile_coupon',
    component: ProfileCouponView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/profile-history',
    name: 'profile_history',
    component: ProfileHistoryView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/profile-notification',
    name: 'profile_notification',
    component: ProfileNotificationView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/profile-pay',
    name: 'profile_pay',
    component: ProfilePayView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/profile-seen',
    name: 'profile_seen',
    component: ProfileSeenView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter(){
      return isAuthorized()
    }
  },
  {
    path: '/recommendations',
    name: 'recommendations',
    component: RecommendationsView
  },
  {
    path: '/show-detail/:id',
    name: 'show_detail',
    props:true,
    component: ShowDetailView
  },
  {
    path: '/three-d',
    name: 'three_d',
    component: ThreeDView
  },
  {
    path: '/products/:id',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/sub-category-products/:id',
    name: 'ProductsSubCategory',
    component: ProductsSubCategoryView
  },
]

function isAuthorized(){
  if(localStorage.getItem('is_auth') != 'true'){
    return '/'
  }
}


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
