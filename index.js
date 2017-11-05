import * as acronym from '@mhyfritz/acronym'
import wordList from 'word-list/words.txt'

const wordArray = wordList.split('\n')

const inp = document.querySelector('.input')
const out = document.querySelector('.output')

var isLoading = false

inp.addEventListener('keyup', ev => {
  if (ev.key !== 'Enter' || isLoading) {
    return
  }
  isLoading = true
  const query = inp.value.trim()
  const acronyms = computeAcronyms(query)
  out.innerHTML = acronyms.join('\n')
  isLoading = false
})

function computeAcronyms (phrase) {
  const acronyms = []
  for (const word of wordArray) {
    if (acronym.test(phrase, word)) {
      acronyms.push(word)
    }
  }
  return acronyms
}
