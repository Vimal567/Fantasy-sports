import "./picked.css";
import Header from "./Header";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Picked = () => {
    const getCreditsList = JSON.parse(localStorage.getItem("credits"));//to get credits list from local storage
    return(
        <>
            <Header />
            <Box className="table-container" >
                <Grid className="grid-container" container spacing={2}>
                    <Grid item xs={5} style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                        <h4 className="table-heading">Pick 3-7 batsman</h4>
                        <div className="player-list">
                            <div>Player1</div>
                            <div>Credit<br />{getCreditsList[0]}</div>
                        </div>
                        <div  className="player-list">
                            <div>Player2</div>
                            <div>Credit<br />{getCreditsList[1]}</div>
                        </div>
                        <div  className="player-list">
                            <div>Player3</div>
                            <div>Credit<br />{getCreditsList[2]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player4</div>
                            <div>Credit<br />{getCreditsList[3]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player5</div>
                            <div>Credit<br />{getCreditsList[4]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player6</div>
                            <div>Credit<br />{getCreditsList[5]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player7</div>
                            <div>Credit<br />{getCreditsList[5]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player8</div>
                            <div>Credit<br />{getCreditsList[5]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player9</div>
                            <div>Credit<br />{getCreditsList[5]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player10</div>
                            <div>Credit<br />{getCreditsList[5]}</div>
                        </div>
                        <div className="player-list">
                            <div>Player11</div>
                            <div>Credit<br />{getCreditsList[5]}</div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
    </>
    )
}

export default Picked;