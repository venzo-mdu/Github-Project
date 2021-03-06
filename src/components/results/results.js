import React, {useState}  from 'react'
import "../results/results.css";
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { select } from '../store/action';


const Results=(props)=> {
  const { repos } = props;
  console.log("Repos is :",repos.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchRepos,setsearchRepos] = useState([]);



  const handleClick = async (name) => {
          const result = name;
          console.log("check",result)
          const action ={ type:"SELECT_CHANZGE", text:result};
          dispatch(select(action))
          navigate('/data')

  }  

  const projectDetails = async (name) => {
      const result = name
      console.log("check",result)
      const action ={ type:"SELECT_CHANZGE", text:result};
      dispatch(select(action))
      navigate('/project')

} 
  const getFilterData=()=>{
      if (searchRepos.length >0){  
          return repos.data.filter(
          obj => obj.name.toLowerCase().includes(searchRepos.toLowerCase())
          ) 
      }
  return repos.data;
  }


  // const list = repos.length !== 0 ? repos.data.map((item) => <li>{item.name}</li>):(<li>No Repos Found</li>);
  // let data = localStorage.setItem("list", list)
  // console.log(list)
  return (
    <>

      {/* <div className='results'>
        <h4>Repos are :</h4>
        <div className='card'>
          <p>{list}</p>
        </div>
      </div> */}
     <label className='searchItems'>Search Project : </label><input  type='text' placeholder='search project' onChange={e => setsearchRepos(e.target.value)}/>   
      <div className='repoData'>
        {
          repos.length !== 0 ?(getFilterData().map((item) =>
            <Card className='card1' key={item.id} style={{ width: '18rem' }}>
              <Card.Img className='card-img' variant="top" src={item.owner.avatar_url} />
              Project Name<hr></hr><Card.Title className='card-title'> {item.name} </Card.Title>
              <Card.Subtitle className="my-2 text-muted">Project Id :{item.id}</Card.Subtitle>
              <Card.Body>
                <Card.Text>Created time: &nbsp;{item.created_at}</Card.Text>
                <Card.Text>Pushed time: &nbsp;{item.pushed_at}</Card.Text>
                <Card.Text>Watchers: &nbsp;{item.watchers}</Card.Text>
                <Card.Link className='openIssues' onClick={() => handleClick(item.name)}  value ={item.name}>open_issues:&nbsp; {item.open_issues} open issues count: {item.open_issues_count}</Card.Link>
                {/* <Card.Link className='closeIssues' onClick={() => handleClick(item.name)}  value ={item.name}>close_issues:&nbsp; {item.closed_at} close issues count: {}</Card.Link> */}
              </Card.Body>
              {/* {
              <Card.Link className='prj_link' href={item.html_url}>git Link </Card.Link>
             <a className='prj_link' href={`${item.html_url}/projects`} > project details</a>} */}
              <a className='cardLink1' > Git Link</a>
              <a className='cardLink2'  onClick={() => projectDetails(item.name)}  > ProjectDetails</a>
              <hr></hr>
            </Card>
          )):(<h1>No repos Found</h1>)
        }
      </div>

    </>
  )
}

export default Results;