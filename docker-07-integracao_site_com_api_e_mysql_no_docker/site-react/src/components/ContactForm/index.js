import styles from '@/components/ContactForm/ContactForm.module.css'
import { useState } from 'react'
import axios from 'axios'
//Biblioteca para validar os campos do formulário
import * as yup from 'yup'

const ContactForm = ({contentsContacts}) => {

    // Declarar uma nova variável dados com state e atribuir o objeto
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    })

    // Declarar a variável para receber a mensagem
    //const [message, setMessage] = useState("")
    const [message, setMessage] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    // Receber os dados dos campos do formulário
    const valueInput = (e) => setData({...data, [e.target.name] : e.target.value})

    // Executar a função quando o usuário clicar no botão do formulário
    const sendMsg = async (e) => {

        // Atribuir TRUE para apresentar o botão desativado
        setMessage({formSave: true})

        // Bloquear carregamento da página ao enviar o formulário
        e.preventDefault()
        console.log(data)

        // Chamar a função validar o formulário
        if(!(await validate())) return

        // Criar a constante com os dados do cabeçalho
        const headers = {
            'headers': {
                // Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'application/json'
            }
        }

        // Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
        await axios.post("http://localhost:4000/contact-message", data, headers)
        .then(response => { // Acessa o then quando a API retornar status 200
            // setMessage(response.data.message)
            setMessage({
                formSave: false,
                type: 'success',
                message: response.data.message
            })

            // Limpar os dados do state e os dados dos campos do formulário
            setData({
                name: '',
                email: '',
                subject: '',
                content: ''
            })


        }).catch(err => { // Acessa o catch quando a API retornar erro

            // Acessa o IF quando a API retornar erro
            if(err.response){

              // Atribuir a mensagem no state message
              // console.log(err.response.data.message)
              //setMessage(err.response.data.message)

              // Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
              setMessage({
                formSave: false,
                type: 'error',
                message: err.response.data.message
            })
            } else {
              // Atribuir a mensagem no state message
              // console.log("Erro: Tente mais tarde!")
            //   setMessage("Erro: Tente mais tarde!")
              // Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
              setMessage({
                formSave: false,
                type: 'error',
                message: "Erro: Tente mais tarde!"
            })
            }
          })
    }

    // Função validar o formulário
    async function validate(){
        let schema = yup.object().shape({
            content: yup.string("Erro: Necessário preencher o campo conteúdo!")
            .required("Erro: Necessário preencher o campo conteúdo!"),
            subject: yup.string("Erro: Necessário preencher o campo assunto!")
            .required("Erro: Necessário preencher o campo assunto!"),
            email: yup.string("Erro: Necessário preencher o campo e-mail!")
            .required("Erro: Necessário preencher o campo e-mail!")
            .email("Erro: Necessário preencher e-mail válido! "),
            name: yup.string("Erro: Necessário preencher o campo nome!")
            .required("Erro: Necessário preencher o campo nome!")
        })

        try{
            await schema.validate({
                name: data.name,
                email: data.email,
                subject: data.subject,
                content: data.content, 
            })
            return true
        } catch(error) {
            // Alterar formSave para FALSE indicando que pode ativar o botão e atribuir o tipo da mensagem e a mensagem
            setMessage({
                formSave: false,
                type: 'error',
                message: error.errors
            })
            return false;
        }
    }

    return(
        <div className={`${styles.column} ${styles.right}`}>
            <div className={styles.text}>
                {contentsContacts.titleForm}
            </div>

            {message.type === 'error' ? <p className="alertDanger">{message.message}</p> : ""}
            {message.type === 'success' ? <p className="alertSuccess">{message.message}</p> : ""}

            <form onSubmit={sendMsg}>
                <div className={styles.fields}>
                    <div className={`${styles.field} ${styles.name}`}>
                        <input type="text" name="name" placeholder="Digite o nome" onChange={valueInput} value={data.name}/>
                    </div>
                    <div className={`${styles.field} ${styles.email}`}>
                        <input type="text" name="email" placeholder="Digite o email" onChange={valueInput} value={data.email}/>
                    </div>
                </div>

                <div className={styles.field}>
                    <input type="text" name="subject" placeholder="Digite o assunto" onChange={valueInput} value={data.subject}/>
                </div>

                <div className={`${styles.field} ${styles.textarea}`}>
                    <textarea name="content" cols="30" rows="10" placeholder="Digite o conteúdo" onChange={valueInput} value={data.content}></textarea>
                </div>

                <div className={styles.buttonArea}>
                    {message.formSave ? <button type="submit" disabled>Enviando...</button> : <button type="submit">Enviar</button>}
                </div>

            </form>
        </div>
    )
}

export default ContactForm