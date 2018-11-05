const INITIAL_STATE = ({printa: 'nao'});

export function knowledges(state=INITIAL_STATE, action){
    switch(action.type){
        case 'TESTA_REDUCER':
            return { printa: 'sim'}
        default:
            console.log(state.printa);
            return state;
    }
}
