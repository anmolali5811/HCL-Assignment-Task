import {useState, useEffect} from "react"
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import NoProject from "./components/NoProject";
import axios from "axios"

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState([]);
  const [curProject, setCurProject] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${process.env.REACT_APP_API}/projects`);
        setProjects(response);
      } catch (error) {
        setProjects([])
        console.error(error.message);
      }
      setLoading(false);
    }

    if(search === '') fetchData();
  }, [search]);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${process.env.REACT_APP_API}/projects/search?q=${search}`);
        setProjects(response);
      } catch (error) {
        setProjects([]);
        console.error(error.message);
      }
      setLoading(false);
    }

    if(search !== '') fetchData();
  }, [search]);
  
  return (
    <div className='w-full min-h-screen'>
      <Header setSearch={setSearch} />
      {
        loading ? <Loader />
        : (projects.length === 0 ? <NoProject/> : <List projects={projects} setCurProject={setCurProject}/>)
      }
      {curProject && <Modal curProject={curProject} setCurProject={setCurProject} />}
    </div>
  );
}

export default App;
