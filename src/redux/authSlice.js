import { createSlice } from '@reduxjs/toolkit'

// Création de l'état initial
const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
  user: null,
}

// Création du "Slice" soit de la partie gérant l'authentification du store
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Lance le processus de connexion, à ce stade le statut est en attente et aucun token n'est stocker.
    loginStart(state) {
      state.loading = true
      state.error = null
    },

    // Lorsque la connexion à réussi on stocke le token dans le store et aucun message d'erreur n'est envoyé.
    loginSuccess(state, action) {
      state.loading = false
      state.isAuthenticated = true
      state.token = action.payload
    },

    setUser(state, action) {
      state.user = action.payload
    },

    // Lorsque la connexion échoue le token n'est pas stocker et un message d'erreur envoyé.
    loginFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },

    // Réinitialise l'état à sont état d'origine lorsque l'utilisateur se déconnecte.
    logOut(state) {
      state.isAuthenticated = false
      state.error = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logOut, setUser } =
  authSlice.actions

export default authSlice.reducer
