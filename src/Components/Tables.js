import "./Tables.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Tables = ({
    batsmanList,
    wicketKeeperList,
    allRoundersList,
    bowlersList,
    batsmanHandle,
    wicketKeeperHandle,
    allRoundersHandle,
    bowlersHandle
    }) =>{

    return(
        <Box className="table-container" >
            <Grid className="grid-container" container spacing={2}>
                <Grid item xs={5} style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                    <h4 className="table-heading">Pick 3-7 batsman</h4>
                    <div className="data" onClick={() => batsmanHandle(batsmanList[0])}>
                        <div>Player1</div>
                        <div>Credit<br />{batsmanList[0]}</div>
                    </div>
                    <div  className="data" onClick={() => batsmanHandle(batsmanList[1])}>
                        <div>Player2</div>
                        <div>Credit<br />{batsmanList[1]}</div>
                    </div>
                    <div  className="data" onClick={() => batsmanHandle(batsmanList[2])}>
                        <div>Player3</div>
                        <div>Credit<br />{batsmanList[2]}</div>
                    </div>
                    <div className="data" onClick={() => batsmanHandle(batsmanList[3])}>
                        <div>Player4</div>
                        <div>Credit<br />{batsmanList[3]}</div>
                    </div>
                    <div className="data" onClick={() => batsmanHandle(batsmanList[4])}>
                        <div>Player5</div>
                        <div>Credit<br />{batsmanList[4]}</div>
                    </div>
                    <div className="data" onClick={() => batsmanHandle(batsmanList[5])}>
                        <div>Player6</div>
                        <div>Credit<br />{batsmanList[5]}</div>
                    </div>
                </Grid>
                    <Grid item xs={5}>
                        <h4 className="table-heading">Pick 1-5 wicket keepers</h4>
                        <div className="data" onClick={() => wicketKeeperHandle(wicketKeeperList[0])}>
                            <div>Player1</div>
                            <div>Credit<br />{wicketKeeperList[0]}</div>
                        </div>
                        <div  className="data" onClick={() => wicketKeeperHandle(wicketKeeperList[1])}>
                            <div>Player2</div>
                            <div>Credit<br />{wicketKeeperList[1]}</div>
                        </div>
                        <div  className="data" onClick={() => wicketKeeperHandle(wicketKeeperList[2])}>
                            <div>Player3</div>
                            <div>Credit<br />{wicketKeeperList[2]}</div>
                        </div>
                        <div className="data" onClick={() => wicketKeeperHandle(0)}>
                            <div>Player4</div>
                            <div>Credit<br />0</div>
                        </div>
                        <div className="data" onClick={() => wicketKeeperHandle(0)}>
                            <div>Player5</div>
                            <div>Credit<br />0</div>
                        </div>
                        <div className="data" onClick={() => wicketKeeperHandle(0)}>
                            <div>Player6</div>
                            <div>Credit<br />0</div>
                        </div>
                    </Grid>
                <Grid item xs={5} style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
                    <h4 className="table-heading">Pick 0-4 All rounders</h4>
                    <div className="data" onClick={() => allRoundersHandle(allRoundersList[0])}>
                        <div>Player1</div>
                        <div>Credit<br />{allRoundersList[0]}</div>
                    </div>
                    <div  className="data" onClick={() => allRoundersHandle(allRoundersList[1])}>
                        <div>Player2</div>
                        <div>Credit<br />{allRoundersList[1]}</div>
                    </div>
                    <div  className="data" onClick={() => allRoundersHandle(allRoundersList[2])}>
                        <div>Player3</div>
                        <div>Credit<br />{allRoundersList[2]}</div>
                    </div>
                    <div className="data" onClick={() => allRoundersHandle(allRoundersList[3])}>
                        <div>Player4</div>
                        <div>Credit<br />{allRoundersList[3]}</div>
                    </div>
                    <div className="data" onClick={() => allRoundersHandle(allRoundersList[4])}>
                        <div>Player5</div>
                        <div>Credit<br />{allRoundersList[4]}</div>
                    </div>
                    <div className="data" onClick={() => allRoundersHandle(allRoundersList[5])}>
                        <div>Player6</div>
                        <div>Credit<br />{allRoundersList[5]}</div>
                    </div>
                </Grid>
                    <Grid item xs={5}>
                        <h4 className="table-heading">Pick 3-7 Bowlers</h4>
                        <div className="data" onClick={() => bowlersHandle(bowlersList[0])}>
                            <div>Player1</div>
                            <div>Credit<br />{bowlersList[0]}</div>
                        </div>
                        <div  className="data" onClick={() => bowlersHandle(bowlersList[1])}>
                            <div>Player2</div>
                            <div>Credit<br />{bowlersList[1]}</div>
                        </div>
                        <div  className="data" onClick={() => bowlersHandle(bowlersList[2])}>
                            <div>Player3</div>
                            <div>Credit<br />{bowlersList[2]}</div>
                        </div>
                        <div className="data" onClick={() => bowlersHandle(bowlersList[3])}>
                            <div>Player4</div>
                            <div>Credit<br />{bowlersList[3]}</div>
                        </div>
                        <div className="data" onClick={() => batsmanHandle(bowlersList[4])}>
                            <div>Player5</div>
                            <div>Credit<br />{bowlersList[4]}</div>
                        </div>
                        <div className="data" onClick={() => bowlersHandle(bowlersList[5])}>
                            <div>Player6</div>
                            <div>Credit<br />{bowlersList[5]}</div>
                        </div>
                    </Grid>
                </Grid>
        </Box>
    )
}

export default Tables;