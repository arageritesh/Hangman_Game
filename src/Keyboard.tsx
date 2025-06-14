
import styles from "./keyboard.module.css";
const KEYS = ['a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'];
 type KeyboardProps = {
  disabled? : boolean
  activeLetters : string[]
  inactiveLetters : string[]
  addGuessedLetter : (letter : string) => void
 }
function Keyboard({activeLetters  , disabled = false,inactiveLetters , addGuessedLetter} : KeyboardProps) {
  return (
    <div 
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit , minmax(75px ,1fr))",
        gap: ".5rem",
    }}>
      {KEYS.map(key => {
        const isActive =activeLetters.includes(key)
        const isinActive =inactiveLetters.includes(key)
        return <button onClick={()=>addGuessedLetter(key)} 
        className={`${styles.btn}
        ${isinActive ? styles.inactive : ""}
        ${isActive ? styles.active : ""}
        `}
        disabled={isinActive || isActive || disabled}
        key={key}>{key}</button>
      })}
    </div>
  )
}

export default Keyboard
