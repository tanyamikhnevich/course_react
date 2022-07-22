import * as React from "react";
import loading from "../../../assets/images/loading.gif";



const Preloader: React.FC = () => {
    return <div>
       <img src = {loading}/>
    </div>
}

export default Preloader;
