import React, { Component } from 'react'
import getJSONData from '../assets/JSON/blackHistory.json'
import styles from './layout.css'
import hbcuList from '../assets/hbcuList/hbcuList'

class Layout extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: "",
        recent_searches: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.getData = this.getData.bind(this)
    }

    handleChange(e){
      this.setState({ name: e.target.value })
    }

    handleClick(e){
      e.preventDefault()
      if(this.state.name != undefined){
        localStorage.setItem("user_search", this.state.name)
      }
      this.forceUpdate()
    }

    getData(){
      const recent = localStorage.setItem('recent_searches', this.state.name)
      const getRecent = localStorage.getItem('recent_searches')
      this.state.recent_searches.push(getRecent)
    }

    getRandom(arr, n) {
      let result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
          throw new RangeError("Error: Too many elements");
      while (n--) {
          let x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    }


    render() {
      let user_search = localStorage.getItem("user_search")
      let userSearch = getJSONData[user_search]
      let nameKeys = []
      for (let k in getJSONData) nameKeys.push(k)
      let randomNameList = this.getRandom(nameKeys, 5)

      let blackHistoryNames = randomNameList.map((item) =>
      <li>
        {item}
      </li>
      )

      if (userSearch) {
        let educationList = userSearch.education.map((item) =>
        <li>
          {item}
        </li>
        )
        let accomplishmentList = userSearch.accomplishments.map((item) =>
        <li>
          {item}
        </li>
        )
        
        this.getData()
        let uniqueNames = []
        this.state.recent_searches.forEach((i) => {
          if (!uniqueNames.includes(i)) {
            uniqueNames.push(i)
          }
        })

        let recentSearchesList = uniqueNames.map((item) =>
          <li>
            {item}
          </li>
        )

        function findCommonItems(array1, array2) { 
          for(let i = 0; i < array1.length; i++) { 
              for(let j = 0; j < array2.length; j++) { 
                  if(array1[i] === array2[j]) { 
                      return true; 
                  } 
              } 
          } 
          return false;  
        }

        let find = findCommonItems(hbcuList, userSearch.education)
        
        let findhbcu = find ? <h3>Attended an HBCU!</h3> : null

        return(
          <div>
            <div>
              <form>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
              </form>
            </div>
            <header>Suggested Searches</header>
            <div>{blackHistoryNames}</div>
            <div style={{marginTop: "20px", textAlign: "center"}}>
              <img src={userSearch.headshot} height="500"/>
            </div>
            <div>{findhbcu}</div>
            <header>Life Span</header>
            <div>
              {userSearch.life_date}
            </div>
            <header>Birthplace</header>
            <div>
              {userSearch.birthplace}
            </div>
            <header>Education</header> 
            <div>{educationList}</div>
            <header>Occupation</header>
            <div>
              {userSearch.occupation}
            </div> 
            <header>Summary</header>
            <div>
              {userSearch.summary}
            </div> 
            <header>Accomplishments</header>
            <div>
              {accomplishmentList}
            </div>
            <header>Quote</header>
            <div>
              {userSearch.quote}
            </div>
            <header>Fun Fact</header>
            <div>
              {userSearch.fun_fact}
            </div>
            <header>Last Searched</header>
            <ul>
              {recentSearchesList}
            </ul>
          </div>
        )
      } else {
        return (
          <div>
              <form>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
              </form>
              <header>Suggested Searches</header>
              <div>{blackHistoryNames}</div>
          </div>
        )
      }
    }
}



export default Layout