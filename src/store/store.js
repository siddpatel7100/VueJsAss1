import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        productDetails:[
            {
                id:1,
                name:'Samsung Galaxy Note 9',
                base: 35499,
                price: 30999,
                url: "https://cdn.pixabay.com/photo/2018/08/08/13/15/samsung-galaxy-note-9-3592152_960_720.png",
                description: 'The new Galaxy Note 9 has much the same hardware and cameras as the Galaxy S9 Plus. The main thing that sets the Galaxy Note 9 apart is its S Pen, which now has added Bluetooth connectivity and can be used as a single-button Bluetooth remote control. Samsungs Experience UI is highly customised but feels smooth and natural to use, with several thoughtful ways to use the S Pen. This phone is a bit too large and heavy, but it has a huge 6.4-inch screen with curved edges and a 4000mAh battery that could last you up to two days. The cameras are great, and Samsungs app gives you a lot to play with. If you want to spend this much money and can live with the bulk, the Galaxy Note 9 delivers a top-class experience.',
                sku:'samsung-galaxy-note-9'
            },
            {
                id:2,
                name: 'Apple Iphone 11',
                base: 54900,
                price: 51999,
                url: "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_960_720.jpg",
                description: 'The iPhone 11 is a successor to the iPhone XR and the name represents a reset in Apples naming strategy to emphasise that this is the "default" iPhone for everyone. Powered by Apples own A13 Bionic chip, the iPhone 11 trio are the fastest smartphones you can buy today, with the closest competition at the time of filing this review being last years iPhone lineup.',
                sku:'apple-iphone-11'
            },
            {
                id:3,
                name: 'Apple Iphone 12',
                base: 84900,
                price: 84790,
                url: "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_1280.jpg",
                description: 'The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. It offers nearly all the feaures of the iPhone 12 Pro, minus some camera capabilities, but should be a good enough package for most users. Apple has returned to a flat aluminium frame but the iPhone 12 promises to be more durable thanks to its Ceramic Shield material on the front and IP68 rating. ',
                sku:'apple-iphone-12'
            },
            {
                id:4,
                name: 'Samsung Galaxy S20',
                base: 74000,
                price: 43999,
                url: "https://cdn.pixabay.com/photo/2020/04/27/16/17/samsung-5100532_960_720.jpg",
                description: 'Samsung Galaxy S20 smartphone was launched on 11th February 2020. The phone comes with a 6.20-inch touchscreen display with a resolution of 1440x3200 pixels and an aspect ratio of 20:9. Samsung Galaxy S20 is powered by a 2GHz octa-core Samsung Exynos 990 processor that features 2 cores clocked at 2.73GHz, 2 cores clocked at 2.5GHz and 4 cores clocked at 2GHz. It comes with 8GB of RAM. The Samsung Galaxy S20 runs Android 10 and is powered by a 4000mAh non-removable battery. The Samsung Galaxy S20 supports wireless charging, as well as proprietary fast charging.',
                sku:'samsung-galaxy-s20',

            },
            {
                id:5,
                name: 'OnePlus 7',
                base: 35000,
                price: 29000,
                url: "https://cdn.pixabay.com/photo/2018/08/02/00/02/oneplus-3578574_1280.jpg",
                description: 'OnePlus 7 smartphone has a Optic AMOLED display. It measures 157.7 mm x 74.8 mm x 8.2 mm and weighs 182 grams. The screen has a resolution of 1080 x 2340 pixels and 402 ppi pixel density. It has an aspect ratio of 19.5:9 and screen-to-body ratio of 85.32 %. On camera front, the buyers get a 16 MP f/2.0 Primary Camera(3.1" sensor size, 1µm pixel size) and on the rear, theres an 48 MP + 5 MP camera with features like Fixed Focus. It is backed by a 3700 mAh battery. Connectivity features in the smartphone include WiFi, Bluetooth, GPS, Volte, NFC and more.',
                sku:'oneplus-7'

            },
            {
                id:6,
                name: 'Pixel 4a',
                base: 34999,
                price: 31999,
                url: "https://cdn.pixabay.com/photo/2019/12/21/16/31/mobile-4710790_1280.jpg",
                description: 'Google Pixel 4a smartphone was launched on 3rd August 2020. The phone comes with a 5.81-inch touchscreen display with a resolution of 1080x2340 pixels at a pixel density of 443 pixels per inch (ppi) and an aspect ratio of 19.5:9. Google Pixel 4a is powered by a 1.8GHz octa-core Qualcomm Snapdragon 730G processor that features 6 cores clocked at 1.8GHz and 2 cores clocked at 2GHz. It comes with 6GB of RAM. The Google Pixel 4a runs Android 10 and is powered by a 3140mAh non-removable battery. The Google Pixel 4a supports proprietary fast charging.',
                sku: 'pixel-4a'
            },
            {
                id:7,
                name: 'Oneplus 8',
                base: 35000,
                price: 30000,
                url: "https://cdn.pixabay.com/photo/2014/11/05/08/09/smartphone-517450_1280.jpg",
                description: 'The OnePlus 8 is the spiritual successor of the OnePlus 7 and will go on to eventually replace the OnePlus 7T. Build quality is excellent thanks to the curved-edge front and back glass sandwiching the metal frame. The buttons are easy to reach, and the alert slider is handy as always.',
                sku: 'oneplus-8'
            },
            {
                id:8,
                name: 'MI NOTE 8',
                base: 17999,
                price: 14999,
                url: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990_1280.png",
                description: 'The bottom end of the smartphone market is crammed with models and variants of them, in many cases with only very minor differences between them just in order to cater to people with limited budgets and specific requirements. A case in point is Xiaomi, which has launched well over a dozen options priced below Rs. 15,000 so far this year. No matter whether you prioritise CPU power, RAM and storage, camera features, or battery life, Xiaomi wants to put enough options in front of buyers that they wont even have to look at what the competition has to offer. Still, its a tough balancing act.',
                sku: 'mi-note-8'
            },
            {
                id:9,
                name: 'MI 10',
                base: 20999,
                price: 15999,
                url: "https://cdn.pixabay.com/photo/2020/03/16/11/07/xiaomi-4936657_1280.jpg",
                description: 'Xiaomi has made a bold move by launching the Mi 10 5G in India at a starting price of Rs. 49,999. The curved glass on the front and back of this phone looks classy. This, coupled with the high-gloss finish makes it striking to look at. The Mi 10 5G has a 6.67-inch AMOLED screen and is sharp enough, but the resolution is full-HD+ (2340x1080). The display also runs at 90Hz, which is a big trend right now.',
                sku: 'mi-10'
            },
            {
                id:10,
                name: 'Huawei Honor 9',
                base: 35000,
                price: 30000,
                url: "https://cdn.pixabay.com/photo/2017/07/31/13/13/huawei-2557932_1280.jpg",
                description: 'Honor 9 smartphone was launched in June 2017. The phone comes with a 5.15-inch touchscreen display with a resolution of 1080x1920 pixels at a pixel density of 428 pixels per inch (ppi). Honor 9 is powered by a 1.8GHz octa-core HiSilicon Kirin 960 processor. It comes with 4GB of RAM.',
                sku: 'huawei-honor-9'
            },
            {
                id:11,
                name: 'Huawei Mate 30 Pro',
                base: 40000,
                price: 35000,
                url: "https://cdn.pixabay.com/photo/2020/01/12/08/08/handphone-4759482_1280.jpg",
                description: 'Huawei Mate 30 Pro smartphone was launched on 19th September 2019. The phone comes with a 6.53-inch touchscreen display with a resolution of 1176x2400 pixels. Huawei Mate 30 Pro is powered by a 1.86GHz octa-core HiSilicon Kirin 990 processor. It comes with 8GB of RAM. The Huawei Mate 30 Pro runs Android 10 and is powered by a 4500mAh battery. The Huawei Mate 30 Pro supports wireless charging, as well as proprietary fast charging.',
                sku: 'huawei-mate-30-pro'
            },
            {
                id:12,
                name: 'Ipad 10',
                base: 45000,
                price: 40000,
                url: "https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_1280.jpg",
                description: 'Apple iPad (2019) Wi-Fi tablet was launched on 10th September 2019. The tablet comes with a 10.20-inch touchscreen display with a resolution of 2160x1620 pixels at a pixel density of 264 pixels per inch (ppi).',
                sku: 'ipad-10'
            },
            {
                id:13,
                name: 'MacBook Air',
                base: 70000,
                price: 65000,
                url: "https://cdn.pixabay.com/photo/2017/10/10/21/46/laptop-2838914_1280.jpg",
                description: 'Apple MacBook Air 2020 is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Apple MacBook Air 2020 packs 256GB of SSD storage.',
                sku: 'macbook-air'
            },
            {
                id:14,
                name: 'IMac',
                base: 150000,
                price: 100000,
                url: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg",
                description: 'The first major change is the upgrade to the 10th generation Intel CPUs. There are four CPU SKUs available; the base 27-inch iMac model has a 3.1GHz 6-core Core i5-10500 that can Turbo Boost to 4.5GHz. The middle variant has a 3.3GHz 6-core Core i5-10600 that can Turbo Boost up to 4.8GHz. The high-end model has a 3.8GHz 8-core Core i7-10700K that can Turbo Boost up to 5.0GHz. Both the middle and the high-end model can also be customized with a 3.6GHz 10-core Core i9-10910 that Turbo Boosts up to 5.0GHz.',
                sku: 'i-mac'
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