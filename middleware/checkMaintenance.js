export default function ({ store, redirect }) {
  // Add the userAgent property to the context
  console.log('hello from middleware')
  if (store.state.maintenance) {
    return redirect('/maintenance')
  }
}
