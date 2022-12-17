import Input from "../components/Input";
import Button from "../components/Button";

import { useState } from "react";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)
    
    if(data.id) {

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositório não encontrado ou já procurado')

  }

  const removeRepo = (id) => {
    console.log('removendo', id)
  }

  return (
    <Container>
      <img width={72} height={72} src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value) } />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo removeRepo={removeRepo} repo={repo} />)}
    </Container>
  );
}

export default App;

