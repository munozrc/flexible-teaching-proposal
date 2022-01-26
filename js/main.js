import '../css/style.css'
import '../css/theme.css'
import { loadItemsAreas } from './areas.js'
import { loadToolsitems } from './tools.js'

const btnShare = document.querySelector('#btnShare')
const btnWhatsApp = document.querySelector('#btnWhatsApp')

btnShare.addEventListener('click', () => {
  if (!navigator.share) throw Error('Navigator Share API no supporter')

  navigator.share({
    title: 'propuesta enseñanza flexible',
    url: 'https://propuesta-ensenanza-flexible.netlify.app/',
    text: 'propuesta enseñanza flexible'
  }).then(() => console.log('shared successfully')).catch(err => console.log({ err }))
})

btnWhatsApp.addEventListener('click', () => {
  const url = 'https://api.whatsapp.com/send?phone=573023559991'
  window.open(url, '_blank').focus()
})

// Load content page
loadItemsAreas()
loadToolsitems()
