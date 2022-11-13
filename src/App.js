import React from "react";
import "./App.css";

class App extends React.Component
{
    constructor()
    {
        super()
        this.PalindromeCheck = this.PalindromeCheck.bind(this);
        this.Resultstyling = this.Resultstyling.bind(this);
        this.state = {
            result : "To find out if a word is a palindrome, type it in the box above",
            palindrome : false
        }
    }

    render()
    {
        return(
            <div className="container">
                <h1>Palindrome check</h1>
                <input type="textarea" onChange={this.PalindromeCheck}/>
                <this.Resultstyling />
            </div>
        );
    }

    Resultstyling()
    {   
        if(this.state.palindrome)
            return <p className="yes">{this.state.result}</p>
        else return <p className="no">{this.state.result}</p>
    }

    PalindromeCheck(event)
    {
        if(event.target.value === "")
        {
            this.setState({result: "To find out if a word is a palindrome, type it in the box above", palindrome : false});
            return;
        }

        let lowRegUserInput = event.target.value.toLowerCase();
        let reversedInput = [...lowRegUserInput].reverse().join("");

        if(lowRegUserInput === reversedInput)
            this.setState({result: "Word " + event.target.value + " is a palindrome", palindrome : true});
        else this.setState({result: "Word " + event.target.value + " is NOT palindrome", palindrome: false});
    }
}

export default App;