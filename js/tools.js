const container = document.querySelector('.tools-list')

const items = [
  {
    title: 'Bitacora',
    description: 'Hecha por hojas de 30x30 que incluya hojas de todos los colores, diferentes texturas, delgados, gruesos, papel mantequilla'
  },
  {
    title: 'Marcadores de punta delgada',
    description: 'De preferencia de muchos colores'
  },
  {
    title: 'Lapices',
    description: 'De preferencia de muchos grosores'
  },
  {
    title: 'Ajedrez profesional',
    description: ''
  },
  {
    title: 'Kimono',
    description: 'Quien este interesado'
  },
  {
    title: 'Colores',
    description: ''
  },
  {
    title: 'Kit porcelana fria',
    description: 'Se consigue con la profe MC'
  },
  {
    title: 'Bloc origami',
    description: ''
  },
  {
    title: 'Ropa cómoda',
    description: ''
  },
  {
    title: 'Lonchera saludable',
    description: ''
  }
]

const loadToolsitems = () => {
  container.innerHTML = ''

  items.forEach(({ title, description }) => {
    const empty = description !== '' ? 'tools-list-item-title__margin' : ''
    container.innerHTML += `
      <li class="tools-list-item">
        <h4 class="tools-list-item-title ${empty}">${title}</h4>
        <p class="tools-list-item-description">${description}</p>
      </li>
    `
  })
}

export { loadToolsitems }
