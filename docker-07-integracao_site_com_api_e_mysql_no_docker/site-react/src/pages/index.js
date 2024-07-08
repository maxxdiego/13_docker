import Head from "next/head"
import Menu from "@/components/Menu"
import HomeTop from "@/components/HomeTop"
import HomeServices from "@/components/HomeServices"
import HomePremium from "@/components/HomePremium"
import Footer from "@/components/Footer"
import axios from 'axios'
import { useEffect, useState } from "react"

export default function Home() {

  // Declarar a variável para receber os dados do topo retornados da API
  const [homesTops, setHomesTops] = useState([])

  // Declarar a variável para receber os dados dos serviços retornados da API
  const [homesServices, setHomesServices] = useState([])

  // Declarar a variável para receber os dados dos serviços premiums retornados da API
  const [homesPremiums, setHomesPremiums] = useState([])

  // Declarar a variável para receber a mensagem
  const [message, setMessage] = useState("")

  // Criar a função com requisição para API recuperar dados para página home
  const getHome = async () => {
    // Realizar a requisição para API com axios para rota recuperar dados para página home
    await axios.get("http://localhost:4000/home")
    .then((response) => { // Acessa o then quando a API retornar status 200
      
      // Atribuir o conteúdo do topo no state homesTops
      //console.log(response.data.homesTops)      
      setHomesTops(response.data.homesTops)
      
      // Atribuir o conteúdo do topo no state homesServices
      //console.log(response.data.homesServices)      
      setHomesServices(response.data.homesServices)

      // Atribuir o conteúdo do topo no state homesPremiums
      //console.log(response.data.homesPremiums)      
      setHomesPremiums(response.data.homesPremiums)
      
    }).catch(err => { // Acessa o catch quando a API retornar erro

      // Acessa o IF quando a API retornar erro
      if(err.response){
        // Atribuir a mensagem no state message
        // console.log(err.response.data.message)
        setMessage(err.response.data.message)
      } else {
        // Atribuir a mensagem no state message
        // console.log("Erro: Tente mais tarde!")
        setMessage("Erro: Tente mais tarde!")
      }
    })
  }

  // useEffect é usado para lidar com efeitos colaterais de um componente. Por exemplo, atualizar o estado do componente, fazer chamadas a APIs, manipular eventos, entre outros.
  useEffect(() => {
        // Chamar a função com requisição para API
        getHome()
  }, [])

  return (
    <>
      <Head>
        <title>Neotech</title>
        <meta name="description" content="Landing page com React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <HomeTop homesTops={homesTops}/>
        <HomeServices homesServices={homesServices}/>
        <HomePremium homesPremiums={homesPremiums}/>
      </main>
      <Footer />
    </>
  );
}
