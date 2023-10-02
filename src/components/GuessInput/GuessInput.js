import React from 'react';
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_CHARACTERS_ALLOWED,
} from '../../constants';

function GuessInput({ guessNumber, updateGuess, disabled }) {
  const [text, setText] = React.useState('');
  const [error, setError] = React.useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (text.length < NUM_OF_CHARACTERS_ALLOWED) {
          // extra error displaying in case html validation breaks as noted by Josh
          // I decided to handle it this way
          setError(
            `Your guess cannot be less than ${NUM_OF_CHARACTERS_ALLOWED} characters in length.`
          );
          return;
        }
        // jumped a bit ahead in my excitement and effort in this first exercise haha
        // I send the guess back up to the parent component and display it
        updateGuess(text);
        setText('');
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={text}
        minLength={3}
        maxLength={5}
        onChange={(event) => {
          event.preventDefault();
          if (guessNumber >= NUM_OF_GUESSES_ALLOWED) {
            setError(
              `You cannot guess more than ${NUM_OF_GUESSES_ALLOWED} times.`
            );
            return;
          }
          // remove characters that are not alphanumeric, capitalize entire string
          let inputValue = event.target.value
            .replace(/[^a-zA-Z]/g, '')
            .toUpperCase();
          // prevent unnecessary setText calls if the user enters an invalid character and the inputValue hasn't changed since last time
          // commenting this out, it turns out React will not re-render if the exact same value is passed in for the setter as the actual value of the state variable
          // if(inputValue !== text){
          //   setText(inputValue);
          // }
          if (inputValue.length > NUM_OF_CHARACTERS_ALLOWED) {
            setError(
              `Your guess cannot be greater than ${NUM_OF_CHARACTERS_ALLOWED} characters in length.`
            );
          } else if (error.length > 0) {
            setError('');
          }
          setText(inputValue.slice(0, 5));
        }}
        required
        disabled={disabled}
      />
      {error.length > 0 && <div>{error}</div>}
    </form>
  );
}

export default GuessInput;
