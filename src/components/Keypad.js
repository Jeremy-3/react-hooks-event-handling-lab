// Code Keypad Component Here

function Keypad (){
    handleChange=()=>{
        console.log('Entering password...');
    }
    return (
        <input 
        type="password"
        onChange={handleChange}
        />
    )
}

export default Keypad;