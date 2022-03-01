import React from 'react';
import './style.scss';
import Whats from '../../Assets/whatsapp.png';
import sendMessage from '../../helpers/sendWatsappMessage'


function Card(props) {

    const {endereco, contatos } = props.data;

    return (
        <div className="card">
            <h1>{props.data.name}</h1>        
            <div className='info'>
                <span>
                    Horaio de funcionamento: 18:00 - 03:00
                </span>
                <span>
                    {
                    `${endereco.logradouro}, ${endereco.numero}, ${endereco.bairro}`
                    }
                </span>
                <span>
                    {`Telefone: ${contatos.tel}`}
                </span>
            </div>
            <div className='footer'>
                <small className='alert'>FECHANDO EM BREVE!</small>
                <div>
                    <button onClick={() => sendMessage(contatos.whatsapp ? contatos.whatsapp : contatos.tel  )} className='contact'>
                        <img src={Whats} alt="Whatsapp" />
                        <span>Entre em contato</span>
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default Card;