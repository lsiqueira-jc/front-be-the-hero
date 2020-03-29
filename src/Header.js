import React from 'react';

function Headers(props){
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Headers;

//props.children : pega conteudo enviado dentro do componente <componente> pega esse conteudo </componente>