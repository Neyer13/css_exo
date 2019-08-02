import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'


export default function (Vue, { head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Exo:400,700,800,900|Rubik:400,700,900&display=swap',
    href: 'https://fonts.googleapis.com/css?family=Rubik:400,700,900&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
}