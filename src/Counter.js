import React, {useState} from "react";

function Counter(){

 const[count, setCount] = useState(0);
 const[count1, setCount1] = useState(0);

return(



<div>

<p>  Du hast mich {count} mal geklickt     </p>
<button onClick = {() => setCount(count+ 1)}>Klick mich</button>
</div>



);


};

export default Counter;