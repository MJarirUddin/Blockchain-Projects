export default (state, action) => {
    switch (action.type) {
        case 'REGISTER_PROPERTY':
            return {
                ...state,
                properties: [action.payload, ...state.properties]
            }

        case 'OFFER_STATUS':
            return {
                ...state,
                PropertyId_TokenIds: action.payload
            }

        case 'OWNER_LIST':
            return {
                ...state,
                ownerList: [action.payload,...state.ownerList]
            }

        case 'BUYING_REQUEST':
            return {
                ...state,
                offers: action.payload
            }

        case 'TRANSFER_EVENT': {
            return {
                ...state,
                OwnershipsEvents: action.payload
            }
        }

        case 'LANDS': {
            return {
                ...state,
                lands: action.payload
            }
        }

        case 'EVENTS':
            return {
                ...state,
                events: [action.payload, ...state.events]
            }

        case 'ENABLE_PROPERTY_SALE':
            return {
                ...state,
                tokenId: action.payload
            }

        case 'SETUP_WEB3':
            return {
                ...state,
                web3: action.payload,
                web3LoadingErrorMessage: "",
                web3Loadded: true
            }
        case 'SETUP_CONTRACT':
            return {
                ...state,
                contract: action.payload
            }

        case 'PROPERTY_DETAIL':
            return {
                ...state,
                contract: action.payload
            }

        case 'ADD_ETHEREUM_ACCOUNTS':
            return {
                ...state,
                accounts: action.payload
            }
        case 'WEB3_LOADING_ERROR':
            return {
                ...state,
                web3LoadingErrorMessage: action.errorMessage
            }
        default:
            return state;
    }
}