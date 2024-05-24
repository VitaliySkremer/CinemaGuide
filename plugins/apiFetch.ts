import { ProxyAgent } from 'undici'

export default defineNuxtPlugin(() => {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const $apiFetch = $fetch.create({
    baseURL: 'https://cinemaguide.skillbox.cc/',
    onRequest({ request, options, error }) {
      // console.log(`request ${request}`)
      if (userAuth.value) {
        // const headers = new Headers(options.headers);
        // headers.set('Authorization', `Bearer ${userAuth.value}`);
      }
    },
    onRequestError({request, error}) {
      console.log(error)
    },
    onResponse ({ response }) {
      // response._data = new myBusinessResponse(response._data)
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        return navigateTo('/login')
      }
    }
  })
  // Expose to useNuxtApp().$apiFetch
  return {
    provide: {
      apiFetch: $apiFetch
    }
  }
})
