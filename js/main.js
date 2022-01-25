import '../css/style.css'
import '../css/theme.css'

const btnShare = document.querySelector('#btnShare')

btnShare.addEventListener('click', () => {
  if (!navigator.share) throw Error('Navigator Share API no supporter')

  navigator.share({
    title: 'Propuesta Enseñanza Flexible',
    url: 'https://propuesta-ensenanza-flexible.netlify.app/',
    text: 'Propuesta Enseñanza Flexible'
  }).then(() => console.log('shared successfully')).catch(err => console.log({ err }))
})
