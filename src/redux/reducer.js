const INIT_STATE = {
    carts: []
};


export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemsIndex=state.carts.findIndex((item)=>item.id===action.payload.id);

            if(ItemsIndex>=0){
                state.carts[ItemsIndex].qnty+=1
            }else{
                const temp={...action.payload,qnty:1}
                return{
                    ...state,
                    carts:[...state.carts,temp]
                }
            }

            // return{
            //     ...state,
            //     carts:[...state.carts,action.payload]
            // }

            // eslint-disable-next-line no-fallthrough
            case "RMV_CART":
                const data=state.carts.filter((el)=>el.id!==action.payload)

                return{
                    ...state,
                    carts:data
                }
                case "RMV_ONE":
                const ItemsIndex_dec=state.carts.findIndex((item)=>item.id===action.payload.id);
               
                if( state.carts[ItemsIndex_dec].qnty>=1){
                    const dltitems=state.carts[ItemsIndex_dec].qnty-=1
                    console.log(...state.carts,dltitems)
                
                return{
                    ...state,
                    carts:[...state.carts]
                }

             } else if(state.carts[ItemsIndex_dec].qnty>=1){
                    const data=state.carts.filter((el)=>el.id!==action.payload)

                    return{
                        ...state,
                        carts:data
                    }
                }

            default:
                return state
          
        }

    }

    