import '../css/style.css'
import '../css/theme.css'
import { setAreas } from './areas.js'

const btnShare = document.querySelector('#btnShare')

btnShare.addEventListener('click', () => {
  if (!navigator.share) throw Error('Navigator Share API no supporter')

  navigator.share({
    title: 'propuesta enseñanza flexible',
    url: 'https://propuesta-ensenanza-flexible.netlify.app/',
    text: 'propuesta enseñanza flexible'
  }).then(() => console.log('shared successfully')).catch(err => console.log({ err }))
})

// Load content page
setAreas()
