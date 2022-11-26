import "./Proceed.css"
import {Link } from "react-router-dom";//Link is used to navigate to picked player page
import { useSnackbar } from "notistack";

const Proceed = ({creditsList}) =>{
    const { enqueueSnackbar } = useSnackbar();

    //Handler function to handle the click of proceed button
    const handleClick = () => {
        if(creditsList.length < 11)
            enqueueSnackbar("Totally 11 players should be selected", { variant: "error" });
        else{
            localStorage.setItem("credits", JSON.stringify(creditsList));//to set the credits in local storage to access inside picked player components.
        }
    }

    return(
        <div className="button-container">
            {creditsList.length === 11 ?
                <Link className="link" to="/proceed">
                    <button type="button" onClick={handleClick} >
                        Proceed
                    </button>
                </Link>:
                <button>Proceed</button>
            }
        </div>
    )
}

export default Proceed;