import axios from 'axios';

export async function getDemAlcohols() {
  try {
    const { data: {alcohol} } = await axios.get('/api/alcohol')
    return alcohol
  } catch (error) {
    console.log(error)
  }
}

export async function getDemUsers() {
  try {
    const { data } = await axios.get('/api/users')
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function registerUserAccount(username, password) {
  try {
    const {data} = await axios.post('/api/users/register', {username, password})

    
    localStorage.setItem("data", JSON.stringify(data))
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function loginUserAccount(username, password) {
  try {
    const {data} = await axios.post('/api/users/login', {username, password})

    
    localStorage.setItem("data", JSON.stringify(data))
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function logoutUserAccount() {
  try {
    localStorage.removeItem("data");
  } catch (error) {
    console.log(error)
  }
}


export async function addToCart(userId, alcoholId) {
  try {
    const { data } = await axios.post('/api/cart/add', {userId, alcoholId})
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function removeFromCart(userId, alcoholId) {
  try {
    const { data } = await axios.delete(`/api/cart/remove/${userId}/${alcoholId}`)
    
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getPendingItemsByUser(userId) {
  try {
    const { data} = await axios.get(`/api/cart/pending/${userId}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getCompletedItemsByUser(userId) {
  try {
    const { data } = await axios.get(`/api/cart/completed/${userId}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function checkout(userId) {
  try {
    const { data } = await axios.patch(`/api/cart/checkout/${userId}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function changeQuantity(cartId, quantity) {
  try {
    const { data } = await axios.patch(`/api/cart/quantity/${cartId}/${quantity}`)

    return data
  } catch (error) {
    console.log(error)
  }
}