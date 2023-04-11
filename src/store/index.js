//AUTHENTIFICATION
import { createStore } from 'vuex'
import router  from '../router'
import { auth } from '../firebaseInit'
import {
     createUserWithEmailAndPassword, 
     signInWithEmailAndPassword ,
     signOut
    
    } from 'firebase/auth'
import UserService from '../services/UserService'


export default createStore({
    state: {
        user: null,
        cart: []
    },
    mutations: { // Ulogovani korisnik povezivanje sa bazom autentifikacija 
        SET_USER (state, user) { //firebase OBJ
            state.user = user
        },
        CLEAR_USER (state) {
            state.user = null
        },
        ADD_PRODUCT_TO_CART (state, product) { //firebase OBJ
            if(state.cart.indexOf(product) === -1) {
                state.cart.push(product);
            }
        },
        REMOVE_PRODUCT_FROM_CART(state, productId) {
            for(let i = 0; i < state.cart.length; i++) {
                if(state.cart[i].id === productId) {
                    state.cart.splice(i, 1);
                    break;
                }
            }
        },
        CLEAN_CART(state) {
            state.cart = [];
        }
    },
    actions: {
        
        async login( {commit}, details) {
            const { email, password } = details
            try {
                await signInWithEmailAndPassword(auth,email,password) //firebase obj
                
            } catch (error) {
                switch(error.code) {
                    case 'auth/user-not-found':
                        alert("User not found")
                        break;

                    case 'auth/wrong-password':
                        alert("Wrong password")
                        break;
                    default:
                         alert("Something went wrong")
                }

                return 
            }

            const userService = new UserService();

            const user = await userService.getUserByEmail(email);

            commit('SET_USER', user)

            if(user.is_admin) {
                router.push('/admin')
                return;
            }
            router.push('/')
        },



        async register( {commit}, details) {
            const { email, password } = details
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                
            } catch (error) {
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        alert("Email already in use")
                        break
                    case 'auth/invalid-email':
                        alert("Invalid email")
                        break
                    case 'auth/operation-not-allowed':
                        alert("Operation not allowed!")
                        break
                    case 'auth/weak-password':
                        alert("Weak password")
                        break
                    default:
                         alert("Something went wrong")
                }

                return 
            }
            commit('SET_USER', details)

            router.push('/')
        },
        async logout( { commit }) {
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/login')
        },

        fetchUser({ commit }) {
            const userService = new UserService();


            auth.onAuthStateChanged(async user => {
                if(user === null) {
                    commit('CLEAR_USER')
                } else {
                    user = await userService.getUserByEmail(user.email);
        
                    commit('SET_USER', user)
                    if(router.isReady() && router.currentRoute.value.path === '/login') { //ako smo trenutno na login stranici
                         router.push('/')
                    }
                }
            })
        }

    }
    
})

