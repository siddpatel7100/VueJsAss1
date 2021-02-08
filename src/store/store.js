import Vue from 'vue'
import Vuex from 'vuex'
import img from '@/assets/img1.jpg'
import img1 from '@/assets/img2.jpg'
import img2 from '@/assets/img3.jpg'

Vue.use(Vuex)

export const store = new Vuex.Store({
state:{
    productDetails: [
        {
            id:1,
            name: 'Canvas Belt',
            base: 25,
            price: 18,
            url: img,

            sku: 'canvas-belt'
        },
        {
            id:2,
            name: 'Radiator Sunglasses',
            price: 180,
            sale: null,
            url: img1,

            sku: 'radiator-sunglasses'
        },
        {
            id:3,
            name: 'Two-Toned Frames',
            price: 95,
            url: img2,
            sku: 'two-toned-frames'
        }
    ],
    countItemCart:0,
    cartItems:[]
    },
    mutations: {
        addToCart(state, payload) {
            //we will add item by 1
            //if cart item length > 0
            // check paylaod exits in cart items
            //if yes then upadate by 1
            // no then puch the item
            let item = payload;
            item = {...item, quantity: 1}
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id == item.id)
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
                    state.cartItems[itemIndex]['quantity'] += 1;
                } else {
                    state.cartItems.push(item)
                }
            } else {
                state.cartItems.push(item)
            }
            state.countItemCart++;
        },
        removeItem(state, paylaod) {

            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id == paylaod.id)
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(el => el.id === paylaod.id)
                    if (state.cartItems[itemIndex]['quantity'] !== 0) {  //make sure  cartItem index does not equal to 0
                        state.cartItems[itemIndex]['quantity'] -= 1;
                        state.countItemCart--;
                    }
                    if(state.cartItems[itemIndex]["quantity"] === 0)
                        state.cartItems.splice(itemIndex,1) //removing the content in the array
                }
            }
        }

        },

    actions:{
    addToCart:(context,payload)=>{
        context.commit("addToCart",payload)
    },
        removeItem:(context,payload)=>{
        context.commit("removeItem",payload)
}
    }
})