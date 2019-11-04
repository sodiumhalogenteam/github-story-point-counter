let isTableHeaderFound = false
let countToStop = 0
do{
  if(document.querySelector('.table-list-header-toggle')) isTableHeaderFound = true
  countToStop++
} while(!isTableHeaderFound || countToStop > 25)

if(isTableHeaderFound) {
  let pointsCount = 0
  document.querySelectorAll('.IssueLabel').forEach(function(label){
    if(label.innerText.includes('size')) pointsCount += parseInt(label.innerText.replace('size: ', ''))
  })
  console.log(pointsCount)
  const countElement = document.createElement('span')

  countElement.textContent = `Points: ${pointsCount}`
  const githubTableHeader = document.querySelector('.table-list-header-toggle')
  githubTableHeader.appendChild(countElement)
} else {
  console.log('Points could\'t be added. 🤕')
}
