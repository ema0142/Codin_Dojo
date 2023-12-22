import PersonCard from './Components/PersonCard'


function App() {
const people =[
{firstName:"John", lastName:"Doe" ,age:45 ,hairColor:"Black"},
{firstName:"Jane", lastName:"Smith" ,age:88 ,hairColor:"Brown"},
{firstName:"Fillmore", lastName:"Millard" ,age:50 ,hairColor:"Brown"},
{firstName:"Smith", lastName:"Maria" ,age:62 ,hairColor:"Brown"},
]
return(
<div className="App">
      {people.map((person,idx)=><PersonCard key={idx} person={person}/>)}
    </div>
)
}

export default App;
 