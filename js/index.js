const searchText = document.getElementById('searchText')
const searchForm = document.querySelector('.searchForm')

const queryWeb = input => {
  const url = `https://www.duckduckgo.com/?q=${encodeURIComponent(input)}`

  window.open(url, '_self')
}
console.log(searchText.value)
searchForm.addEventListener('submit', e => {
  e.preventDefault()
  queryWeb(searchText.value)
})
