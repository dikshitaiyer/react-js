import React ,{ Component, Fragment }  from 'react';
import Search from "./components/Search";
import './App.css';
import './Search.css';
import axios from 'axios';



class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            query: '',
            articles :[] ,
            search : '',
            message: '',
            results : {}
            
        }
    }
    


    onChange = e =>{
        this.setState({search : e.target.value}) ;
    }
    componentDidMount() {
		
		fetch('https://newsapi.org/v2/everything?q=reactjs&apiKey=f379d00effa34dbc9080dc1cdcc0ab21&pageSize=10&page=1')
        .then((response)=>{
            return response.json();
        })
		.then((myJson)=>{
             this.setState({
                articles : myJson.articles
            });
        });
    }
    
    
    
    searchHandler = ( event ) => {
		      console.log(event.target.value);
			this.setState( {search : event.target.value, results : {}})
		
	};

    
    
    renderSearchResults = () => {
		const { results } = this.state;
        

		if ( Object.keys( this.state.results ).length && results.length ) {
			return (
				<div>
					{ results.map( result => {
						return (
							<a key={ result.title } href={ result.name } >
								<h2 style = {{textAlign :'left' }}> {result.title}</h2>
                            
									<h4 >{result.author}</h4>
               
									  <img src = {result.urlToImage} style = {{width : '5vw'}} />
							
                
									  <img src = {result.url} />
								
								 <p>
            {result.content}
        </p>
                <a href = {result.url} >Read More </a>
        
							</a>
						)

					} ) }

				</div>
			)
		}
	};

    
	render() {
        console.log(this.state);
        
        
		return (
            
            <div className = "container">
            
			<h2 className="heading">News Feed </h2>
			<label className="search-label" htmlFor="search-input">
            
				<input
					type="text"
					name="query"   
					
					id="search-input"
					placeholder="Search..."
					onChange={this.searchHandler}
				/>
            
				<i className ="fa fa-search" aria-hidden="true"> </i>

			</label>
            
            
			
            {this.state.articles.map((item,index)=>{
            
           return ( 
               <div>
               <h2 style = {{textAlign :'left' }}>
               
                   {item.title}
            </h2>
        <h4>  {item.author}</h4>
        <img src = {item.urlToImage} style = {{width : '5vw'}} />
       
        <p>
            {item.content}
        </p>
                <a href = {item.url} >Read More </a>
        </div>
                 );
            
            

    })}
          {this.renderSearchResults()}
			

			</div>
		);
	}
}

export default App;