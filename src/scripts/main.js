$(document).ready(() => {
  console.log('document is loaded')

  const profiles = [
    { name: 'marcos', image: 'marcos.jpg', image2: 'marcos2.jpg' },
    { name: 'lucas', image: 'lucas.jpg', image2: 'lucas2.jpg' },
    { name: 'eber', image: 'eber.jpg', image2: 'eber2.jpg' },
    { name: 'sixel', image: 'sixel.jpg', image2: 'sixel2.jpg' },
    { name: 'biel', image: 'biel.jpg', image2: 'biel2.jpg' },
  ]

  const renderContent = ({ name, image, image2 }) => {
    const content = `
      <div class="content">
        <div class="contentImage" id="${name}"></div>
      </div>
    `

    $('#content-container').append(content)

    $(`#${name}.contentImage`).css('background-image', `url(/images/${image})`)
    $(`#${name}`).css('background-position', `center`)
    $(`#${name}`).css('background-size', `cover`)
    $(`#${name}`).hover(
      function () {
        $(this).css('background-image', `url(/images/${image2})`)
      },
      function () {
        $(this).css('background-image', `url(/images/${image})`)
      }
    )
  }

  profiles.forEach(({ name, image, image2 }) =>
    renderContent({ name, image, image2 })
  )
})
