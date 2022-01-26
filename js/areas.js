const container = document.querySelector('.areas-content')

const articles = [
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    content: 'Iniciar con Yoga en las mañanas para equilibrar el cuerpo y mente. Ayuda a regular el comportamiento.'
  },
  {
    title: 'Astronomía Básica',
    image: 'https://images.unsplash.com/photo-1517461982853-d9e4fa425852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    content: 'Aplicando en matematicas. Con posible visita al Observatorio.'
  },
  {
    title: 'Historia',
    image: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    content: 'Involucra cultura general vista desde las realidades vividas para enriquecer produccion textual con el objetivo de producir libros o textos.'
  },
  {
    title: 'Ajedréz',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    content: 'Quien este interesado, adquiere su herramienta pedago.'
  },
  {
    title: 'Inglés',
    image: 'https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    content: 'Explorado por quien muestre interés con la garantia que es un inglés acertado.'
  },
  {
    title: 'Artes',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    content: 'Hacer de la vida una obra de arte mediante la ilustración desde la vegetación, los animales, las historias, porcelana fria, origami (aplica matemáticas).'
  },
  {
    title: 'Pensamiento Matemático',
    subtitle: 'Pensamiento Escrito',
    image: 'https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    content: ''
  }
]

const loadItemsAreas = () => {
  articles.forEach(({ title, subtitle, image, content }) => {
    container.innerHTML += `
      <article class="areas-item">
        <header class="areas-item-header ${subtitle ? 'areas-item__padding' : ''}">
          <div class="areas-item-wrapper-title">
            <h4 class="areas-item-title">${title}</h4>
            ${subtitle ? `<h4 class="areas-item-title">${subtitle}</h4>` : ''}
          </div>
          <img class="areas-item-image" src="${image}" />
        </header>
        <footer class="areas-item-footer" style="display: ${content === '' ? 'none' : ' flex'}">
          <p class="areas-item-description">${content}</p>
        </footer>
      </article>
    `
  })
}

export { loadItemsAreas }
