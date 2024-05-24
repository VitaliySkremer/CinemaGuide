export default defineEventHandler(async (event) => {
  return {
    config: {
      proxy: process.env
    }
  }
})
