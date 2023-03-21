import './gamekeyboard.css'

function Keyboardrow({ letters, onClick, lines, answer }) {
  if (letters === 'QWERTYUIOP') {
    return (
      <div className="row">
        <button onClick={() => onClick('Q')}>Q</button>
        <button onClick={() => onClick('W')}>W</button>
        <button onClick={() => onClick('E')}>E</button>
        <button onClick={() => onClick('R')}>R</button>
        <button onClick={() => onClick('T')}>T</button>
        <button onClick={() => onClick('Y')}>Y</button>
        <button onClick={() => onClick('U')}>U</button>
        <button onClick={() => onClick('I')}>I</button>
        <button onClick={() => onClick('O')}>O</button>
        <button onClick={() => onClick('P')}>P</button>
      </div>
    )
  } else if (letters === 'ASDFGHJKL') {
    return (
      <div className="row">
        <div className="spacer half" />
        <button onClick={() => onClick('A')}>A</button>
        <button onClick={() => onClick('S')}>S</button>
        <button onClick={() => onClick('D')}>D</button>
        <button onClick={() => onClick('F')}>F</button>
        <button onClick={() => onClick('G')}>G</button>
        <button onClick={() => onClick('H')}>H</button>
        <button onClick={() => onClick('J')}>J</button>
        <button onClick={() => onClick('K')}>K</button>
        <button onClick={() => onClick('L')}>L</button>
        <div className="spacer half" />
      </div>
    )
  } else {
    return (
      <div className="row">
        <button className="one-and-a-half" onClick={() => onClick('Enter')}>
          Enter
        </button>
        <button onClick={() => onClick('Z')}>Z</button>
        <button onClick={() => onClick('X')}>X</button>
        <button onClick={() => onClick('C')}>C</button>
        <button onClick={() => onClick('V')}>V</button>
        <button onClick={() => onClick('B')}>B</button>
        <button onClick={() => onClick('N')}>N</button>
        <button onClick={() => onClick('M')}>M</button>
        <button className="one-and-a-half" onClick={() => onClick('Backspace')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      </div>
    )
  }
}

// function datastate(lines, answer, letter) {
//   //   console.log('lines length  ' + lines.length)
//   //   console.log('letter' + letter)
//   //   for(var i = 0; i< lines.length; i++) {
//   //   	let line = lines[i].trim().replace('\n','');
//   //   		if(line.length>0) {
//   //   		for(var j = 0; j < line.length; j++) {
//   //   			if(line[j] === letter && line[j] === answer[j]) {
//   //   				return "correct";
//   //   			}
//   //   			if(answer.search(letter) >= 0 && line[j].search(letter)>=0) {
//   //   				return "present";
//   //   			}
//   //   		}
//   //   	}
//   //   }
//   //   return "absent";
// }

export default Keyboardrow
