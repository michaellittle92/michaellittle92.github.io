const board = document.querySelectorAll('.square');

for (let i = 0; i < board.length; i++){
  board[i].addEventListener('click', function(){
    board[i].textContent = 'x'
  })
}

board[0].textContent = 'x';