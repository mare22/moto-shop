//AUTHENTIFICATION

import { createStore } from 'vuex'
import router  from '../router'
import { auth } from '../firebaseInit'
import {
     createUserWithEmailAndPassword, 
     signInWithEmailAndPassword ,
     signOut
    
    } from 'firebase/auth'


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
        ADD_PRODUCT_TO_CART (state, productId) { //firebase OBJ
            if(state.cart.indexOf(productId) === -1) {
                state.cart.push(productId);
            }
        },
        REMOVE_PRODUCT_FROM_CART(state, productId) {
            let index = state.cart.indexOf(productId);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
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

            commit('SET_USER', auth.currentUser)

            router.push('/')
        },



        async register( {commit}, details) {
            const { email, password } = details
            try {
                await createUserWithEmailAndPassword(auth,email,password)
                
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
            commit('SET_USER', auth.currentUser)

            router.push('/')
        },
        async logout( { commit }) {
            await signOut(auth)

            commit('CLEAR_USER')

            router.push('/login')
        },

        fetchUser({ commit }) {
            auth.onAuthStateChanged(async user => {
                if(user === null) {
                    commit('CLEAR_USER')
                } else {
                    commit('SET_USER', user)
                    if(router.isReady() && router.currentRoute.value.path === '/login') { //ako smo trenutno na login stranici
                         router.push('/')
                    }
                }
            })
        }

    }
    
})

