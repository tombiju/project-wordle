import React from 'react';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  keycap: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    border: '1px solid #ccc',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: 'hsl(0deg 0% 90%)',
    borderRadius: '5px',
  },
  correct: {
    background: 'hsl(150deg 70% 30%)',
    borderColor: 'hsl(150deg 70% 30%)',
    color: 'white',
  },
  incorrect: {
    background: 'hsl(0deg 0% 25%)',
    borderColor: 'hsl(0deg 0% 25%)',
    color: 'white',
  },
  misplaced: {
    background: 'hsl(50deg 100% 30%)',
    borderColor: 'hsl(50deg 100% 30%)',
    color: 'white',
  },
  input: {
    width: '100%',
    fontSize: '16px',
    marginTop: '10px',
  },
};

const Keyboard = ({ colorMap }) => {
  const keyboardRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

  return (
    <div className="virtualKeyboard" style={styles.keyboard}>
      {keyboardRows.map((row) => (
        <div
          className="keyboardRow"
          key={crypto.randomUUID()}
          style={styles.row}
        >
          {row.split('').map((letter) => (
            <div
              key={crypto.randomUUID()}
              style={{ ...styles.keycap, ...styles[colorMap[letter]] }}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
