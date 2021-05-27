function  addingEventListener() {
  const e = document.getElementById('event')
  e.addEventListener('click',
  function() {
    alert('You read about Joseph')
  })
}

addingEventListener()