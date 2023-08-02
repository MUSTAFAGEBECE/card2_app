

function SpecialButton({ renk, text, islev }) {
    return (
      <button onClick={islev} className={renk}>
        {text}
      </button>
    );
  }
  
  export default SpecialButton;