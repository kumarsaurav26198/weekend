    import {ActionTypes} from '../constants/action-types'

    export const setProduts= (products) => {
        return {
            type: ActionTypes.SELECTED_PRODUCT,
            payload:products,
        }
    }
    export const selectdeProdut= (product) => {
        return {
            type: ActionTypes.SELECTED_PRODUCT,
            payload:product,
        }
    }