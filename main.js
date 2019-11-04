let isTableHeaderFound = false;

do{
  if(document.querySelector('.table-list-header-toggle')) isTableHeaderFound = true
} while(!isTableHeaderFound)

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
}
