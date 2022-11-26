import "./Header.css";

const Header = ({totalPlayers, totalCredits}) => {
    let homepage;
    if(window.location.pathname === "/")
        homepage = true;
    else
        homepage = false;
    const details = <div class="details-container">
        <table>
            <tr>
                <th>{totalPlayers}/11<br />Players</th>
                <th>0<br />AFGH</th>
                <th>0<br />AUST</th>
                <th>0<br />NZLD</th>
                <th>0<br />ENGW</th>
                <th>0<br />WI</th>
                <th>0<br />USA</th>
                <th>{totalCredits}<br />Cr left</th>
            </tr>
        </table>
  </div>
  
    return(
        <div>
            <h3>{homepage ? "Pick Players": "Picked players"}</h3>
            {homepage ? details: ""}
        </div>
    );
}

export default Header;