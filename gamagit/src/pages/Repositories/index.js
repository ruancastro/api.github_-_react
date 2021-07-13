import React, {useEffect, useState} from 'react';
import * as S from './styled';

export default function Repositories(){
    const [repositories, setRepositories] = useState ([]);
    useEffect(()=> {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
    },[]);
    return(
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return(
                        <S.listItem>Repositorio: {repository}</S.listItem>
                    )

                })}
            </S.List>
        </S.Container>
    )
}