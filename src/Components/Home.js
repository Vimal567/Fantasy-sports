import Header from "./Header";
import Proceed from "./Proceed";
import Tables from "./Tables";
import React, {useState, useEffect} from "react"
import axios from "axios";
import { useSnackbar } from "notistack";

let creditsList = [];
const Home = () => {
    const { enqueueSnackbar } = useSnackbar();//declaring the snackarbar
    //Declaring all react hooks
    const [players, setPlayers] = useState([]);
    const [cannotFetch, setCannotFetch] = useState(false);
    const [totalCredits, setTotalCredits] = useState(100);
    const [totalPlayers, setTotalPlayers] = useState(0);
    const [batsmanTeam, setBatsmanTeam] = useState(0);
    const [wicketKeeperTeam, setWicketKeeperTeam] = useState(0);
    const [allRoundersTeam, setAllRoundersTeam] = useState(0);
    const [bowlersTeam, setBowlersTeam] = useState(0);
    
    let batsman = [];
    let wicketKeeper = [];
    let allRounders = [];
    let bowlers = [];
    //whenever homepage loads clear the localstorage so that previous credits gets deleted
    localStorage.clear();

    //Fetch all the players from the endpoint given
    const fetchPlayers = async () =>{
        let response;
        try {
          response = await axios.get(
            "https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json"
          );
        } catch (error) {
          enqueueSnackbar(error.response.data.message, { variant: "error" });
        }
        const resJSON = response.data;
        return resJSON;
    }

    //Filters the players according to their roles
    const filterPlayers = () => {
        batsman = players.filter((item) => {
            if(item["role"] === "Batsman")
                return item;
        });
        wicketKeeper = players.filter((item) => {
            if(item["role"] === "Wicket-Keeper")
                return item;
        });
        allRounders = players.filter((item) => {
            if(item["role"] === "All-Rounder")
                return item;
        });
        bowlers = players.filter((item) => {
            if(item["role"] === "Bowler")
                return item;
        });
    }

    //Handle function for batsman when clicked
    const batsmanHandle = (value) => {
        if(totalCredits < 0)
            enqueueSnackbar("Insufficient Credits, Please refresh the page and try again", { variant: "error" });
        else if(totalPlayers >= 11)
            enqueueSnackbar("Players limit exceeded, Please refresh the page and try again", { variant: "error" });
        else{
            if(batsmanTeam >= 7)
                enqueueSnackbar("Maximum 7 batsmans can be selected, Please refresh the page and try again", { variant: "error" });
            else{
                creditsList.push(value);
                setTotalCredits(totalCredits - value);
                setTotalPlayers(totalPlayers + 1);
                setBatsmanTeam(batsmanTeam + 1);
            }
        }
    }

    //Handle function for wicket keeper when clicked
    const wicketKeeperHandle = (value) => {
        if(value === 0)
            enqueueSnackbar("Invalid data, Please select other players", { variant: "error" });
        else if(totalCredits < 0)
            enqueueSnackbar("Insufficient Credits, Please refresh the page and try again", { variant: "error" });
        else if(totalPlayers >= 11)
            enqueueSnackbar("Players limit exceeded, Please refresh the page and try again", { variant: "error" });
        else{
            if(wicketKeeperTeam >= 5)
                enqueueSnackbar("Maximum 5 wicket keepers can be selected, Please refresh the page and try again", { variant: "error" });
            else{
                creditsList.push(value);
                setTotalCredits(totalCredits - value);
                setTotalPlayers(totalPlayers + 1);
                setWicketKeeperTeam(wicketKeeperTeam + 1);
            }
        }
    }

    //Handle function for all rounders when clicked
    const allRoundersHandle = (value) => {
        if(totalCredits < 0)
            enqueueSnackbar("Insufficient Credits, Please refresh the page and try again", { variant: "error" });
        else if(totalPlayers >= 11)
            enqueueSnackbar("Players limit exceeded, Please refresh the page and try again", { variant: "error" });
        else{
            if(allRoundersTeam >= 4)
                enqueueSnackbar("Maximum 4 all rounders can be selected, Please refresh the page and try again", { variant: "error" });
            else{
                creditsList.push(value);
                setTotalCredits(totalCredits - value);
                setTotalPlayers(totalPlayers + 1);
                setAllRoundersTeam(allRoundersTeam + 1);
            }
        }
    }

    //Handle function for bowlers when clicked
    const bowlersHandle = (value) => {
        if(totalCredits < 0)
            enqueueSnackbar("Insufficient Credits, Please refresh the page and try again", { variant: "error" });
        else if(totalPlayers >= 11)
            enqueueSnackbar("Players limit exceeded, Please refresh the page and try again", { variant: "error" });
        else{
            if(batsmanTeam >= 7)
                enqueueSnackbar("Maximum 7 bowlers can be selected, Please refresh the page and try again", { variant: "error" });
            else{
                creditsList.push(value);
                setTotalCredits(totalCredits - value);
                setTotalPlayers(totalPlayers + 1);
                setBowlersTeam(bowlersTeam + 1);
            }
        }
    }

    //UseEffect to fetch the players everytime
    useEffect(() => {
        fetchPlayers()
          .then((response) => {
            setPlayers(response);
            setCannotFetch(false);
          })
          .catch((error) => {
            console.log(error.message);
            setCannotFetch(true);
            enqueueSnackbar("Cannot fetch data at the moment", { variant: "error" });
          });
    }, []);
    
    //If not able to fetch data from the endpoint
    if (cannotFetch) {
        return (
          <>
            <Header />
            <div>
              <h5>
                Oops!. Cannot fetch data at the moment. Try refreshing the app or try again after some time.
              </h5>
            </div>
          </>
        );
    }

    filterPlayers();
    //List of credits of all players
    const batsmanList = batsman.map((item) => {
        return item["event_player_credit"];
    });
    const wicketKeeperList = wicketKeeper.map((item) => {
        return item["event_player_credit"];
    });
    const allRoundersList = allRounders.map((item) => {
        return item["event_player_credit"];
    });
    const bowlersList = bowlers.map((item) => {
        return item["event_player_credit"];
    });

    return(
        <React.Fragment>
            <Header
                totalPlayers = {totalPlayers}
                totalCredits = {totalCredits}
            />
            <Tables
                batsmanList = {batsmanList}
                wicketKeeperList = {wicketKeeperList}
                allRoundersList = {allRoundersList}
                bowlersList = {bowlersList}
                batsmanHandle = {batsmanHandle}
                wicketKeeperHandle = {wicketKeeperHandle}
                allRoundersHandle = {allRoundersHandle}
                bowlersHandle = {bowlersHandle}
             />
            <Proceed 
                creditsList = {creditsList}
            />
        </React.Fragment>
    )
}

export default Home;