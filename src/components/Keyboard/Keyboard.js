import React from 'react';

const styles = {
  keyboard: {
    maxWidth: '400px',
    margin: 'auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5px',
  },
  keycap: {
    margin: '3px',
    borderRadius: '5px',
    flex: '1',
    minWidth: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'hsl(0deg 0% 75%)',
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
              <strong>{letter}</strong>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
